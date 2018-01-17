/**
 * @Author zlx
 * @Date 2018/1/17 上午10:42
 */

var Loading = function () {
    this.color = ['#5fc6b3', '#5fc6b3', '#5fc6b3']; // default colors
    this.init = function (id) {
        var container = document.getElementById(id);
        this.container = container;
        return this;
    };

    this.start = function (color) {
        if (!color) {
            color = this.color;
        }
        for (var i = 0; i < 3; i++) {
            var dot = document.createElement('div');
            dot.style.backgroundColor = color[i];
            dot.setAttribute('class', 'dot'+(i+1));
            this.container.appendChild(dot);
        }
        return this;
    };

    this.end = function () {
        var parent = this.container.parentNode;
        if(parent){
            parent.removeChild(this.container);
        }
    }
}