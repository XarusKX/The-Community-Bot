Array.prototype.joinByIndex = function(separator, start = 0, end = this.length - 1) {
    end++;
    return this.slice(start, end).join(separator);
}
