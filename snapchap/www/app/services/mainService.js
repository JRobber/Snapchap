angular.module('snapchat')
.service('mainService', function($http) {


  this.getUserFriends = function(id) {
    return $http({
      method: 'GET',
      url: '/user/friends/' + id
    }).then(function(response) {
      return response.data;
    })
  }

  this.showMenu = function() {
    document.getElementById('index-html__nav-bottom').style.display = 'flex';
  };
  this.hideMenu = function() {
    document.getElementById('index-html__nav-bottom').style.display = 'none';
  };


  this.getCurrentUser = function(){
    return $http.get('/api/me').then(function(response){
        return getCurrentUserInfo(response.data)
    })
  }
  var getCurrentUserInfo = function(userId){
    return $http.get('/api/me/'+ userId).then(function(response){
      currentUser = '';
      return response.data[0];
    })
  }


  this.updateFriends = function(){
      return $http.get('/user/friends/:id').then(function(friends){
        return 'friends';
      })
  }

  this.updatePendingMessages = function(){
      return $http.get('/api/getMessages/:id').then(function(pendindMessages){
          return 'pendindMessages';
      })
  }
  this.getPendingFriendRequests = function(id){
      return $http.get('/api/getPendingFriendRequests/'+ id).then(function(PendingFriendRequests){
        console.log("mainSERVICE",PendingFriendRequests)
        return PendingFriendRequests;
      })
  }

  this.replyToFriendRequest = function(data){
      return $http.put('/api/changeFriendship', {data: data}).then(function(confirmation){
        return confirmation;
      })
  }

  this.sendMessage = function(){
      return $http.post('/api/uploadMessage').then(function(confirmation){
        return confirmation;
      })
  }
  this.getUsername = function(inputText){
    return $http.post('/api/searchUsers', {data: inputText}).then(function(results){
        return results;
    })
  }

  this.sendFriendRequest = function(data){
      return $http.post('/api/sendRequest', {data: data}).then(function(flag){
        return flag;
      })
  }

  this.detetFriend = function(){
      return $http.delete('/api/deleteFriendship').then(function(confirmation){
        return 'confirmation';
      })
  }

  this.updateEmail = function(data){
    return $http.put('/api/updateEmail', {id: data.id, email: data.email}).then(function(confirmation){
      return confirmation;
    })
  }

  this.comparePassword = function(password, id){
    return $http.put('/api/comparePassword', {password: password, id: id}).then(function(confirmation){
      return confirmation;
    })
  }

  this.updateFirstName = function(id, firstName){
    return $http.put('/api/updateFirstName', {id: id, firstName: firstName}).then(function(confirmation){
      return confirmation;
    })
  }

  this.updateLastName = function(id, lastName){
    return $http.put('/api/updateLastName', {id: id, lastName: lastName}).then(function(confirmation){
      return confirmation;
    })
  }

  this.updatePassword = function(id, password){
    return $http.put('/api/updatePassword', {id: id, password: password}).then(function(confirmation){
      return confirmation
    })
  }









});
