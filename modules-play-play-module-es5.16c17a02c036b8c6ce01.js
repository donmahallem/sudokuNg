function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var l=e[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{ga8w:function(t,e,n){"use strict";n.r(e);var l,c,u=n("ofXK"),b=n("bTqV"),i=n("tyNb"),a=n("fXoL"),m=[{component:(l=function(){function t(){_classCallCheck(this,t),this.title="sudokuNg",this.field=new Array(9).fill(0).map((function(t){return new Array(9).fill(0)}))}return _createClass(t,[{key:"setValue",value:function(t,e,n){console.log(t,e,n),this.field[t][e]=n,console.log(this.field)}}]),t}(),l.\u0275fac=function(t){return new(t||l)},l.\u0275cmp=a.Gb({type:l,selectors:[["app-play"]],decls:162,vars:0,consts:[["mat-button","","value","#{ x } #{ y }","id","cell_00","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_01","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_02","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_03","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_04","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_05","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_06","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_07","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_08","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_10","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_11","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_12","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_13","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_14","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_15","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_16","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_17","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_18","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_20","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_21","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_22","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_23","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_24","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_25","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_26","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_27","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_28","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_30","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_31","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_32","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_33","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_34","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_35","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_36","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_37","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_38","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_40","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_41","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_42","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_43","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_44","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_45","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_46","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_47","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_48","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_50","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_51","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_52","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_53","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_54","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_55","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_56","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_57","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_58","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_60","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_61","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_62","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_63","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_64","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_65","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_66","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_67","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_68","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_70","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_71","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_72","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_73","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_74","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_75","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_76","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_77","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_78","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_80","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_81","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_82","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_83","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_84","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_85","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_86","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_87","type","number","min","1","max","9",3,"click"],["mat-button","","value","#{ x } #{ y }","id","cell_88","type","number","min","1","max","9",3,"click"]],template:function(t,e){1&t&&(a.Pb(0,"button",0),a.Wb("click",(function(t){return e.setValue(0,0,0)})),a.lc(1,"00"),a.Ob(),a.Pb(2,"button",1),a.Wb("click",(function(t){return e.setValue(0,1,0)})),a.lc(3,"01"),a.Ob(),a.Pb(4,"button",2),a.Wb("click",(function(t){return e.setValue(0,2,0)})),a.lc(5,"02"),a.Ob(),a.Pb(6,"button",3),a.Wb("click",(function(t){return e.setValue(0,3,0)})),a.lc(7,"03"),a.Ob(),a.Pb(8,"button",4),a.Wb("click",(function(t){return e.setValue(0,4,0)})),a.lc(9,"04"),a.Ob(),a.Pb(10,"button",5),a.Wb("click",(function(t){return e.setValue(0,5,0)})),a.lc(11,"05"),a.Ob(),a.Pb(12,"button",6),a.Wb("click",(function(t){return e.setValue(0,6,0)})),a.lc(13,"06"),a.Ob(),a.Pb(14,"button",7),a.Wb("click",(function(t){return e.setValue(0,7,0)})),a.lc(15,"07"),a.Ob(),a.Pb(16,"button",8),a.Wb("click",(function(t){return e.setValue(0,8,0)})),a.lc(17,"08"),a.Ob(),a.Pb(18,"button",9),a.Wb("click",(function(t){return e.setValue(1,0,0)})),a.lc(19,"10"),a.Ob(),a.Pb(20,"button",10),a.Wb("click",(function(t){return e.setValue(1,1,0)})),a.lc(21,"11"),a.Ob(),a.Pb(22,"button",11),a.Wb("click",(function(t){return e.setValue(1,2,0)})),a.lc(23,"12"),a.Ob(),a.Pb(24,"button",12),a.Wb("click",(function(t){return e.setValue(1,3,0)})),a.lc(25,"13"),a.Ob(),a.Pb(26,"button",13),a.Wb("click",(function(t){return e.setValue(1,4,0)})),a.lc(27,"14"),a.Ob(),a.Pb(28,"button",14),a.Wb("click",(function(t){return e.setValue(1,5,0)})),a.lc(29,"15"),a.Ob(),a.Pb(30,"button",15),a.Wb("click",(function(t){return e.setValue(1,6,0)})),a.lc(31,"16"),a.Ob(),a.Pb(32,"button",16),a.Wb("click",(function(t){return e.setValue(1,7,0)})),a.lc(33,"17"),a.Ob(),a.Pb(34,"button",17),a.Wb("click",(function(t){return e.setValue(1,8,0)})),a.lc(35,"18"),a.Ob(),a.Pb(36,"button",18),a.Wb("click",(function(t){return e.setValue(2,0,0)})),a.lc(37,"20"),a.Ob(),a.Pb(38,"button",19),a.Wb("click",(function(t){return e.setValue(2,1,0)})),a.lc(39,"21"),a.Ob(),a.Pb(40,"button",20),a.Wb("click",(function(t){return e.setValue(2,2,0)})),a.lc(41,"22"),a.Ob(),a.Pb(42,"button",21),a.Wb("click",(function(t){return e.setValue(2,3,0)})),a.lc(43,"23"),a.Ob(),a.Pb(44,"button",22),a.Wb("click",(function(t){return e.setValue(2,4,0)})),a.lc(45,"24"),a.Ob(),a.Pb(46,"button",23),a.Wb("click",(function(t){return e.setValue(2,5,0)})),a.lc(47,"25"),a.Ob(),a.Pb(48,"button",24),a.Wb("click",(function(t){return e.setValue(2,6,0)})),a.lc(49,"26"),a.Ob(),a.Pb(50,"button",25),a.Wb("click",(function(t){return e.setValue(2,7,0)})),a.lc(51,"27"),a.Ob(),a.Pb(52,"button",26),a.Wb("click",(function(t){return e.setValue(2,8,0)})),a.lc(53,"28"),a.Ob(),a.Pb(54,"button",27),a.Wb("click",(function(t){return e.setValue(3,0,0)})),a.lc(55,"30"),a.Ob(),a.Pb(56,"button",28),a.Wb("click",(function(t){return e.setValue(3,1,0)})),a.lc(57,"31"),a.Ob(),a.Pb(58,"button",29),a.Wb("click",(function(t){return e.setValue(3,2,0)})),a.lc(59,"32"),a.Ob(),a.Pb(60,"button",30),a.Wb("click",(function(t){return e.setValue(3,3,0)})),a.lc(61,"33"),a.Ob(),a.Pb(62,"button",31),a.Wb("click",(function(t){return e.setValue(3,4,0)})),a.lc(63,"34"),a.Ob(),a.Pb(64,"button",32),a.Wb("click",(function(t){return e.setValue(3,5,0)})),a.lc(65,"35"),a.Ob(),a.Pb(66,"button",33),a.Wb("click",(function(t){return e.setValue(3,6,0)})),a.lc(67,"36"),a.Ob(),a.Pb(68,"button",34),a.Wb("click",(function(t){return e.setValue(3,7,0)})),a.lc(69,"37"),a.Ob(),a.Pb(70,"button",35),a.Wb("click",(function(t){return e.setValue(3,8,0)})),a.lc(71,"38"),a.Ob(),a.Pb(72,"button",36),a.Wb("click",(function(t){return e.setValue(4,0,0)})),a.lc(73,"40"),a.Ob(),a.Pb(74,"button",37),a.Wb("click",(function(t){return e.setValue(4,1,0)})),a.lc(75,"41"),a.Ob(),a.Pb(76,"button",38),a.Wb("click",(function(t){return e.setValue(4,2,0)})),a.lc(77,"42"),a.Ob(),a.Pb(78,"button",39),a.Wb("click",(function(t){return e.setValue(4,3,0)})),a.lc(79,"43"),a.Ob(),a.Pb(80,"button",40),a.Wb("click",(function(t){return e.setValue(4,4,0)})),a.lc(81,"44"),a.Ob(),a.Pb(82,"button",41),a.Wb("click",(function(t){return e.setValue(4,5,0)})),a.lc(83,"45"),a.Ob(),a.Pb(84,"button",42),a.Wb("click",(function(t){return e.setValue(4,6,0)})),a.lc(85,"46"),a.Ob(),a.Pb(86,"button",43),a.Wb("click",(function(t){return e.setValue(4,7,0)})),a.lc(87,"47"),a.Ob(),a.Pb(88,"button",44),a.Wb("click",(function(t){return e.setValue(4,8,0)})),a.lc(89,"48"),a.Ob(),a.Pb(90,"button",45),a.Wb("click",(function(t){return e.setValue(5,0,0)})),a.lc(91,"50"),a.Ob(),a.Pb(92,"button",46),a.Wb("click",(function(t){return e.setValue(5,1,0)})),a.lc(93,"51"),a.Ob(),a.Pb(94,"button",47),a.Wb("click",(function(t){return e.setValue(5,2,0)})),a.lc(95,"52"),a.Ob(),a.Pb(96,"button",48),a.Wb("click",(function(t){return e.setValue(5,3,0)})),a.lc(97,"53"),a.Ob(),a.Pb(98,"button",49),a.Wb("click",(function(t){return e.setValue(5,4,0)})),a.lc(99,"54"),a.Ob(),a.Pb(100,"button",50),a.Wb("click",(function(t){return e.setValue(5,5,0)})),a.lc(101,"55"),a.Ob(),a.Pb(102,"button",51),a.Wb("click",(function(t){return e.setValue(5,6,0)})),a.lc(103,"56"),a.Ob(),a.Pb(104,"button",52),a.Wb("click",(function(t){return e.setValue(5,7,0)})),a.lc(105,"57"),a.Ob(),a.Pb(106,"button",53),a.Wb("click",(function(t){return e.setValue(5,8,0)})),a.lc(107,"58"),a.Ob(),a.Pb(108,"button",54),a.Wb("click",(function(t){return e.setValue(6,0,0)})),a.lc(109,"60"),a.Ob(),a.Pb(110,"button",55),a.Wb("click",(function(t){return e.setValue(6,1,0)})),a.lc(111,"61"),a.Ob(),a.Pb(112,"button",56),a.Wb("click",(function(t){return e.setValue(6,2,0)})),a.lc(113,"62"),a.Ob(),a.Pb(114,"button",57),a.Wb("click",(function(t){return e.setValue(6,3,0)})),a.lc(115,"63"),a.Ob(),a.Pb(116,"button",58),a.Wb("click",(function(t){return e.setValue(6,4,0)})),a.lc(117,"64"),a.Ob(),a.Pb(118,"button",59),a.Wb("click",(function(t){return e.setValue(6,5,0)})),a.lc(119,"65"),a.Ob(),a.Pb(120,"button",60),a.Wb("click",(function(t){return e.setValue(6,6,0)})),a.lc(121,"66"),a.Ob(),a.Pb(122,"button",61),a.Wb("click",(function(t){return e.setValue(6,7,0)})),a.lc(123,"67"),a.Ob(),a.Pb(124,"button",62),a.Wb("click",(function(t){return e.setValue(6,8,0)})),a.lc(125,"68"),a.Ob(),a.Pb(126,"button",63),a.Wb("click",(function(t){return e.setValue(7,0,0)})),a.lc(127,"70"),a.Ob(),a.Pb(128,"button",64),a.Wb("click",(function(t){return e.setValue(7,1,0)})),a.lc(129,"71"),a.Ob(),a.Pb(130,"button",65),a.Wb("click",(function(t){return e.setValue(7,2,0)})),a.lc(131,"72"),a.Ob(),a.Pb(132,"button",66),a.Wb("click",(function(t){return e.setValue(7,3,0)})),a.lc(133,"73"),a.Ob(),a.Pb(134,"button",67),a.Wb("click",(function(t){return e.setValue(7,4,0)})),a.lc(135,"74"),a.Ob(),a.Pb(136,"button",68),a.Wb("click",(function(t){return e.setValue(7,5,0)})),a.lc(137,"75"),a.Ob(),a.Pb(138,"button",69),a.Wb("click",(function(t){return e.setValue(7,6,0)})),a.lc(139,"76"),a.Ob(),a.Pb(140,"button",70),a.Wb("click",(function(t){return e.setValue(7,7,0)})),a.lc(141,"77"),a.Ob(),a.Pb(142,"button",71),a.Wb("click",(function(t){return e.setValue(7,8,0)})),a.lc(143,"78"),a.Ob(),a.Pb(144,"button",72),a.Wb("click",(function(t){return e.setValue(8,0,0)})),a.lc(145,"80"),a.Ob(),a.Pb(146,"button",73),a.Wb("click",(function(t){return e.setValue(8,1,0)})),a.lc(147,"81"),a.Ob(),a.Pb(148,"button",74),a.Wb("click",(function(t){return e.setValue(8,2,0)})),a.lc(149,"82"),a.Ob(),a.Pb(150,"button",75),a.Wb("click",(function(t){return e.setValue(8,3,0)})),a.lc(151,"83"),a.Ob(),a.Pb(152,"button",76),a.Wb("click",(function(t){return e.setValue(8,4,0)})),a.lc(153,"84"),a.Ob(),a.Pb(154,"button",77),a.Wb("click",(function(t){return e.setValue(8,5,0)})),a.lc(155,"85"),a.Ob(),a.Pb(156,"button",78),a.Wb("click",(function(t){return e.setValue(8,6,0)})),a.lc(157,"86"),a.Ob(),a.Pb(158,"button",79),a.Wb("click",(function(t){return e.setValue(8,7,0)})),a.lc(159,"87"),a.Ob(),a.Pb(160,"button",80),a.Wb("click",(function(t){return e.setValue(8,8,0)})),a.lc(161,"88"),a.Ob())},directives:[b.a],styles:['[_nghost-%COMP%]{width:80vh;height:80vh;margin:auto;display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-auto-rows:1fr;max-height:800px;max-width:800px;border:1px solid #000}[_nghost-%COMP%]   button[_ngcontent-%COMP%]{margin:0;padding:0;-webkit-box-flex:1;flex:1;grid-auto-rows:1fr}[_nghost-%COMP%]   button[_ngcontent-%COMP%]:before:nth-child(0){content:" ";display:block;width:0;padding-top:100%}']}),l),path:"**"}],r=((c=function t(){_classCallCheck(this,t)}).\u0275mod=a.Kb({type:c}),c.\u0275inj=a.Jb({factory:function(t){return new(t||c)},imports:[[i.b.forChild(m)],i.b]}),c);n.d(e,"PlayModule",(function(){return y}));var o,y=((o=function t(){_classCallCheck(this,t)}).\u0275mod=a.Kb({type:o}),o.\u0275inj=a.Jb({factory:function(t){return new(t||o)},imports:[[u.b,b.b,r]]}),o)}}]);
//# sourceMappingURL=modules-play-play-module-es5.16c17a02c036b8c6ce01.js.map