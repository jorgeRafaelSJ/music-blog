angular
	.module
	.factory('Post', 
		[ '$rootScope','PostsService', '$http', '$q',
		( $rootScope, PostsService, $http, $q)=> {
			return {
				
				title: undefined,
				description: undefined,
				link: undefined,
				_id: undefined,

				setAttributes: (attrs) => {
					this.title = attrs.title;
					this.description = attrs.description;
					this.link = attrs.link;
					this._id = attrs._id;
				},

				save: () => {
					if(!this._id) {
						return $http.post(`${$rootScope.api}/`, this)
					}	
				},

				public: () => {
					return {
						title: this.title,
						description: this.description,
						link: this.link,
						_id: this._id
					}
				}

			}
	}]);