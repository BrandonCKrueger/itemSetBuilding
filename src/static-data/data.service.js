(function (angular) {
    'use strict';

    angular
        .module('itemSetApp')
        .factory('staticDataService', staticDataService);

    function staticDataService($http, $q) {
        var _maps = [
            { name: 'Summoner\'s Rift', code: 'SR', image: 'maps.png'},
            { name: 'Howling Abyss', code: 'HA', image: 'maps.png'},
            { name: 'Twisted Treeline', code: 'TT', image: 'maps.png'},
            { name: 'Crystal Scar', code: 'CS', image: 'maps.png'}
        ]
        var _modes = [
            { name: 'Classic', code: 'CLASSIC', image: 'maps.png'},
            { name: 'ARAM', code: 'ARAM', image: 'maps.png'},
            { name: 'Dominion', code: 'ODIN', image: 'maps.png'},
        ]
        var _summonerSpells = [
            {
                'id': 1,
                'description': 'Removes all disables and summoner spell debuffs affecting your champion and lowers the duration of incoming disables by 65% for 3 seconds.',
                'name': 'Cleanse',
                'key': 'SummonerBoost',
                'summonerLevel': 6,
                'image': {
                    left: -48,
                    top: 0
                }
            },
            {
                'id': 12,
                'description': 'After channeling for 3.5 seconds, teleports your champion to target allied structure, minion, or ward.',
                'name': 'Teleport',
                'key': 'SummonerTeleport',
                'summonerLevel': 6,
                'image': {
                    left: -144,
                    top: -48
                }
            },
            {
                'id': 14,
                'description': 'Ignites target enemy champion, dealing 70-410 true damage (depending on champion level) over 5 seconds, grants you vision of the target, and reduces healing effects on them for the duration.',
                'name': 'Ignite',
                'key': 'SummonerDot',
                'summonerLevel': 10,
                'image': {
                    left: -144,
                    top: 0
                }
            },
            {
                'id': 6,
                'description': 'Your champion can move through units and has 27% increased Movement Speed for 10 seconds',
                'name': 'Ghost',
                'key': 'SummonerHaste',
                'summonerLevel': 1,
                'image': {
                    left: -288,
                    top: 0
                }
            },
            {
                'id': 7,
                'description': 'Restores 90-345 Health (depending on champion level) and grants 30% Movement Speed for 1 second to you and target allied champion. This healing is halved for units recently affected by Summoner Heal.',
                'name': 'Heal',
                'key': 'SummonerHeal',
                'summonerLevel': 1,
                'image': {
                    left: -336,
                    top: 0
                }
            },
            {
                'id': 11,
                'description': 'Deals 390-1000 true damage (depending on champion level) to target epic or large monster or enemy minion.',
                'name': 'Smite',
                'key': 'SummonerSmite',
                'summonerLevel': 10,
                'image': {
                    left: -96,
                    top: -48
                }
            },
            {
                'id': 3,
                'description': 'Exhausts target enemy champion, reducing their Movement Speed and Attack Speed by 30%, their Armor and Magic Resist by 10, and their damage dealt by 40% for 2.5 seconds.',
                'name': 'Exhaust',
                'key': 'SummonerExhaust',
                'summonerLevel': 4,
                'image': {
                    left: -192,
                    top: 0
                }
            },
            {
                'id': 13,
                'description': 'Restores 40% of your champion\'s maximum Mana. Also restores allies for 40% of their maximum Mana',
                'name': 'Clarity',
                'key': 'SummonerMana',
                'summonerLevel': 1,
                'image': {
                    left: -384,
                    top: 0
                }
            },
            {
                'id': 2,
                'description': 'Reveals a small area of the map for your team for 5 seconds.',
                'name': 'Clairvoyance',
                'key': 'SummonerClairvoyance',
                'summonerLevel': 8,
                'image': {
                    left: -96,
                    top: 0
                }
            },
            {
                'id': 21,
                'description': 'Shields your champion for 115-455 (depending on champion level) for 2 seconds.',
                'name': 'Barrier',
                'key': 'SummonerBarrier',
                'summonerLevel': 4,
                'image': {
                    left: 0,
                    top: 0
                }
            },
            {
                'id': 4,
                'description': 'Teleports your champion a short distance toward your cursor\'s location.',
                'name': 'Flash',
                'key': 'SummonerFlash',
                'summonerLevel': 8,
                'image': {
                    left: -240,
                    top: 0
                }
            },
            {
                'id': 17,
                'description': 'Allied Turret: Grants massive regeneration for 8 seconds. Enemy Turret: Reduces damage dealt by 80% for 8 seconds.',
                'name': 'Garrison',
                'key': 'SummonerOdinGarrison',
                'summonerLevel': 1,
                'image': {
                    left: -432,
                    top: 0
                }
            }
        ];
        var _champions = [{'id':'1','name':'Annie'},{'id':'2','name':'Olaf'},{'id':'3','name':'Galio'},{'id':'4','name':'TwistedFate'},{'id':'5','name':'XinZhao'},{'id':'6','name':'Urgot'},{'id':'7','name':'Leblanc'},{'id':'8','name':'Vladimir'},{'id':'9','name':'FiddleSticks'},{'id':'10','name':'Kayle'},{'id':'11','name':'MasterYi'},{'id':'12','name':'Alistar'},{'id':'13','name':'Ryze'},{'id':'14','name':'Sion'},{'id':'15','name':'Sivir'},{'id':'16','name':'Soraka'},{'id':'17','name':'Teemo'},{'id':'18','name':'Tristana'},{'id':'19','name':'Warwick'},{'id':'20','name':'Nunu'},{'id':'21','name':'MissFortune'},{'id':'22','name':'Ashe'},{'id':'23','name':'Tryndamere'},{'id':'24','name':'Jax'},{'id':'25','name':'Morgana'},{'id':'26','name':'Zilean'},{'id':'27','name':'Singed'},{'id':'28','name':'Evelynn'},{'id':'29','name':'Twitch'},{'id':'30','name':'Karthus'},{'id':'31','name':'Chogath'},{'id':'32','name':'Amumu'},{'id':'33','name':'Rammus'},{'id':'34','name':'Anivia'},{'id':'35','name':'Shaco'},{'id':'36','name':'DrMundo'},{'id':'37','name':'Sona'},{'id':'38','name':'Kassadin'},{'id':'39','name':'Irelia'},{'id':'40','name':'Janna'},{'id':'41','name':'Gangplank'},{'id':'42','name':'Corki'},{'id':'43','name':'Karma'},{'id':'44','name':'Taric'},{'id':'45','name':'Veigar'},{'id':'48','name':'Trundle'},{'id':'50','name':'Swain'},{'id':'51','name':'Caitlyn'},{'id':'53','name':'Blitzcrank'},{'id':'54','name':'Malphite'},{'id':'55','name':'Katarina'},{'id':'56','name':'Nocturne'},{'id':'57','name':'Maokai'},{'id':'58','name':'Renekton'},{'id':'59','name':'JarvanIV'},{'id':'60','name':'Elise'},{'id':'61','name':'Orianna'},{'id':'62','name':'MonkeyKing'},{'id':'63','name':'Brand'},{'id':'64','name':'LeeSin'},{'id':'67','name':'Vayne'},{'id':'68','name':'Rumble'},{'id':'69','name':'Cassiopeia'},{'id':'72','name':'Skarner'},{'id':'74','name':'Heimerdinger'},{'id':'75','name':'Nasus'},{'id':'76','name':'Nidalee'},{'id':'77','name':'Udyr'},{'id':'78','name':'Poppy'},{'id':'79','name':'Gragas'},{'id':'80','name':'Pantheon'},{'id':'81','name':'Ezreal'},{'id':'82','name':'Mordekaiser'},{'id':'83','name':'Yorick'},{'id':'84','name':'Akali'},{'id':'85','name':'Kennen'},{'id':'86','name':'Garen'},{'id':'89','name':'Leona'},{'id':'90','name':'Malzahar'},{'id':'91','name':'Talon'},{'id':'92','name':'Riven'},{'id':'96','name':'KogMaw'},{'id':'98','name':'Shen'},{'id':'99','name':'Lux'},{'id':'101','name':'Xerath'},{'id':'102','name':'Shyvana'},{'id':'103','name':'Ahri'},{'id':'104','name':'Graves'},{'id':'105','name':'Fizz'},{'id':'106','name':'Volibear'},{'id':'107','name':'Rengar'},{'id':'110','name':'Varus'},{'id':'111','name':'Nautilus'},{'id':'112','name':'Viktor'},{'id':'113','name':'Sejuani'},{'id':'114','name':'Fiora'},{'id':'115','name':'Ziggs'},{'id':'117','name':'Lulu'},{'id':'119','name':'Draven'},{'id':'120','name':'Hecarim'},{'id':'121','name':'Khazix'},{'id':'122','name':'Darius'},{'id':'126','name':'Jayce'},{'id':'127','name':'Lissandra'},{'id':'131','name':'Diana'},{'id':'133','name':'Quinn'},{'id':'134','name':'Syndra'},{'id':'143','name':'Zyra'},{'id':'150','name':'Gnar'},{'id':'154','name':'Zac'},{'id':'157','name':'Yasuo'},{'id':'161','name':'Velkoz'},{'id':'201','name':'Braum'},{'id':'222','name':'Jinx'},{'id':'223','name':'TahmKench'},{'id':'236','name':'Lucian'},{'id':'238','name':'Zed'},{'id':'245','name':'Ekko'},{'id':'254','name':'Vi'},{'id':'266','name':'Aatrox'},{'id':'267','name':'Nami'},{'id':'268','name':'Azir'},{'id':'412','name':'Thresh'},{'id':'421','name':'RekSai'},{'id':'429','name':'Kalista'},{'id':'432','name':'Bard'}];
        var _itemTags = [
            "CooldownReduction",
            "Jungle",
            "Mana",
            "SpellDamage"
         ];
        var _items = {"3725": {
         "tags": [
            "Health",
            "Jungle"
         ],
         "id": 3725,
         "sanitizedDescription": "+300 Health +25% Bonus Health UNIQUE Passive - Immolate: Deals 15 (+0.6 per champion level) magic damage a second to nearby enemies. Deals 100% bonus damage to monsters.",
         "effect": {
            "Effect8Amount": "0",
            "Effect3Amount": "5",
            "Effect7Amount": "1.5",
            "Effect6Amount": "0.5",
            "Effect4Amount": "2",
            "Effect5Amount": "30",
            "Effect2Amount": "10",
            "Effect1Amount": "45"
         },
         "stats": {},
         "hideFromAll": true,
         "description": "<stats>+300 Health<br>+25% Bonus Health<\/stats><br><br><unique>UNIQUE Passive - Immolate:<\/unique> Deals 15 (+0.6 per champion level) magic damage a second to nearby enemies. Deals 100% bonus damage to monsters. ",
         "name": "Enchantment: Cinderhulk",
         "image": {
            "w": 48,
            "full": "3725.png",
            "sprite": "item2.png",
            "group": "item",
            "h": 48,
            "y": 288,
            "x": 96
         },
         "gold": {
            "total": 2250,
            "purchasable": true,
            "sell": 1575,
            "base": 400
         },
         "from": [
            "3713",
            "3751"
         ],
         "group": "JungleItems",
         "depth": 3
      },
      "3724": {
         "tags": [
            "CooldownReduction",
            "Jungle",
            "Mana",
            "SpellDamage"
         ],
         "id": 3724,
         "sanitizedDescription": "+50 Ability Power +200 Mana +10% Cooldown Reduction UNIQUE Passive - Spellblade: After using an ability, the next basic attack deals 100% Base Attack Damage (+30% of Ability Power) bonus magic damage on hit (1.5 second cooldown). When directly attacking a monster, the bonus damage is reapplied in an AoE around the target, and 8% of your missing Mana is restored.",
         "effect": {
            "Effect8Amount": "0",
            "Effect3Amount": "5",
            "Effect7Amount": "1.5",
            "Effect6Amount": "0.5",
            "Effect4Amount": "2",
            "Effect5Amount": "30",
            "Effect2Amount": "10",
            "Effect1Amount": "45"
         },
         "stats": {"FlatMPPoolMod": 200},
         "hideFromAll": true,
         "description": "<stats>+50 Ability Power<br><mana>+200 Mana<\/mana><br>+10% Cooldown Reduction<\/stats><br><br><unique>UNIQUE Passive - Spellblade:<\/unique> After using an ability, the next basic attack deals 100% Base Attack Damage (+30% of Ability Power) bonus magic damage on hit (1.5 second cooldown). When directly attacking a monster, the bonus damage is reapplied in an AoE around the target, and 8% of your missing Mana is restored.",
         "name": "Enchantment: Runeglaive",
         "image": {
            "w": 48,
            "full": "3724.png",
            "sprite": "item2.png",
            "group": "item",
            "h": 48,
            "y": 288,
            "x": 48
         },
         "gold": {
            "total": 2250,
            "purchasable": true,
            "sell": 1575,
            "base": 200
         },
         "from": [
            "3713",
            "3057"
         ],
         "group": "JungleItems",
         "depth": 3
      },
      "3089": {
         "tags": ["SpellDamage"],
         "id": 3089,
         "sanitizedDescription": "+120 Ability Power UNIQUE Passive: Increases Ability Power by 35%.",
         "effect": {"Effect1Amount": "35"},
         "plaintext": "Massively increases Ability Power",
         "stats": {"FlatMagicDamageMod": 120},
         "description": "<stats>+120 Ability Power  <\/stats><br><br><unique>UNIQUE Passive:<\/unique> Increases Ability Power by 35%.",
         "name": "Rabadon's Deathcap",
         "image": {
            "w": 48,
            "full": "3089.png",
            "sprite": "item0.png",
            "group": "item",
            "h": 48,
            "y": 432,
            "x": 384
         },
         "colloq": "dc;banksys;hat",
         "gold": {
            "total": 3500,
            "purchasable": true,
            "sell": 2450,
            "base": 965
         },
         "from": [
            "1026",
            "1058",
            "1052"
         ],
         "depth": 2
      }};
            
        var factory = {
            getRandomChampion: getRandomChampion,
            getChampions: getChampions,
            getChampionById: getChampionById,
            getChampionByName: getChampionByName,
            getItems: getItems,
            getItemTags: getItemTags,
            getItemById: getItemById,
            getSummonerSpells: getSummonerSpells,
            getMaps: getMaps,
            getModes: getModes
        };
        return factory;

        function getRandomChampion() {
            return _champions[Math.floor(Math.random() * _champions.length)];
        }

        function getChampions() {
            var deferred = $q.defer();

            if (_champions) {
                deferred.resolve(_champions);
            } else {
                $http({
                    method: 'GET',
                    url: './static-data/champions.json'
                }).then(function(data) {
                    _champions = data;
                    deferred.resolve(_champions);
                }).catch(function(error) {
                    deferred.reject(error);
                });
            }

            return deferred.promise;
        }
        
        function getChampionByName(championName) {
            var deferred = $q.defer();

            if(!championName || typeof championName !== 'string') {
                deferred.reject('ChampionName needs to be a string');
            } else {
                getChampions().then(function(champions) {
                    for(var i = 0; i < champions.length; i++) {
                        if (champions[i].name === championName) {
                            deferred.resolve(champions[i]);
                            return true;
                        }
                    }
                });
            }

            return deferred.promise;
        }

        function getChampionById(championId) {
            var deferred = $q.defer();

            if(!championId || typeof championId !== 'number') {
                deferred.reject('ChampionId needs to be a number');
            } else {
                getChampions().then(function(champions) {
                    deferred.resolve({
                        id: championId,
                        name: champions[championId]
                    });
                });
            }

            return deferred.promise;
        }
        
        function getItems() {
            var deferred = $q.defer();

            if (_items) {
                deferred.resolve(_items);
            } else {
                $http({
                    method: 'GET',
                    url: './static-data/items.json'
                }).then(function(data) {
                    _items = data;
                    deferred.resolve(_items);
                }).catch(function(error) {
                    deferred.reject(error);
                });
            }

            return deferred.promise;
        }
        
        function getItemTags() {
            var deferred = $q.defer();

            if (_itemTags) {
                deferred.resolve(_itemTags);
            } else {
                $http({
                    method: 'GET',
                    url: './static-data/items-tags.json'
                }).then(function(data) {
                    _itemTags = data;
                    deferred.resolve(_itemTags);
                }).catch(function(error) {
                    deferred.reject(error);
                });
            }

            return deferred.promise;
        }
        
        function getItemById(itemId) {
            var deferred = $q.defer();
            
            if(!itemId || typeof itemId === 'number') {
                deferred.reject('ItemID needs to be a number');
            }

            getItems().then(function(items) {
                deferred.resolve({
                    id: itemId,
                    name: items[itemId]
                });
            });

            return deferred.promise;
        }

        function getSummonerSpells() {
            var deferred = $q.defer();

            if (_summonerSpells) {
                deferred.resolve(_summonerSpells);
            } else {
                // $http({});
            }

            return deferred.promise;
        }

        function getMaps() {
            var deferred = $q.defer();

            if (_maps) {
                deferred.resolve(_maps);
            } else {
                // $http({});
            }

            return deferred.promise;
        }

        function getModes() {
            var deferred = $q.defer();

            if (_modes) {
                deferred.resolve(_modes);
            } else {
                // $http({});
            }

            return deferred.promise;
        }

    }

}(window.angular));
