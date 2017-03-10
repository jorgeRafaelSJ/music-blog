angular
	.module('app')
	.service('Post', [ '$rootScope', '$http', '$q', function($rootScope, $http, $q) {

				this.title = undefined,
				this.description = undefined,
				this.link = undefined,
				this._id = undefined,

				this.setAttributes = function(attrs) {
					console.log('MADE IT INSIDE', attrs);
					this.title = attrs.title;
					this.description = attrs.description;
					this.link = attrs.link;
					this._id = attrs._id;
					this.created_at = attrs.created_at;
					this.updated_at = attrs.updated_at;
				},

				this.save = function() {
					if(!this._id) {
						return $http.post(`${$rootScope.api}/posts`, this.public());
					}
					return;	
				},

				this.public = function() {
					return {
						title: this.title,
						description: this.description,
						link: this.link,
						_id: this._id,
						created_at: this.created_at,
						updated_at: this.updated_at
					}
				}
			
	}]);

