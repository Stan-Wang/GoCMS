/**
 * 城市管理
 */

/**
 * 提交检测
 */
function form_submit() {
	var name = $.trim($("#name").val());
	if (name == '') {
		$("#name").focus();
		notice_tips("请输入城市名称!");
		return false;
	}
	return true;
}

/**
 * 删除城市
 * 
 * @param id
 */
function delete_city(id) {
	if (id == '') {
		notice_tips("参数错误!");
		return false;
	}

	art.dialog.confirm('你确定要删除吗?', function() {
		$.ajax({
			type : "POST",
			url : "/City/delete/",
			data : "id=" + id,
			success : function(html) {
				var tmp = jQuery.parseJSON(html);
				if (tmp.rtn_code == 0) {
					notice_tips("删除城市成功!");
					right_refresh();
				} else {
					notice_tips(tmp.content);
				}
			}
		});
	}, function() {
		notice_tips("你取消了删除城市操作!");
	});
}