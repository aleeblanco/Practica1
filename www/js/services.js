angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Janeth Valadez',
    lastText: 'Llegare tarde peladuki',
    face: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/12006208_10204508295536702_3120195145328511434_n.jpg?oh=b84ba7e93b306fd895acf7ec0986ec27&oe=56A99DD5'
  }, {
    id: 1,
    name: 'Arlenne Mota',
    lastText: 'Hello',
    face: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/1907382_842463272477076_5419426880409256730_n.jpg?oh=43b5e3a023b99783e6d1a7d1acae1f87&oe=5662BA81&__gda__=1448964387_bc8a8bed03491f152148bba1d89ea2a1'
  }, {
    id: 2,
    name: 'Arely Valdes',
    lastText: 'Hola',
    face: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/11390310_10202942223316124_6761803190300081432_n.jpg?oh=10ee16f8240f0d80d8d2b953d65e148a&oe=5664E99D'
  }, {
    id: 3,
    name: 'Isela Briseño',
    lastText: 'Donde andan mujeres',
    face: 'https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/1898253_10206717763416914_1694988025160312490_n.jpg?oh=2b3025dc32d8878f5d8c41c8e449a8b1&oe=56A23A67'
  }, {
    id: 4,
    name: 'Karlita Santos',
    lastText: '¿Ya vienes?',
    face: 'https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/11987181_928133407253125_7714961305001722102_n.jpg?oh=9e70fe7701f181ba79a96bc9c7ffeb2a&oe=56AB0ECA'
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
