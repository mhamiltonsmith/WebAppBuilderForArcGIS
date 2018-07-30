// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:builder/plugins/attribute-config/dataSource/DataSourceConfig.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"data-source-label"\x3e${nls.dataSource}\x3c/div\x3e\r\n  \x3cdiv class\x3d"source ds-text-box marginTop5" data-dojo-attach-point\x3d"sourceUrl" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d\'required:true,trim:true,disabled:true\'\x3e\x3c/div\x3e\r\n\r\n\r\n\r\n  \x3cdiv class\x3d"marginTop20 data-source-label"\x3e${nls.name}\x3c/div\x3e\r\n  \x3cdiv class\x3d"marginTop5 ds-text-box" data-dojo-props\x3d\'required:true,trim:true\' data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-attach-point\x3d"sourceName"\x3e\x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"marginTop20 data-source-label"\x3e${nls.sourceFilterLabel}\x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"marginTop5 flex-ltr-start"\x3e\r\n    \x3cinput class\x3d"button" type\x3d"button" value\x3d${nls.set} data-dojo-attach-point\x3d"btnSet"/\x3e\r\n    \x3cinput class\x3d"button" type\x3d"button" value\x3d${nls.config} data-dojo-attach-point\x3d"btnConfig"/\x3e\r\n    \x3cinput class\x3d"button marginLeft15" type\x3d"button" value\x3d${nls.remove} data-dojo-attach-point\x3d"btnRemove"/\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"filterExpr" class\x3d"marginLeft10 filterExpr"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv style\x3d"display: none;" class\x3d"layerOptionDiv" data-dojo-attach-point\x3d"layerOnlyOption"\x3e\r\n\r\n    \x3cdiv class\x3d"marginTop20 data-source-label"\x3e${nls.sourceFieldsLabel}\x3c/div\x3e\r\n    \x3cinput class\x3d"button visible marginTop5" type\x3d"button" value\x3d${nls.set} data-dojo-attach-event\x3d"click:_onFeaturesFieldsClick"/\x3e\r\n\r\n    \x3cdiv class\x3d"hide fieldsOption fieldsOptionDiv fields-position-lr" data-dojo-attach-point\x3d"fieldsOptionDiv"\x3e\r\n      \x3cdiv class\x3d"left-arrow transform"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"fieldsOption" class\x3d"suspension"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n\r\n    \x3cdiv class\x3d"marginTop20 data-source-label"\x3e${nls.sourceRecordsLabel}\x3c/div\x3e\r\n    \x3cdiv style\x3d"margin-top: 12px;" class\x3d"flex-ltr-start"\x3e\r\n      \x3cdiv class\x3d"data-source-sub-label"\x3e${nls.number}\x3c/div\x3e\r\n      \x3cdiv class\x3d"data-source-sub-label"\x3e${nls.orbderBy}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv class\x3d"marginTop5 flex-ltr-start"\x3e\r\n\r\n      \x3cdiv class\x3d"resultRecordType"\x3e\r\n        \x3cselect  data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"resultRecordType"\x3e\r\n          \x3coption value\x3d"serviceLimitation"\x3e${nls.serviceLimitation}\x3c/option\x3e\r\n          \x3coption value\x3d"all"\x3e${nls.all}\x3c/option\x3e\r\n          \x3coption value\x3d"custom"\x3e${nls.custom}\x3c/option\x3e\r\n        \x3c/select\x3e\r\n      \x3c/div\x3e\r\n\r\n      \x3cdiv class\x3d"marginLeft5 custom-number-div"\x3e\r\n          \x3cdiv class\x3d"hide" data-dojo-attach-point\x3d"customNumberDiv"\x3e\r\n          \x3cinput type\x3d"text" class\x3d"custom-number" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d\'required:true,constraints:{min:1,places:0},value:1000\' data-dojo-attach-point\x3d"customNumber"\x3e\x3c/input\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n\r\n\r\n      \x3cdiv class\x3d"marginLeft20 orderByField"\x3e\r\n        \x3cselect data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"orderFields"\x3e\x3c/select\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"marginLeft20 order"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"ascBtn" class\x3d"order-btn selected textOverFlow" title\x3d"${nls.ASC}"\x3e${nls.ASC}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"descBtn" style\x3d"margin-left: -1px;" class\x3d"order-btn textOverFlow" title\x3d"${nls.DESC}"\x3e${nls.DESC}\x3c/div\x3e\r\n      \x3c/div\x3e\r\n\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv style\x3d"display: none;" class\x3d"statisticsOptionDiv" data-dojo-attach-point\x3d"statisticsOnlyOption"\x3e\r\n    \x3cdiv class\x3d"marginTop20 data-source-label"\x3e${nls.statistics}\x3c/div\x3e\r\n    \x3cdiv style\x3d"margin-top: 12px;" class\x3d"flex-ltr-start"\x3e\r\n      \x3cdiv class\x3d"data-source-sub-label"\x3e${nls.groupBy}\x3c/div\x3e\r\n      \x3cdiv class\x3d"data-source-sub-label"\x3e${nls.sourceFieldsLabel}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"marginTop5 flex-ltr-start"\x3e\r\n      \x3cdiv class\x3d"groupFields" \x3e\r\n        \x3cselect data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"groupFields"\x3e\r\n          \x3coption value\x3d"-"\x3e-\x3c/option\x3e\r\n        \x3c/select\x3e\r\n      \x3c/div\x3e\r\n      \x3cinput class\x3d"marginLeft20 button visible" type\x3d"button" value\x3d${nls.set} data-dojo-attach-point\x3d"statisticsFields" data-dojo-attach-event\x3d"click:_onStatisticsFieldsClick"/\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"hide statisticsFieldsOption fieldsOptionDiv statisrics-fields-position-lr" data-dojo-attach-point\x3d"statisticsFieldsOptionDiv"\x3e\r\n      \x3cdiv class\x3d"left-arrow transform"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"statisticsFieldsOption" class\x3d"suspension"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"data-source-label marginTop20"\x3e${nls.refreshInterval}\x3c/div\x3e\r\n  \x3cdiv class\x3d"refreshContent marginTop5"\x3e\r\n    \x3cdiv data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"isDynamic"\x3e\x3c/div\x3e\x3clabel class\x3d"margin-left-10 textOverFlow"\x3e${nls.refreshDataEvery}\x3c/label\x3e\r\n    \x3cinput type\x3d"text" class\x3d"timeDiv" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d\'required:true,constraints:{min:0},value:0.5\' data-dojo-attach-point\x3d"refreshInterval"\x3e\x3c/input\x3e\r\n     \x3cspan\x3e${nls.refreshDataEvery_Minutes}\x3c/span\x3e\r\n  \x3c/div\x3e\r\n\r\n\t\x3cdiv class\x3d"footer"\x3e\r\n    \x3cdiv class\x3d"jimu-float-leading data-preview textOverFlow" title\x3d"${nls.preview}" data-dojo-attach-point\x3d"btnPreview" data-dojo-attach-event\x3d"click:_onPreviewClick"\x3e${nls.preview}\x3c/div\x3e\r\n    \x3cdiv class\x3d"jimu-btn jimu-float-trailing cancel" data-dojo-attach-point\x3d"btnCancel"\x3e${nls.cancel}\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"jimu-btn jimu-float-trailing ok jimu-trailing-margin1" data-dojo-attach-point\x3d"btnOk"\x3e${nls.ok}\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n\x3cdiv data-dojo-attach-point\x3d"loading" data-dojo-type\x3d"jimu/dijit/LoadingIndicator" data-dojo-props\x3d"hidden:true"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/Evented dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./DataSourceConfig.html dojo/on dojo/_base/html dojo/_base/query dojo/dom-style jimu/dijit/Popup jimu/dijit/Filter dojo/_base/lang dojo/Deferred esri/request esri/tasks/query esri/tasks/QueryTask jimu/dijit/CheckBox jimu/dijit/Message jimu/utils jimu/Query jimu/LayerInfos/LayerInfos ./DataFields ./utils jimu/DataSourceManager jimu/dijit/DataPreviewTable jimu/dijit/LoadingIndicator dijit/form/ValidationTextBox dijit/form/Select dijit/form/NumberTextBox".split(" "),
function(p,q,r,t,u,v,f,d,g,l,m,w,e,x,y,z,A,B,k,h,C,D,n,E,F,G,H){return p([r,q,t,u],{templateString:v,baseClass:"data-sources-config",_layerDefinition:null,_filterObj:null,_filterByExtent:!1,_numberFieldTypes:["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],postMixInProperties:function(){this.nls=e.mixin(this.nls,window.jimuNls.common)},postCreate:function(){this.inherited(arguments);this.setConfig(this.config);this._initEvent()},setConfig:function(a){a&&
(this.config=a,"Features"===this.config.type?(l.set(this.layerOnlyOption,{display:"block"}),this._initFeaturesFields()):"FeatureStatistics"===this.config.type&&(l.set(this.statisticsOnlyOption,{display:"block"}),this._initFeatureStatisticsFields()),this.reset(),this.sourceName.setValue(this.config.label||""),this.sourceUrl.set("value",this.config.url||""),this.sourceUrl.title=this.config.url||"",this.config.filter&&(this._filterObj=this.config.filter),"undefined"!==typeof this.config.filterByExtent&&
(this._filterByExtent=this.config.filterByExtent),this._refreshFilterBtnDisplay(),this._setFilterExpr(),this._getDefinition().then(e.hitch(this,function(){this.queryType=C.getQueryType(this._layerDefinition);this._setRefreshInterval();"Features"===this.config.type?(this._setFeaturesFields(),this._setRecords(),this._setOrderByFieldForRecords()):"FeatureStatistics"===this.config.type&&(this._setStatisticsFields(),this._setGroupByFields())})))},_setFilterExpr:function(){var a="";this._filterObj&&(a=
this._filterObj.expr);this._filterByExtent&&(a&&(a+="\x26"),a+="Extent\x3d"+!!this._filterByExtent);a||(a=this.nls.noFilter);this.filterExpr.innerText=""},_initFeaturesFields:function(){this.featuresFields=new n({nls:{moveUp:window.jimuNls.simpleTable.moveUp,moveDown:window.jimuNls.simpleTable.moveDown}});this.featuresFields.placeAt(this.fieldsOption);this.featuresFields.startup();this.own(f(this.featuresFields,"change",e.hitch(this,function(){this._layerDefinition&&this._setOrderByFieldForRecords()})))},
_setFeaturesFields:function(){var a=this.config.dataSchema&&this.config.dataSchema.fields,b=this._getFilteredFields(this._layerDefinition.fields,"esriFieldTypeGeometry");a&&a.length?(a=this._getFieldsNames(a,!1),b=this._keepRequiredFields(b,!1),this.featuresFields.setFields(b),this.featuresFields.selectFields(a)):(b=this._keepRequiredFields(b,!0),this.featuresFields.setFields(b))},_setRecords:function(){3===this.queryType?(this._updateOptions(this.resultRecordType,null,"serviceLimitation"),this.resultRecordType.set("disabled",
!0)):(this.resultRecordType.set("disabled",!1),this.config.resultRecordType&&(this._updateOptions(this.resultRecordType,null,this.config.resultRecordType),"undefined"!==typeof this.config.resultRecordCount&&"custom"===this.config.resultRecordType&&this.customNumber.setValue(this.config.resultRecordCount)))},_setOrderByFieldForRecords:function(){if(1===this.queryType){this._activeOrderOption();var a=this._getFieldsForOrderBy();this._updateOptions(this.orderFields,a);if(this.config.dataSchema&&h.isNotEmptyObject(this.config.dataSchema.orderByFields)){var a=
this.config.dataSchema.orderByFields[0].split(" ")[0],a=this._getFieldLabelByFieldName(a),b=this.config.dataSchema.orderByFields[0].split(" ")[1];this._updateOptions(this.orderFields,null,a);"DESC"===b?this._onOrderClick(!1):this._onOrderClick(!0)}}else this._disableOrderOption()},_activeOrderOption:function(){this.orderFields.set("disabled",!1);d.removeClass(this.ascBtn,"disabled");d.removeClass(this.descBtn,"disabled")},_disableOrderOption:function(){this.orderFields.set("disabled",!0);d.addClass(this.ascBtn,
"disabled");d.addClass(this.descBtn,"disabled")},_initFeatureStatisticsFields:function(){this.statisticsFields=new n({nls:{moveUp:window.jimuNls.simpleTable.moveUp,moveDown:window.jimuNls.simpleTable.moveDown}});this.statisticsFields.placeAt(this.statisticsFieldsOption);this.statisticsFields.startup()},_setStatisticsFields:function(){var a=this._hasNumberFields(this._layerDefinition);a&&(a=this._getFilteredFields(a,"esriFieldTypeOID"),a=this._getFilteredFields(a,"esriFieldTypeGeometry"),this.statisticsFields.setFields(a),
this.config.dataSchema&&h.isNotEmptyObject(this.config.dataSchema.fields)&&(a=this._getFieldsNames(this.config.dataSchema.fields,!1),this.config.dataSchema.groupByFields&&0<this.config.dataSchema.groupByFields.length&&a.splice(a.indexOf(this.config.dataSchema.groupByFields[0]),1),this.statisticsFields.selectFields(a)))},_setGroupByFields:function(){if(this._layerDefinition&&this._layerDefinition.fields){var a=this._getFilteredFields(this._layerDefinition.fields,"esriFieldTypeGeometry"),a=this._handleFieldsForSelectOption(a);
a.unshift({label:"-",value:"-"});this._updateOptions(this.groupFields,a);this.config.dataSchema&&this.config.dataSchema.groupByFields&&(a=this._getFieldLabelByFieldName(this.config.dataSchema.groupByFields[0]),this._updateOptions(this.groupFields,null,a))}},_supportsStatisticsByExtent:function(){var a=!0;this.config&&"FeatureStatistics"===this.config.type&&this._layerDefinition&&this._layerDefinition.currentVersion&&10.11>Number(this._layerDefinition.currentVersion)&&(a=!1);return a},_createFilterPopup:function(a){this.filterDomNode=
d.toDom('\x3cdiv class\x3d"data-sources-filter"\x3e\x3cdiv class\x3d"filter-label"\x3e'+this.nls.extent+'\x3c/div\x3e\x3cdiv class\x3d"filterByExtent" style\x3d"margin-top: 10px;"\x3e\x3c/div\x3e\x3cdiv style\x3d"margin-top: 20px;" class\x3d"filter-label queryCritiera"\x3e'+this.nls.queryCritiera+'\x3c/div\x3e\x3cdiv style\x3d"margin-top: 15px;" class\x3d"filterDiv"\x3e\x3c/div\x3e\x3cdiv class\x3d"footer"\x3e\x3cdiv class\x3d"jimu-float-leading sample-btn data-preview textOverFlow"\x3e'+this.nls.sampleData+
'\x3c/div\x3e\x3cdiv class\x3d"jimu-btn jimu-float-trailing cancel btnCancel"\x3e'+this.nls.cancel+'\x3c/div\x3e\x3cdiv class\x3d"jimu-btn jimu-float-trailing ok jimu-trailing-margin1 btnOk"\x3e'+this.nls.ok+"\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e");d.setStyle(g(".filter-label",this.filterDomNode)[0],"display","block");d.setStyle(g(".filterByExtent",this.filterDomNode)[0],"display","block");d.setStyle(g(".queryCritiera",this.filterDomNode)[0],"margin-top","20px");var b=g(".filterByExtent",this.filterDomNode)[0];
this.cbxFilterByExtent=new B({label:this.nls.filterByExtentLabel});this.cbxFilterByExtent.placeAt(b);this.cbxFilterByExtent.setStatus(this._supportsStatisticsByExtent());this.popup=new m({titleLabel:this.nls.dataSourceFilter,width:680,height:485,content:this.filterDomNode});b=this.sourceUrl.getValue().trim();"set"===a?this._createNewFilter(b,"1\x3d1"):"config"===a&&this._editFilter(b,this._filterObj);a=g(".footer .btnOk",this.filterDomNode)[0];this.own(f(a,"click",e.hitch(this,function(){var a=this.filter.toJson();
if(!a||!a.expr)return new k({message:window.jimuNls.filterBuilder.setFilterTip}),null;this._filterByExtent=this.cbxFilterByExtent.checked;this._filterObj=a;this._setFilterExpr();this.filter.destroy();this.filter=null;this.popup.close();this.popup=null;this._refreshFilterBtnDisplay()})));a=g(".footer .btnCancel",this.filterDomNode)[0];this.own(f(a,"click",e.hitch(this,function(){this.filter.destroy();this.filter=null;this.popup.close();this.popup=null})));a=g(".sample-btn",this.filterDomNode)[0];this.own(f(a,
"click",e.hitch(this,this._onSampleDataClick)))},_createFilter:function(){this.filter=new w({nls:this.nls,enableAskForValues:!1,style:"width:100%;"});var a=g(".filterDiv",this.filterDomNode)[0];this.filter.placeAt(a)},_editFilter:function(a,b){this._createFilter();this.filter.buildByFilterObj(a,b,this._layerDefinition);this._filterByExtent&&this.cbxFilterByExtent.check()},_createNewFilter:function(a,b){this._createFilter();this.filter.buildByExpr(a,b,this._layerDefinition)},getConfig:function(){var a=
{};a.type=this.config.type;this.config.portalUrl&&(a.portalUrl=this.config.portalUrl);this.config.itemId&&(a.itemId=this.config.itemId);var b=!!this.isDynamic.checked;if(b){var c=this.refreshInterval.getValue();c&&(a.refreshInterval=Number(c))}a.isDynamic=b;a.label=this.sourceName.getValue();a.url=this.sourceUrl.getValue().trim();a.filterByExtent=this._filterByExtent;this._filterObj&&(a.filter=this._filterObj);this.useLayerFilterCbx&&(a.useLayerFilter=this._useLayerFilter);"Features"===this.config.type&&
(a=this._getFeaturesRecord(a));b=this._getVaildDataSchema();a.dataSchema=b;return a},_getFeaturesRecord:function(a){var b=this.resultRecordType.getValue();a.resultRecordType=b;"custom"===b&&(b=this.customNumber.getValue())&&(a.resultRecordCount=parseInt(b,10));return a},_getVaildDataSchema:function(){var a={},b,c;b=h.getDataSchemaFromLayerDefinition(this._layerDefinition);b.objectIdField&&(a.objectIdFieldName=b.objectIdField.name||"");a.geometryType=b.geometryType||"";a.displayFieldName=b.displayField||
"";a.typeIdField=b.typeIdField||"";if("Features"===this.config.type){if(b=this.featuresFields.getSelectedFieldNames(),b=this._getFieldsByFieldNames(b),a.fields=b||[],b=this.orderFields.getValue())b=this._getFieldNameByFieldLabel(b),c=[],c.push(b+" "+this._getSelectedOrder()),a.orderByFields=c}else"FeatureStatistics"===this.config.type&&(c=this.statisticsFields.getSelectedFieldNames(),0===c.length&&a.objectIdFieldName&&c.push(a.objectIdFieldName),b=this._getFieldsByFieldNames(c),a.statistics=this._getStatisticDefinition(b,
a.objectIdFieldName),b=e.clone(c),(c=this._getFieldNameByFieldLabel(this.groupFields.getValue()))?(b.push(c),a.groupByFields=[c]):a.groupByFields=[],a.fields=this._getFieldsByFieldNames(b)||[]);return a},_getFieldsByFieldNames:function(a){if(a)return 0===a.length?[]:a.map(e.hitch(this,function(a){return this._getFieldByFieldName(a)}))},_getStatisticFields:function(a){var b=[];if(0>=a.length)return b;"count sum min max avg stddev".split(" ").forEach(e.hitch(this,function(c){"count"===c?b.push(this._getFormatStatisticField(a[0],
c)):a.forEach(e.hitch(this,function(a){b.push(this._getFormatStatisticField(a,c))}))}));return b},_getFormatStatisticField:function(a,b){if(h.isNotEmptyObject(a)&&!Array.isArray(a))return a=e.clone(a),a.name=a.name+"_"+b,a},_getStatisticDefinition:function(a,b){var c=[];["count","sum","min","max","avg"].forEach(e.hitch(this,function(d){"count"===d?c.push(this._getFormatStatisticDefinition(d,b)):a.forEach(e.hitch(this,function(a){c.push(this._getFormatStatisticDefinition(d,b,a))}))}));return c},_getFormatStatisticDefinition:function(a,
b,c){var d={};if("count"===a)return d.onStatisticField=b||"*",d.outStatisticFieldName="STAT_COUNT",d.statisticType=a,d;b=h.upperCaseString(c.name+"_"+a);d.onStatisticField=c.name;d.outStatisticFieldName=b;d.statisticType=a;return d},_getDefinition:function(){var a=new x;h.isObject(this.config.definition)?(this._layerDefinition=this.config.definition,a.resolve()):(this.loading.show(),y({url:this.config.url,content:{f:"json"},handleAs:"json"}).then(e.hitch(this,function(b){this.domNode?(this.loading.hide(),
this._layerDefinition=b,a.resolve(b)):a.reject()}),e.hitch(this,function(b){console.error(b);a.reject();this.domNode&&this.loading.hide()})));return a},reset:function(){this.sourceName.setValue("");this.sourceUrl.set("value","");this.isDynamic.checked=!1;this.isDynamic.setStatus(!0);this.refreshInterval.set("disabled",!1);this.resultRecordType.set("disabled",!1);this._activeOrderOption();this._layerDefinition=null;this._filterByExtent=!1;this._filterObj=null;this.filterExpr.innerText="";this._refreshFilterBtnDisplay();
"Features"===this.config.type?(this.featuresFields.setFields([]),this._updateOptions(this.resultRecordType),this._updateOptions(this.orderFields,[]),this._onOrderClick(!0),d.addClass(this.customNumberDiv,"hide")):"FeatureStatistics"===this.config.type&&(this._updateOptions(this.groupFields,[{label:"-",value:"-"}]),this.statisticsFields.setFields([]))},_onFeaturesFieldsClick:function(a){a.stopPropagation();d.hasClass(this.fieldsOptionDiv,"hide")?d.removeClass(this.fieldsOptionDiv,"hide"):d.addClass(this.fieldsOptionDiv,
"hide")},_showStatisticsFieldsList:function(){d.removeClass(this.statisticsFieldsOptionDiv,"hide")},_hideStatisticsFieldsList:function(){d.addClass(this.statisticsFieldsOptionDiv,"hide")},_onStatisticsFieldsClick:function(a){a.stopPropagation();d.hasClass(this.statisticsFieldsOptionDiv,"hide")?this._showStatisticsFieldsList():this._hideStatisticsFieldsList()},_getFieldsNames:function(a,b){return a&&0!==a.length?a.map(function(a){return b?a.alias||a.name:a.name}):[]},_getStatisticsFieldRealNames:function(a){if(!a||
0===a.length)return[];a=a.map(function(a){return a.replace(/(_count|_sum|_max|_min|_avg|_stddev)$/,"")});a=h.uniqueArray(a);if(this.config.dataSchema.groupByFields){var b=this.config.dataSchema.groupByFields[0];b&&"-"!==b&&(a=a.filter(function(a){return a!==b}))}return a},_getFieldsForOrderBy:function(){var a=[],b=this.featuresFields.getSelectedFieldNames();b&&0<b.length&&(a=this._getFieldsByFieldNames(b),a=this._getFilteredFields(a,"esriFieldTypeGeometry"),a=this._handleFieldsForSelectOption(a));
return a},_getFieldByFieldName:function(a){if(this._layerDefinition&&this._layerDefinition.fields){var b;this._layerDefinition.fields.forEach(function(c){c.name===a&&(b=c)});return b}},_getFieldNameByFieldLabel:function(a){if(this._layerDefinition&&this._layerDefinition.fields){var b;this._layerDefinition.fields.forEach(function(c){if(c.alias===a||c.name===a)b=c.name});return b}},_getFieldLabelByFieldName:function(a){if(this._layerDefinition&&this._layerDefinition.fields){var b;this._layerDefinition.fields.forEach(function(c){c.name===
a&&(b=c.alias||c.name)});return b}},_handleFieldsForSelectOption:function(a){return!a||0>=a.length?[]:a=a.map(function(b){var c;"object"===typeof a[0]?c=b.alias||b.name:"string"===typeof a[0]&&(c=b);return{label:c,value:c}})},_updateOptions:function(a,b,c){b?(a.removeOption(a.getOptions()),a.addOption(b)):b=[];!c&&0<b.length&&(c=b[0].value);c&&a.set("value",c)},_setRefreshInterval:function(){this._settingRefreshIntervalFromMapLayer()||(this.config.isDynamic?(this.isDynamic.check(),this.config.refreshInterval&&
this.refreshInterval.setValue(this.config.refreshInterval)):this.isDynamic.uncheck())},_settingRefreshIntervalFromMapLayer:function(){var a;this.config.layerInfo?a=this.config.layerInfo:this.config.id&&"map"===this.config.id.split("~")[0]&&(a=this.config.id.split("~")[1],a=D.getInstanceSync().getLayerInfoById(a));if(a&&a.layerObject&&a.layerObject.refreshInterval)return this.isDynamic.check(),this.refreshInterval.setValue(a.layerObject.refreshInterval),this.refreshInterval.set("disabled",!0),this.isDynamic.setStatus(!1),
!0},_checkConfigValue:function(){var a=!0;this.sourceName.getValue()&&this.sourceUrl.getValue().trim()||(a=!1);!this.isDynamic.checked||this.refreshInterval.isValid()&&this.refreshInterval.getValue()||(a=!1);"custom"!==this.resultRecordType.getValue()||this.customNumber.isValid()||(a=!1);if("FeatureStatistics"===this.config.type){var b=this.statisticsFields.getSelectedFieldNames(),c=this._getFieldNameByFieldLabel(this.groupFields.getValue());-1<b.indexOf(c)&&(new k({message:this.nls.groupFieldIsNotAllowedInStatistics}),
a=!1)}return a},_hasNumberFields:function(a){var b=!1;(a=a.fields)&&0<a.length&&(b=a.filter(e.hitch(this,function(a){return 0<=this._numberFieldTypes.indexOf(a.type)})));return b},_refreshFilterBtnDisplay:function(){this._filterObj||this._filterByExtent?(d.addClass(this.btnConfig,"visible"),d.addClass(this.btnRemove,"visible"),d.removeClass(this.btnSet,"visible")):(d.removeClass(this.btnConfig,"visible"),d.removeClass(this.btnRemove,"visible"),d.addClass(this.btnSet,"visible"))},_initEvent:function(){this.own(f(document.body,
"click",e.hitch(this,function(a){var b=a.target||a.srcElement;this.featuresFields?(a=b===this.featuresFields.domNode,b=d.isDescendant(b,this.featuresFields.domNode),a||b||d.addClass(this.fieldsOptionDiv,"hide")):this.statisticsFields&&(a=b===this.statisticsFields.domNode,b=d.isDescendant(b,this.statisticsFields.domNode),a||b||d.addClass(this.statisticsFieldsOptionDiv,"hide"))})));this.own(f(this.resultRecordType,"change",e.hitch(this,function(a){"custom"===a?d.removeClass(this.customNumberDiv,"hide"):
d.addClass(this.customNumberDiv,"hide")})));this.own(f(this.btnOk,"click",e.hitch(this,function(){this._checkConfigValue()&&this.emit("ok",this.getConfig())})));this.own(f(this.btnCancel,"click",e.hitch(this,function(){this.emit("cancel")})));this.own(f(this.ascBtn,"click",e.hitch(this,function(){d.hasClass(this.ascBtn,"disabled")||this._onOrderClick(!0)})));this.own(f(this.descBtn,"click",e.hitch(this,function(){d.hasClass(this.descBtn,"disabled")||this._onOrderClick()})));this._initFilterBtnEvent()},
_onOrderClick:function(a){a?(d.addClass(this.ascBtn,"selected"),d.removeClass(this.descBtn,"selected")):(d.removeClass(this.ascBtn,"selected"),d.addClass(this.descBtn,"selected"))},_getSelectedOrder:function(){var a;d.hasClass(this.ascBtn,"selected")?a="ASC":d.hasClass(this.descBtn,"selected")&&(a="DESC");return a},_initFilterBtnEvent:function(){this.own(f(this.btnSet,"click",e.hitch(this,function(){this._createFilterPopup("set")})));this.own(f(this.btnConfig,"click",e.hitch(this,function(){this._createFilterPopup("config")})));
this.own(f(this.btnRemove,"click",e.hitch(this,function(){var a=new k({message:this.nls.removeFilterMessage,buttons:[{label:this.nls.ok,onClick:e.hitch(this,function(){this._filterObj=null;this._filterByExtent=!1;this._setFilterExpr();this._refreshFilterBtnDisplay();a.content=null;a.close()})},{label:this.nls.cancel,onClick:e.hitch(this,function(){a.content=null;a.close()})}]})})))},_keepRequiredFields:function(a,b){return a?a=a.map(function(a){"undefined"!==typeof a.nullable?(a.checked=!a.nullable,
a.disabled=!a.nullable):(a.checked="esriFieldTypeOID"===a.type,a.disabled="esriFieldTypeOID"===a.type);b&&(a.checked=!0);return a}):[]},_getFilteredFields:function(a,b){return a?a=a.filter(function(a){return a.type!==b}):[]},_isServiceSupportsOrderBy:function(a){var b=!1;a.advancedQueryCapabilities&&a.advancedQueryCapabilities.supportsOrderBy&&(b=!0);return b},_onSampleDataClick:function(){var a=new A(this.config.url),b=new z;b.where="1\x3d1";b.outFields=["*"];b.returnGeometry=!1;a.execute(b).then(e.hitch(this,
function(a){a.features=a.features.slice(0,10);this._showDataPreviewTable(a,"sampleData")}))},_onPreviewClick:function(){if(this._checkConfigValue()){this.dataPreviewTableLoading||(this.dataPreviewTableLoading=new H,this.dataPreviewTableLoading.placeAt(this.domNode));this.dataPreviewTableLoading.show();var a=e.clone(this.getConfig());a.id=this.config.id?this.config.id:E.createDataSourceId(this.config.serviceType,this.config.layerInfo?this.config.layerInfo.id:null);F.getInstance().doQuery(a).then(e.hitch(this,
function(b){if(a.dataSchema.groupByFields&&0<a.dataSchema.groupByFields.length)var c=a.dataSchema.groupByFields.length[0];b.fields&&(b.fields=b.fields.sort(function(a,b){return a.name===c?1:a.name-b.name}));this._showDataPreviewTable(b,"preview")}),e.hitch(this,function(){this.dataPreviewTableLoading.hide()}))}},_showDataPreviewTable:function(a,b){this.dataPreviewPopup=new m({titleLabel:"preview"===b?this.nls.preview:this.nls.sampleData,width:800,height:610,content:new G({height:610,featureSet:a,
loadingIndicator:this.dataPreviewTableLoading}),onClose:e.hitch(this,function(){this.dataPreviewTableLoading&&this.dataPreviewTableLoading.hide&&this.dataPreviewTableLoading.hide()})});d.addClass(this.dataPreviewPopup.domNode,"data-preview-popup")},destroy:function(){this.filter&&this.filter.destroy();this.dataPreviewTableLoading&&this.dataPreviewTableLoading.destroy();this.dataPreviewPopup&&this.dataPreviewPopup.destroy();this.inherited(arguments)}})});