Selectize.define('regular_expression', function (options) {
    if (this.settings.mode === 'single') return;

    options = $.extend({
        addRegex: null,
        addRegexContainerError: null,
        addRegexErrorMessage: null
    }, options);

    var self = this;

    this.addOption = (function () {
        var original = self.addOption;

        return function () {
            if (self.settings.addRegex != null && self.settings.addRegex != '') {
                var regexp = self.settings.addRegex;
                var correct = regexp.test(arguments[0].value);
                if (self.settings.addRegexContainerError != null && self.settings.addRegexContainerError != '') {
                    if (self.settings.addRegexErrorMessage != null && self.settings.addRegexErrorMessage != '') {
                        $(self.settings.addRegexContainerError).html(self.settings.addRegexErrorMessage);
                    }
                }
                if (!correct) return;
                else {
                    if (self.settings.addRegexContainerError != null && self.settings.addRegexContainerError != '') {
                        if (self.settings.addRegexErrorMessage != null && self.settings.addRegexErrorMessage != '') {
                            $(self.settings.addRegexContainerError).html("");
                        }
                    }
                }
            }
            return original.apply(this, arguments);
        };
    })();
});