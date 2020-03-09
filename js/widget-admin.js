/* Copyright (C) 2016-2020 Test Valley School.
    This program is free software; you can redistribute it and/or
    modify it under the terms of the GNU General Public License version 2
    as published by the Free Software Foundation.
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/
jQuery(document).ready(function($) {
	$.fn.tvsPBIBindFindPost = function() {
		if (typeof console != undefined) {
			console.log("Binding 'Find post' buttons for TVS Page Excerpt Widget");
		}

		$('.tvs-page-bgimage-find-post').off('click');

		$('.tvs-page-bgimage-find-post').click(function(e) {
			e.preventDefault();
			findPosts.open();

			// store context information so we know where to write back to in the event handler for the submit button
			window.tvsPBIPostContext = {
				postIdField: $(this).data('post-id-field'),
				postNameField: $(this).data('post-name-field')
			};

			// bind the submit button to this instance at this point
			$('#find-posts-submit').click(function() {
				//e.preventDefault is already executed by media.js event handler

				// grab the checked post
				$('.found-radio input:checked').each(function() {
					if (window.tvsPBIPostContext == null) {
						console.log('Cannot run without tvsPBIPostContext to know which widget form we are dealing with.');
					}
					$('#' + window.tvsPBIPostContext.postNameField).val( $('label[for="' + $(this).attr('id') + '"]').text() );
					$('#' + window.tvsPBIPostContext.postIdField).val($(this).val());
					// clear context
					window.tvsPBIPostContext = null;
				});
				findPosts.close();
			});
		});
	}


	$.fn.tvsPBIBindFindPost();

});
