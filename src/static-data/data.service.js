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
        var _champions = {'35':'Shaco','36':'DrMundo','33':'Rammus','34':'Anivia','39':'Irelia','157':'Yasuo','37':'Sona','38':'Kassadin','154':'Zac','150':'Gnar','43':'Karma','42':'Corki','41':'Gangplank','40':'Janna','201':'Braum','22':'Ashe','23':'Tryndamere','24':'Jax','25':'Morgana','26':'Zilean','27':'Singed','28':'Evelynn','29':'Twitch','3':'Galio','161':'Velkoz','2':'Olaf','1':'Annie','7':'Leblanc','30':'Karthus','6':'Urgot','32':'Amumu','5':'XinZhao','31':'Chogath','4':'TwistedFate','9':'FiddleSticks','8':'Vladimir','19':'Warwick','17':'Teemo','18':'Tristana','15':'Sivir','16':'Soraka','13':'Ryze','14':'Sion','11':'MasterYi','12':'Alistar','21':'MissFortune','20':'Nunu','107':'Rengar','106':'Volibear','105':'Fizz','104':'Graves','103':'Ahri','99':'Lux','102':'Shyvana','101':'Xerath','412':'Thresh','98':'Shen','222':'Jinx','96':'KogMaw','223':'TahmKench','92':'Riven','91':'Talon','90':'Malzahar','429':'Kalista','10':'Kayle','421':'RekSai','89':'Leona','79':'Gragas','117':'Lulu','114':'Fiora','78':'Poppy','115':'Ziggs','77':'Udyr','112':'Viktor','113':'Sejuani','110':'Varus','111':'Nautilus','119':'Draven','432':'Bard','245':'Ekko','82':'Mordekaiser','83':'Yorick','80':'Pantheon','81':'Ezreal','86':'Garen','84':'Akali','85':'Kennen','67':'Vayne','126':'Jayce','69':'Cassiopeia','127':'Lissandra','68':'Rumble','121':'Khazix','122':'Darius','120':'Hecarim','72':'Skarner','236':'Lucian','74':'Heimerdinger','75':'Nasus','238':'Zed','76':'Nidalee','134':'Syndra','133':'Quinn','59':'JarvanIV','58':'Renekton','57':'Maokai','56':'Nocturne','55':'Katarina','64':'LeeSin','62':'MonkeyKing','63':'Brand','268':'Azir','267':'Nami','60':'Elise','131':'Diana','61':'Orianna','266':'Aatrox','143':'Zyra','48':'Trundle','45':'Veigar','44':'Taric','51':'Caitlyn','53':'Blitzcrank','54':'Malphite','254':'Vi','50':'Swain'};
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
                    for (var championId in champions) {
                        if (champions[championId] === championName) {
                            deferred.resolve({
                                id: championId,
                                name: champions[championId]
                            });
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
