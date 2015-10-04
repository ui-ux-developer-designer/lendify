define(["DEPS"],function(PARAMS){

return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (version) {
buf.push("<h2>Welcome to Spine.js version " + (jade.escape((jade_interp = version) == null ? '' : jade_interp)) + "</h2><p>Time to get busy with this magic!</p>");}.call(this,"version" in locals_for_with?locals_for_with.version:typeof version!=="undefined"?version:undefined));;return buf.join("");
};

});
