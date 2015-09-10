angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Janeth Valadez',
    lastText: 'You on your way?',
    face: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/12006208_10204508295536702_3120195145328511434_n.jpg?oh=b84ba7e93b306fd895acf7ec0986ec27&oe=56A99DD5'
  }, {
    id: 1,
    name: 'Arlenne Mota',
    lastText: 'Hey, it\'s me',
    face: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/1907382_842463272477076_5419426880409256730_n.jpg?oh=43b5e3a023b99783e6d1a7d1acae1f87&oe=5662BA81&__gda__=1448964387_bc8a8bed03491f152148bba1d89ea2a1'
  }, {
    id: 2,
    name: 'Arely Valdes',
    lastText: 'I should buy a boat',
    face: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/11390310_10202942223316124_6761803190300081432_n.jpg?oh=10ee16f8240f0d80d8d2b953d65e148a&oe=5664E99D'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
