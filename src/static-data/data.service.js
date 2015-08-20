(function (angular) {
    'use strict';

    angular
        .module('itemSetApp')
        .factory('staticDataService', staticDataService);

    function staticDataService($http, $q) {
        var _champions = {'35':'Shaco','36':'DrMundo','33':'Rammus','34':'Anivia','39':'Irelia','157':'Yasuo','37':'Sona','38':'Kassadin','154':'Zac','150':'Gnar','43':'Karma','42':'Corki','41':'Gangplank','40':'Janna','201':'Braum','22':'Ashe','23':'Tryndamere','24':'Jax','25':'Morgana','26':'Zilean','27':'Singed','28':'Evelynn','29':'Twitch','3':'Galio','161':'Velkoz','2':'Olaf','1':'Annie','7':'Leblanc','30':'Karthus','6':'Urgot','32':'Amumu','5':'XinZhao','31':'Chogath','4':'TwistedFate','9':'FiddleSticks','8':'Vladimir','19':'Warwick','17':'Teemo','18':'Tristana','15':'Sivir','16':'Soraka','13':'Ryze','14':'Sion','11':'MasterYi','12':'Alistar','21':'MissFortune','20':'Nunu','107':'Rengar','106':'Volibear','105':'Fizz','104':'Graves','103':'Ahri','99':'Lux','102':'Shyvana','101':'Xerath','412':'Thresh','98':'Shen','222':'Jinx','96':'KogMaw','223':'TahmKench','92':'Riven','91':'Talon','90':'Malzahar','429':'Kalista','10':'Kayle','421':'RekSai','89':'Leona','79':'Gragas','117':'Lulu','114':'Fiora','78':'Poppy','115':'Ziggs','77':'Udyr','112':'Viktor','113':'Sejuani','110':'Varus','111':'Nautilus','119':'Draven','432':'Bard','245':'Ekko','82':'Mordekaiser','83':'Yorick','80':'Pantheon','81':'Ezreal','86':'Garen','84':'Akali','85':'Kennen','67':'Vayne','126':'Jayce','69':'Cassiopeia','127':'Lissandra','68':'Rumble','121':'Khazix','122':'Darius','120':'Hecarim','72':'Skarner','236':'Lucian','74':'Heimerdinger','75':'Nasus','238':'Zed','76':'Nidalee','134':'Syndra','133':'Quinn','59':'JarvanIV','58':'Renekton','57':'Maokai','56':'Nocturne','55':'Katarina','64':'LeeSin','62':'MonkeyKing','63':'Brand','268':'Azir','267':'Nami','60':'Elise','131':'Diana','61':'Orianna','266':'Aatrox','143':'Zyra','48':'Trundle','45':'Veigar','44':'Taric','51':'Caitlyn','53':'Blitzcrank','54':'Malphite','254':'Vi','50':'Swain'};
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
            getItems: getItems
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
    }

}(window.angular));
