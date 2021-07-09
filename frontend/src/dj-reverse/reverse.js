window.Urls=(function(){"use strict";var data={"urls":[["admin:app_list",[["admin/%(app_label)s/",["app_label"]]]],["admin:auth_group_add",[["admin/auth/group/add/",[]]]],["admin:auth_group_change",[["admin/auth/group/%(object_id)s/change/",["object_id"]]]],["admin:auth_group_changelist",[["admin/auth/group/",[]]]],["admin:auth_group_delete",[["admin/auth/group/%(object_id)s/delete/",["object_id"]]]],["admin:auth_group_history",[["admin/auth/group/%(object_id)s/history/",["object_id"]]]],["admin:auth_user_add",[["admin/auth/user/add/",[]]]],["admin:auth_user_change",[["admin/auth/user/%(object_id)s/change/",["object_id"]]]],["admin:auth_user_changelist",[["admin/auth/user/",[]]]],["admin:auth_user_delete",[["admin/auth/user/%(object_id)s/delete/",["object_id"]]]],["admin:auth_user_history",[["admin/auth/user/%(object_id)s/history/",["object_id"]]]],["admin:auth_user_password_change",[["admin/auth/user/%(id)s/password/",["id"]]]],["admin:autocomplete",[["admin/autocomplete/",[]]]],["admin:core_person_add",[["admin/core/person/add/",[]]]],["admin:core_person_change",[["admin/core/person/%(object_id)s/change/",["object_id"]]]],["admin:core_person_changelist",[["admin/core/person/",[]]]],["admin:core_person_delete",[["admin/core/person/%(object_id)s/delete/",["object_id"]]]],["admin:core_person_history",[["admin/core/person/%(object_id)s/history/",["object_id"]]]],["admin:core_plan_add",[["admin/core/plan/add/",[]]]],["admin:core_plan_change",[["admin/core/plan/%(object_id)s/change/",["object_id"]]]],["admin:core_plan_changelist",[["admin/core/plan/",[]]]],["admin:core_plan_delete",[["admin/core/plan/%(object_id)s/delete/",["object_id"]]]],["admin:core_plan_history",[["admin/core/plan/%(object_id)s/history/",["object_id"]]]],["admin:index",[["admin/",[]]]],["admin:jsi18n",[["admin/jsi18n/",[]]]],["admin:login",[["admin/login/",[]]]],["admin:logout",[["admin/logout/",[]]]],["admin:password_change",[["admin/password_change/",[]]]],["admin:password_change_done",[["admin/password_change/done/",[]]]],["admin:token_blacklist_blacklistedtoken_add",[["admin/token_blacklist/blacklistedtoken/add/",[]]]],["admin:token_blacklist_blacklistedtoken_change",[["admin/token_blacklist/blacklistedtoken/%(object_id)s/change/",["object_id"]]]],["admin:token_blacklist_blacklistedtoken_changelist",[["admin/token_blacklist/blacklistedtoken/",[]]]],["admin:token_blacklist_blacklistedtoken_delete",[["admin/token_blacklist/blacklistedtoken/%(object_id)s/delete/",["object_id"]]]],["admin:token_blacklist_blacklistedtoken_history",[["admin/token_blacklist/blacklistedtoken/%(object_id)s/history/",["object_id"]]]],["admin:token_blacklist_outstandingtoken_add",[["admin/token_blacklist/outstandingtoken/add/",[]]]],["admin:token_blacklist_outstandingtoken_change",[["admin/token_blacklist/outstandingtoken/%(object_id)s/change/",["object_id"]]]],["admin:token_blacklist_outstandingtoken_changelist",[["admin/token_blacklist/outstandingtoken/",[]]]],["admin:token_blacklist_outstandingtoken_delete",[["admin/token_blacklist/outstandingtoken/%(object_id)s/delete/",["object_id"]]]],["admin:token_blacklist_outstandingtoken_history",[["admin/token_blacklist/outstandingtoken/%(object_id)s/history/",["object_id"]]]],["admin:view_on_site",[["admin/r/%(content_type_id)s/%(object_id)s/",["content_type_id","object_id"]]]],["core_api:login",[["api-core/login",[]]]],["core_api:plan_list",[["api-core/plans-list",[]]]],["core_api:refresh_token",[["api-core/refresh-token",[]]]],["core_api:sing_in",[["api-core/sign-in",[]]]],["index",[["%(resource)s",["resource"]],["",[]]]]],"prefix":"/"};function factory(d){var url_patterns=d.urls;var url_prefix=d.prefix;var Urls={};var self_url_patterns={};var _get_url=function(url_pattern){return function(){var _arguments,index,url,url_arg,url_args,_i,_len,_ref,_ref_list,match_ref,provided_keys,build_kwargs;_arguments=arguments;_ref_list=self_url_patterns[url_pattern];if(arguments.length==1&&typeof(arguments[0])=="object"){var provided_keys_list=Object.keys(arguments[0]);provided_keys={};for(_i=0;_i<provided_keys_list.length;_i++)
provided_keys[provided_keys_list[_i]]=1;match_ref=function(ref)
{var _i;if(ref[1].length!=provided_keys_list.length)
return false;for(_i=0;_i<ref[1].length&&ref[1][_i]in provided_keys;_i++);return _i==ref[1].length;}
build_kwargs=function(keys){return _arguments[0];}}else{match_ref=function(ref)
{return ref[1].length==_arguments.length;}
build_kwargs=function(keys){var kwargs={};for(var i=0;i<keys.length;i++){kwargs[keys[i]]=_arguments[i];}
return kwargs;}}
for(_i=0;_i<_ref_list.length&&!match_ref(_ref_list[_i]);_i++);if(_i==_ref_list.length)
return null;_ref=_ref_list[_i];url=_ref[0],url_args=build_kwargs(_ref[1]);for(url_arg in url_args){var url_arg_value=url_args[url_arg];if(url_arg_value===undefined||url_arg_value===null){url_arg_value='';}else{url_arg_value=url_arg_value.toString();}
url=url.replace("%("+url_arg+")s",url_arg_value);}
return url_prefix+url;};};var name,pattern,url,_i,_len,_ref;for(_i=0,_len=url_patterns.length;_i<_len;_i++){_ref=url_patterns[_i],name=_ref[0],pattern=_ref[1];self_url_patterns[name]=pattern;url=_get_url(name);Urls[name.replace(/[-_]+(.)/g,function(_m,p1){return p1.toUpperCase();})]=url;Urls[name.replace(/-/g,'_')]=url;Urls[name]=url;}
return Urls;}
return data?factory(data):factory;})();