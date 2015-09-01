// jshint ignore: start
(function (angular) {
    'use strict';

    angular
        .module('itemSetApp')
        .factory('staticDataService', staticDataService);

    function staticDataService($http, $q) {
        var _maps = [
            { name: 'Summoner\'s Rift', code: 'SR', image: 'summoners_rift.map.png'},
            { name: 'Howling Abyss', code: 'HA', image: 'howling_abyss.map.png'},
            { name: 'Twisted Treeline', code: 'TT', image: 'twisted_treeline.map.png'},
            { name: 'Crystal Scar', code: 'CS', image: 'crystal_scar.map.png'}
        ];
        var _modes = [
            { name: 'Classic', code: 'CLASSIC', image: 'classic.mode.png'},
            { name: 'ARAM', code: 'ARAM', image: 'aram.mode.png'},
            { name: 'Dominion', code: 'ODIN', image: 'dominion.mode.png'},
        ];
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
        var _itemTags = ["Active", "Armor", "ArmorPenetration", "AttackSpeed", "Aura", "Boots", "ChampionSpecific", "Consumable", "CooldownReduction", "CriticalStrike", "Damage", "GoldPer", "Health", "HealthRegen", "Jungle", "Lane", "LifeSteal", "MagicPenetration", "Mana", "ManaRegen", "NonbootsMovement", "OnHit", "Slow", "SpellBlock", "SpellDamage", "SpellVamp", "Stealth", "Tenacity", "Trinket", "Vision"];
        var _items = {
      "3725": {
         "tags": [
            "Health",
            "Jungle"
         ],
         "id": 3725,
         "sanitizedDescription": "+400 Health +15% Bonus Health UNIQUE Passive - Immolate: Deals 15 (+0.6 per champion level) magic damage a second to nearby enemies. Deals 100% bonus damage to monsters.",
         "description": "<stats>+400 Health<br>+15% Bonus Health<\/stats><br><br><unique>UNIQUE Passive - Immolate:<\/unique> Deals 15 (+0.6 per champion level) magic damage a second to nearby enemies. Deals 100% bonus damage to monsters. ",
         "name": "Enchantment: Cinderhulk",
         "group": "JungleItems"
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
         "description": "<stats>+50 Ability Power<br><mana>+200 Mana<\/mana><br>+10% Cooldown Reduction<\/stats><br><br><unique>UNIQUE Passive - Spellblade:<\/unique> After using an ability, the next basic attack deals 100% Base Attack Damage (+30% of Ability Power) bonus magic damage on hit (1.5 second cooldown). When directly attacking a monster, the bonus damage is reapplied in an AoE around the target, and 8% of your missing Mana is restored.",
         "name": "Enchantment: Runeglaive",
         "group": "JungleItems"
      },
      "3089": {
         "tags": ["SpellDamage"],
         "id": 3089,
         "sanitizedDescription": "+120 Ability Power UNIQUE Passive: Increases Ability Power by 35%.",
         "plaintext": "Massively increases Ability Power",
         "description": "<stats>+120 Ability Power  <\/stats><br><br><unique>UNIQUE Passive:<\/unique> Increases Ability Power by 35%.",
         "name": "Rabadon's Deathcap"
      },
      "3723": {
         "tags": [
            "ArmorPenetration",
            "CooldownReduction",
            "Damage",
            "Jungle"
         ],
         "id": 3723,
         "sanitizedDescription": "+40 Attack Damage +10% Cooldown Reduction +10 Armor Penetration",
         "description": "<stats>+40 Attack Damage<br>+10% Cooldown Reduction<br>+10 Armor Penetration<\/stats>",
         "name": "Enchantment: Warrior",
         "group": "JungleItems"
      },
      "3722": {
         "tags": [
            "AttackSpeed",
            "Damage",
            "Jungle",
            "OnHit"
         ],
         "id": 3722,
         "sanitizedDescription": "+50% Attack Speed +30 Magic Damage on Hit Passive - Devouring Spirit: Takedowns on enemies increase the magic damage of this item: +1 for Champions or Large Monsters +2 for Rift Scuttlers +5 for Epic Monsters At 30 Stacks, your Devourer becomes Sated, granting extra on Hit effects.",
         "description": "<stats>+50% Attack Speed<br>+30 Magic Damage on Hit<\/stats><br><br><unique>Passive - Devouring Spirit:<\/unique> Takedowns on enemies increase the magic damage of this item:<br>+1 for Champions or Large Monsters<br>+2 for Rift Scuttlers<br>+5 for Epic Monsters<br><br>At 30 Stacks, your Devourer becomes Sated, granting extra on Hit effects.",
         "name": "Enchantment: Devourer",
         "group": "JungleItems"
      },
      "3087": {
         "tags": [
            "AttackSpeed",
            "CriticalStrike",
            "NonbootsMovement",
            "OnHit"
         ],
         "id": 3087,
         "sanitizedDescription": "+40% Attack Speed +20% Critical Strike Chance +6% Movement Speed UNIQUE Passive: Grants Static Charges upon moving or attacking. At 100 Charges, basic attacking expends all Charges to deal 100 bonus magic damage to up to 4 targets on hit (this damage can critically strike).",
         "plaintext": "Movement builds charges that release chain lightning on basic attack",
         "description": "<stats>+40% Attack Speed<br>+20% Critical Strike Chance<br>+6% Movement Speed<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Grants Static Charges upon moving or attacking. At 100 Charges, basic attacking expends all Charges to deal 100 bonus magic damage to up to 4 targets on hit (this damage can critically strike).",
         "name": "Statikk Shiv"
      },
      "3721": {
         "tags": [
            "Health",
            "Jungle"
         ],
         "id": 3721,
         "sanitizedDescription": "+400 Health +15% Bonus Health UNIQUE Passive - Immolate: Deals 15 (+0.6 per champion level) magic damage a second to nearby enemies. Deals 100% bonus damage to monsters.",
         "description": "<stats>+400 Health<br>+15% Bonus Health<\/stats><br><br><unique>UNIQUE Passive - Immolate:<\/unique> Deals 15 (+0.6 per champion level) magic damage a second to nearby enemies. Deals 100% bonus damage to monsters. ",
         "name": "Enchantment: Cinderhulk",
         "group": "JungleItems"
      },
      "3086": {
         "tags": [
            "AttackSpeed",
            "CriticalStrike",
            "NonbootsMovement"
         ],
         "id": 3086,
         "sanitizedDescription": "+20% Attack Speed +10% Critical Strike Chance +5% Movement Speed",
         "plaintext": "Slight bonuses to Critical Strike Chance, Movement Speed and Attack Speed",
         "description": "<stats>+20% Attack Speed<br>+10% Critical Strike Chance<br>+5% Movement Speed<\/stats>",
         "name": "Zeal"
      },
      "2004": {
         "tags": [
            "Consumable",
            "Lane"
         ],
         "id": 2004,
         "sanitizedDescription": "Limited to 5 at one time. Click to Consume: Restores 100 Mana over 15 seconds.",
         "plaintext": "Consume to restore Mana over time",
         "description": "<groupLimit>Limited to 5 at one time.<\/groupLimit><br><br><consumable>Click to Consume:<\/consumable> <mana>Restores 100 Mana over 15 seconds.<\/mana>",
         "name": "Mana Potion",
         "group": "ManaPotion"
      },
      "1319": {
          "tags": ["Boots"],
         "id": 1319,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Homeguard bonus. UNIQUE Passive - Homeguard: Visiting the shop vastly increases Health and Mana Regeneration and grants 200% bonus Movement Speed that decays over 8 seconds. Bonus Movement Speed and regeneration are disabled for 6 seconds upon dealing or taking damage. (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Homeguard bonus.<br><br><unique>UNIQUE Passive - Homeguard:<\/unique> Visiting the shop vastly increases Health and Mana Regeneration and grants 200% bonus Movement Speed that decays over 8 seconds. Bonus Movement Speed and regeneration are disabled for 6 seconds upon dealing or taking damage.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Homeguard",
         "group": "BootsHomeguard"
      },
      "3720": {
         "tags": [
            "CooldownReduction",
            "Jungle",
            "Mana",
            "SpellDamage"
         ],
         "id": 3720,
         "sanitizedDescription": "+50 Ability Power +200 Mana +10% Cooldown Reduction UNIQUE Passive - Spellblade: After using an ability, the next basic attack deals 100% Base Attack Damage (+30% of Ability Power) bonus magic damage on hit (1.5 second cooldown). When directly attacking a monster, the bonus damage is reapplied in an AoE around the target, and 8% of your missing Mana is restored.",
         "description": "<stats>+50 Ability Power<br><mana>+200 Mana<\/mana><br>+10% Cooldown Reduction<\/stats><br><br><unique>UNIQUE Passive - Spellblade:<\/unique> After using an ability, the next basic attack deals 100% Base Attack Damage (+30% of Ability Power) bonus magic damage on hit (1.5 second cooldown). When directly attacking a monster, the bonus damage is reapplied in an AoE around the target, and 8% of your missing Mana is restored.",
         "name": "Enchantment: Runeglaive",
         "group": "JungleItems"
      },
      "3085": {
         "tags": [
            "AttackSpeed",
            "OnHit"
         ],
         "id": 3085,
         "sanitizedDescription": "+70% Attack Speed UNIQUE Passive: When basic attacking, bolts are fired at up to 2 enemies near the target, each dealing (50% of Attack Damage) physical damage. These bolts apply on-hit effects. UNIQUE Passive: Basic attacks deal an additional 10 physical damage on hit.",
         "plaintext": "Ranged attacks fire two bolts at nearby enemies",
         "description": "<stats>+70% Attack Speed<\/stats><br><br><unique>UNIQUE Passive:<\/unique> When basic attacking, bolts are fired at up to 2 enemies near the target, each dealing (50% of Attack Damage) physical damage. These bolts apply on-hit effects.<br><unique>UNIQUE Passive:<\/unique> Basic attacks deal an additional 10 physical damage on hit.<br> ",
         "name": "Runaan's Hurricane (Ranged Only)"
      },
      "1318": {
          "tags": ["Boots"],
         "id": 1318,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Distortion bonus. UNIQUE Passive - Distortion: Teleport, Flash, and Ghost summoner spell cooldowns are reduced by 20% and are granted additional mobility: Ghost: Grants 40% Movement Speed from 27%. Flash: 20% Movement Speed bonus for 1 second after cast. Teleport: 30% Movement Speed bonus for 3 seconds after use. (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Distortion bonus.<br><br><unique>UNIQUE Passive - Distortion:<\/unique> Teleport, Flash, and Ghost summoner spell cooldowns are reduced by 20% and are granted additional mobility: <br><br><font color='#FFDD00'>Ghost:<\/font> Grants 40% Movement Speed from 27%.<br><font color='#FFDD00'>Flash:<\/font> 20% Movement Speed bonus for 1 second after cast.<br><font color='#FFDD00'>Teleport:<\/font> 30% Movement Speed bonus for 3 seconds after use.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Distortion",
         "group": "BootsDistortion"
      },
      "3084": {
         "tags": [
            "Health",
            "HealthRegen"
         ],
         "id": 3084,
         "sanitizedDescription": "+800 Health +100% Base Health Regen UNIQUE Passive: Upon champion kill or assist, restores 300 Health over 5 seconds.",
         "plaintext": "Restores Health on kill or assist",
         "description": "<stats>+800 Health<br>+100% Base Health Regen <\/stats><br><br><unique>UNIQUE Passive:<\/unique> Upon champion kill or assist, restores 300 Health over 5 seconds.",
         "name": "Overlord's Bloodmail"
      },
      "1317": {
          "tags": ["Boots"],
         "id": 1317,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Captain bonus. UNIQUE Passive - Captain: Grants +10% Movement Speed to nearby approaching allied champions. (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Captain bonus.<br><br><unique>UNIQUE Passive - Captain:<\/unique> Grants +10% Movement Speed to nearby approaching allied champions.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Captain",
         "group": "BootsCaptain"
      },
      "2003": {
         "tags": [
            "Consumable",
            "Jungle",
            "Lane"
         ],
         "id": 2003,
         "sanitizedDescription": "Limited to 5 at one time. Click to Consume: Restores 150 Health over 15 seconds.",
         "plaintext": "Consume to restore Health over time",
         "description": "<groupLimit>Limited to 5 at one time.<\/groupLimit><br><br><consumable>Click to Consume:<\/consumable> Restores 150 Health over 15 seconds.",
         "name": "Health Potion",
         "group": "HealthPotion"
      },
      "3083": {
         "tags": [
            "Health",
            "HealthRegen"
         ],
         "id": 3083,
         "sanitizedDescription": "+800 Health +200% Base Health Regen UNIQUE Passive: Grants Warmog's Heart if you have at least 3000 maximum Health. Warmog's Heart: Restores 15% of maximum Health every 5 seconds if damage hasn't been taken within 8 seconds.",
         "plaintext": "Grants massive Health and Health Regen",
         "description": "<stats>+800 Health<br>+200% Base Health Regen <\/stats><br><br><unique>UNIQUE Passive:<\/unique> Grants <font color='#FF8811'><u>Warmog's Heart<\/u><\/font> if you have at least 3000 maximum Health.<br><br><font color='#FF8811'><u>Warmog's Heart<\/u>:<\/font> Restores 15% of maximum Health every 5 seconds if damage hasn't been taken within 8 seconds. ",
         "name": "Warmog's Armor"
      },
      "1316": {
          "tags": ["Boots"],
         "id": 1316,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Alacrity bonus. UNIQUE Passive - Alacrity: +20 Movement Speed (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Alacrity bonus. <br><br><unique>UNIQUE Passive - Alacrity:<\/unique> +20 Movement Speed<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Alacrity",
         "group": "BootsAlacrity"
      },
      "3082": {
         "tags": [
            "Armor",
            "Slow"
         ],
         "id": 3082,
         "sanitizedDescription": "+45 Armor UNIQUE Passive - Cold Steel: When hit by basic attacks, reduces the attacker's Attack Speed by 15% for 1 seconds. (Unique Passives with the same name don't stack.)",
         "plaintext": "Slows Attack Speed of enemy champions when receiving basic attacks",
         "description": "<stats>+45 Armor<\/stats><br><br><unique>UNIQUE Passive - Cold Steel:<\/unique> When hit by basic attacks, reduces the attacker's Attack Speed by 15% for 1 seconds.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Warden's Mail"
      },
      "1315": {
          "tags": ["Boots"],
         "id": 1315,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Furor bonus. UNIQUE Passive - Furor: Upon dealing damage with a single target spell or attack (on hit), grants +12% Movement Speed that decays over 2 seconds. (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Furor bonus.<br><br><unique>UNIQUE Passive - Furor:<\/unique> Upon dealing damage with a single target spell or attack (on hit), grants +12% Movement Speed that decays over 2 seconds.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Furor",
         "group": "BootsFuror"
      },
      "1314": {
          "tags": ["Boots"],
         "id": 1314,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Homeguard bonus. UNIQUE Passive - Homeguard: Visiting the shop vastly increases Health and Mana Regeneration and grants 200% bonus Movement Speed that decays over 8 seconds. Bonus Movement Speed and regeneration are disabled for 6 seconds upon dealing or taking damage. (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Homeguard bonus.<br><br><unique>UNIQUE Passive - Homeguard:<\/unique> Visiting the shop vastly increases Health and Mana Regeneration and grants 200% bonus Movement Speed that decays over 8 seconds. Bonus Movement Speed and regeneration are disabled for 6 seconds upon dealing or taking damage.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Homeguard",
         "group": "BootsHomeguard"
      },
      "1313": {
          "tags": ["Boots"],
         "id": 1313,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Distortion bonus. UNIQUE Passive - Distortion: Teleport, Flash, and Ghost summoner spell cooldowns are reduced by 20% and are granted additional mobility: Ghost: Grants 40% Movement Speed from 27%. Flash: 20% Movement Speed bonus for 1 second after cast. Teleport: 30% Movement Speed bonus for 3 seconds after use. (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Distortion bonus.<br><br><unique>UNIQUE Passive - Distortion:<\/unique> Teleport, Flash, and Ghost summoner spell cooldowns are reduced by 20% and are granted additional mobility: <br><br><font color='#FFDD00'>Ghost:<\/font> Grants 40% Movement Speed from 27%.<br><font color='#FFDD00'>Flash:<\/font> 20% Movement Speed bonus for 1 second after cast.<br><font color='#FFDD00'>Teleport:<\/font> 30% Movement Speed bonus for 3 seconds after use.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Distortion",
         "group": "BootsDistortion"
      },
      "1312": {
          "tags": ["Boots"],
         "id": 1312,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Captain bonus. UNIQUE Passive - Captain: Grants +10% Movement Speed to nearby approaching allied champions. (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Captain bonus.<br><br><unique>UNIQUE Passive - Captain:<\/unique> Grants +10% Movement Speed to nearby approaching allied champions.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Captain",
         "group": "BootsCaptain"
      },
      "3285": {
         "tags": [
            "NonbootsMovement",
            "OnHit",
            "SpellDamage"
         ],
         "id": 3285,
         "sanitizedDescription": "+100 Ability Power +10% Movement Speed UNIQUE Passive: Gain charges upon moving or casting. At 100 charges, the next spell hit expends all charges to deal 100 (+10% AP) bonus magic damage to up to 4 targets on hit.",
         "plaintext": "Increases Ability Power and Movement Speed",
         "description": "<stats>+100 Ability Power<br>+10% Movement Speed<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Gain charges upon moving or casting. At 100 charges, the next spell hit expends all charges to deal 100 (+10% AP) bonus magic damage to up to 4 targets on hit.",
         "name": "Luden's Echo"
      },
      "1311": {
          "tags": ["Boots"],
         "id": 1311,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Alacrity bonus. UNIQUE Passive - Alacrity: +20 Movement Speed (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Alacrity bonus. <br><br><unique>UNIQUE Passive - Alacrity:<\/unique> +20 Movement Speed<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Alacrity",
         "group": "BootsAlacrity"
      },
      "1310": {
          "tags": ["Boots"],
         "id": 1310,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Furor bonus. UNIQUE Passive - Furor: Upon dealing damage with a single target spell or attack (on hit), grants +12% Movement Speed that decays over 2 seconds. (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Furor bonus.<br><br><unique>UNIQUE Passive - Furor:<\/unique> Upon dealing damage with a single target spell or attack (on hit), grants +12% Movement Speed that decays over 2 seconds.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Furor",
         "group": "BootsFuror"
      },
      "3726": {
         "tags": [
            "AttackSpeed",
            "Damage",
            "Jungle",
            "OnHit"
         ],
         "id": 3726,
         "sanitizedDescription": "+50% Attack Speed +30 Magic Damage on Hit Passive - Devouring Spirit: Takedowns on enemies increase the magic damage of this item: +1 for Champions or Large Monsters +2 for Rift Scuttlers +5 for Epic Monsters At 30 Stacks, your Devourer becomes Sated, granting extra on Hit effects.",
         "description": "<stats>+50% Attack Speed<br>+30 Magic Damage on Hit<\/stats><br><br><unique>Passive - Devouring Spirit:<\/unique> Takedowns on enemies increase the magic damage of this item:<br>+1 for Champions or Large Monsters<br>+2 for Rift Scuttlers<br>+5 for Epic Monsters<br><br>At 30 Stacks, your Devourer becomes Sated, granting extra on Hit effects.",
         "name": "Enchantment: Devourer",
         "group": "JungleItems"
      },
      "3711": {
         "tags": [
            "Damage",
            "HealthRegen",
            "Jungle",
            "ManaRegen",
            "NonbootsMovement",
            "OnHit"
         ],
         "id": 3711,
         "sanitizedDescription": "+30 Bonus Gold per Large Monster Kill Passive - Scavenging Smite: When you Smite a large monster in the enemy jungle, you gain half a charge of Smite. If you kill that monster, you gain +20 bonus Gold, and you gain 175% increased Movement Speed decaying over 2 seconds. Passive - Jungler: Deal 45 additional magic damage to monsters over 2 seconds and gain 10 Health Regen and 5 Mana Regen per second while under attack from neutral monsters. Limited to 1 Jungle item",
         "plaintext": "Makes your Smite give extra gold from the enemy jungle",
         "description": "<stats>+30 Bonus Gold per Large Monster Kill<\/stats><br><passive>Passive - Scavenging Smite:<\/passive> When you Smite a large monster in the enemy jungle, you gain half a charge of Smite. If you kill that monster, you gain +20 bonus Gold, and you gain 175% increased Movement Speed decaying over 2 seconds.<br><br><passive>Passive - Jungler:<\/passive> Deal 45 additional magic damage to monsters over 2 seconds and gain 10 Health Regen and 5 Mana Regen per second while under attack from neutral monsters.<br><br><groupLimit>Limited to 1 Jungle item<\/groupLimit>",
         "name": "Poacher's Knife",
         "group": "JungleItems"
      },
      "3098": {
         "tags": [
            "Active",
            "GoldPer",
            "ManaRegen",
            "SpellDamage"
         ],
         "id": 3098,
         "sanitizedDescription": "+10 Ability Power +2 Gold per 10 seconds +50% Base Mana Regen UNIQUE Passive - Tribute: Spells and basic attacks against champions or buildings deal 15 additional damage and grant 10 Gold. This can occur up to 3 times every 30 seconds. Killing a minion disables this passive for 12 seconds. Limited to 1 Gold Income item",
         "plaintext": "Grants gold when you damage an enemy with a Spell or Attack",
         "description": "<stats>+10 Ability Power<br>+2 Gold per 10 seconds<br><mana>+50% Base Mana Regen <\/mana><\/stats><br><br><unique>UNIQUE Passive - Tribute:<\/unique> Spells and basic attacks against champions or buildings deal 15 additional damage and grant 10 Gold. This can occur up to 3 times every 30 seconds. Killing a minion disables this passive for 12 seconds.<br><br><groupLimit>Limited to 1 Gold Income item<\/groupLimit>",
         "name": "Frostfang",
         "group": "GoldBase"
      },
      "3714": {
         "tags": [
            "ArmorPenetration",
            "CooldownReduction",
            "Damage",
            "Jungle"
         ],
         "id": 3714,
         "sanitizedDescription": "+40 Attack Damage +10% Cooldown Reduction +10 Armor Penetration",
         "description": "<stats>+40 Attack Damage<br>+10% Cooldown Reduction<br>+10 Armor Penetration<\/stats>",
         "name": "Enchantment: Warrior",
         "group": "JungleItems"
      },
      "3713": {
         "tags": [
            "Damage",
            "HealthRegen",
            "Jungle",
            "ManaRegen",
            "OnHit"
         ],
         "id": 3713,
         "sanitizedDescription": "+30 Bonus Gold per Large Monster Kill Passive - Blasting Smite: Smite deals damage in an area, dealing half damage to all monsters and enemy minions near the target and stuns them for 1.5 seconds. Casting Smite on a monster restores 15% of missing Health and Mana. Passive - Jungler: Deal 45 additional magic damage to monsters over 2 seconds and gain 10 Health Regen and 5 Mana Regen per second while under attack from neutral monsters. Limited to 1 Jungle item",
         "plaintext": "Makes your Smite hit all monsters in an area, stunning them.",
         "description": "<stats>+30 Bonus Gold per Large Monster Kill<\/stats><br><passive>Passive - Blasting Smite:<\/passive> Smite deals damage in an area, dealing half damage to all monsters and enemy minions near the target and stuns them for 1.5 seconds. Casting Smite on a monster restores 15% of missing Health and Mana. <br><br><passive>Passive - Jungler:<\/passive> Deal 45 additional magic damage to monsters over 2 seconds and gain 10 Health Regen and 5 Mana Regen per second while under attack from neutral monsters.<br><br><groupLimit>Limited to 1 Jungle item<\/groupLimit>",
         "name": "Ranger's Trailblazer",
         "group": "JungleItems"
      },
      "1329": {
          "tags": ["Boots"],
         "id": 1329,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Homeguard bonus. UNIQUE Passive - Homeguard: Visiting the shop vastly increases Health and Mana Regeneration and grants 200% bonus Movement Speed that decays over 8 seconds. Bonus Movement Speed and regeneration are disabled for 6 seconds upon dealing or taking damage. (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Homeguard bonus.<br><br><unique>UNIQUE Passive - Homeguard:<\/unique> Visiting the shop vastly increases Health and Mana Regeneration and grants 200% bonus Movement Speed that decays over 8 seconds. Bonus Movement Speed and regeneration are disabled for 6 seconds upon dealing or taking damage.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Homeguard",
         "group": "BootsHomeguard"
      },
      "3290": {
         "tags": [
            "Active",
            "CooldownReduction",
            "NonbootsMovement",
            "Slow",
            "SpellDamage",
            "Stealth",
            "Vision"
         ],
         "id": 3290,
         "sanitizedDescription": "+80 Ability Power +10% Cooldown Reduction +6% Movement Speed UNIQUE Passive - Trap Detection: Nearby stealthed enemy traps are revealed. UNIQUE Active - Hunt: Summons up to 2 invulnerable ghosts that seek out the 2 nearest enemy champions for 6 seconds. If a ghost reaches its target, it reveals the target and reduces their Movement Speed by 40% for 2.5 seconds. If a ghost cannot find a target, it tries to return to the caster. Ghosts that successfully return in this way reduce the item's cooldown by 20 seconds (60 second cooldown).",
         "plaintext": "Summon wraiths to slow and reveal enemy champions",
         "description": "<stats>+80 Ability Power<br>+10% Cooldown Reduction<br>+6% Movement Speed<\/stats><br><br><unique>UNIQUE Passive - Trap Detection:<\/unique> Nearby stealthed enemy traps are revealed.<br><active>UNIQUE Active - Hunt:<\/active> Summons up to 2 invulnerable ghosts that seek out the 2 nearest enemy champions for 6 seconds. If a ghost reaches its target, it reveals the target and reduces their Movement Speed by 40% for 2.5 seconds.<br><br>If a ghost cannot find a target, it tries to return to the caster. Ghosts that successfully return in this way reduce the item's cooldown by 20 seconds (60 second cooldown).",
         "name": "Twin Shadows"
      },
      "1328": {
          "tags": ["Boots"],
         "id": 1328,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Distortion bonus. UNIQUE Passive - Distortion: Teleport, Flash, and Ghost summoner spell cooldowns are reduced by 20% and are granted additional mobility: Ghost: Grants 40% Movement Speed from 27%. Flash: 20% Movement Speed bonus for 1 second after cast. Teleport: 30% Movement Speed bonus for 3 seconds after use. (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Distortion bonus.<br><br><unique>UNIQUE Passive - Distortion:<\/unique> Teleport, Flash, and Ghost summoner spell cooldowns are reduced by 20% and are granted additional mobility: <br><br><font color='#FFDD00'>Ghost:<\/font> Grants 40% Movement Speed from 27%.<br><font color='#FFDD00'>Flash:<\/font> 20% Movement Speed bonus for 1 second after cast.<br><font color='#FFDD00'>Teleport:<\/font> 30% Movement Speed bonus for 3 seconds after use.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Distortion",
         "group": "BootsDistortion"
      },
      "3710": {
         "tags": [
            "AttackSpeed",
            "Damage",
            "Jungle",
            "OnHit"
         ],
         "id": 3710,
         "sanitizedDescription": "+50% Attack Speed +30 Magic Damage on Hit Passive - Devouring Spirit: Takedowns on enemies increase the magic damage of this item: +1 for Champions or Large Monsters +2 for Rift Scuttlers +5 for Epic Monsters At 30 Stacks, your Devourer becomes Sated, granting extra on Hit effects.",
         "description": "<stats>+50% Attack Speed<br>+30 Magic Damage on Hit<\/stats><br><br><unique>Passive - Devouring Spirit:<\/unique> Takedowns on enemies increase the magic damage of this item:<br>+1 for Champions or Large Monsters<br>+2 for Rift Scuttlers<br>+5 for Epic Monsters<br><br>At 30 Stacks, your Devourer becomes Sated, granting extra on Hit effects.",
         "name": "Enchantment: Devourer",
         "group": "JungleItems"
      },
      "3097": {
         "tags": [
            "Aura",
            "GoldPer",
            "Health",
            "HealthRegen"
         ],
         "id": 3097,
         "sanitizedDescription": "+175 Health +50% Base Health Regen UNIQUE Passive - Spoils of War: Melee basic attacks execute minions below 240 Health. Killing a minion heals the owner and the nearest allied champion for 50 Health and grants them kill Gold. These effects require a nearby allied champion. Recharges every 30 seconds. Max 3 charges. Limited to 1 Gold Income item",
         "plaintext": "Periodically kill enemy minions to heal and grant gold to a nearby ally",
         "description": "<stats>+175 Health<br>+50% Base Health Regen <\/stats><br><br><unique>UNIQUE Passive - Spoils of War:<\/unique> Melee basic attacks execute minions below 240 Health. Killing a minion heals the owner and the nearest allied champion for 50 Health and grants them kill Gold.<br><br>These effects require a nearby allied champion. Recharges every 30 seconds. Max 3 charges.<br><br><groupLimit>Limited to 1 Gold Income item<\/groupLimit>",
         "name": "Targon's Brace",
         "group": "GoldBase"
      },
      "3096": {
         "tags": [
            "Active",
            "GoldPer",
            "HealthRegen",
            "ManaRegen",
            "NonbootsMovement"
         ],
         "id": 3096,
         "sanitizedDescription": "+25% Base Health Regen +50% Base Mana Regen +10 Movement Speed +2 Gold per 10 seconds UNIQUE Passive - Favor: Being near a minion death without dealing the killing blow grants 4 Gold and 10 Health. Limited to 1 Gold Income item ''The medallion shines with the glory of a thousand voices when exposed to the sun.'' - Historian Shurelya, 22 June, 24 CLE",
         "plaintext": "Grants gold when nearby enemy minions die, Health Regen and Mana Regen",
         "description": "<stats>+25% Base Health Regen <br><mana>+50% Base Mana Regen <br><\/mana>+10 Movement Speed<br>+2 Gold per 10 seconds<\/stats><br><br><unique>UNIQUE Passive - Favor:<\/unique> Being near a minion death without dealing the killing blow grants 4 Gold and 10 Health.<br><br><groupLimit>Limited to 1 Gold Income item<\/groupLimit><br><br><i><font color='#447777'>''The medallion shines with the glory of a thousand voices when exposed to the sun.'' - Historian Shurelya, 22 June, 24 CLE<\/font><\/i><br><br>",
         "name": "Nomad's Medallion",
         "group": "GoldBase"
      },
      "3091": {
         "tags": [
            "AttackSpeed",
            "OnHit",
            "SpellBlock"
         ],
         "id": 3091,
         "sanitizedDescription": "+50% Attack Speed +30 Magic Resist UNIQUE Passive: Basic attacks deal 42 bonus magic damage on hit. UNIQUE Passive: Basic attacks steal 5 Magic Resist from the target on hit (stacks up to 5 times.)",
         "plaintext": "Deals bonus magic damage on basic attacks",
         "description": "<stats>+50% Attack Speed<br>+30 Magic Resist<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Basic attacks deal 42 bonus magic damage on hit.<br><unique>UNIQUE Passive:<\/unique> Basic attacks steal 5 Magic Resist from the target on hit (stacks up to 5 times.)",
         "name": "Wit's End"
      },
      "1325": {
          "tags": ["Boots"],
         "id": 1325,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Furor bonus. UNIQUE Passive - Furor: Upon dealing damage with a single target spell or attack (on hit), grants +12% Movement Speed that decays over 2 seconds. (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Furor bonus.<br><br><unique>UNIQUE Passive - Furor:<\/unique> Upon dealing damage with a single target spell or attack (on hit), grants +12% Movement Speed that decays over 2 seconds.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Furor",
         "group": "BootsFuror"
      },
      "3719": {
         "tags": [
            "ArmorPenetration",
            "CooldownReduction",
            "Damage",
            "Jungle"
         ],
         "id": 3719,
         "sanitizedDescription": "+40 Attack Damage +10% Cooldown Reduction +10 Armor Penetration",
         "description": "<stats>+40 Attack Damage<br>+10% Cooldown Reduction<br>+10 Armor Penetration<\/stats>",
         "name": "Enchantment: Warrior",
         "group": "JungleItems"
      },
      "3090": {
         "tags": [
            "Active",
            "Armor",
            "SpellDamage"
         ],
         "id": 3090,
         "sanitizedDescription": "+100 Ability Power +45 Armor UNIQUE Passive: Increases Ability Power by 25% UNIQUE Active: Champion becomes invulnerable and untargetable for 2.5 seconds, but is unable to move, attack, cast spells, or use items during this time (90 second cooldown).",
         "plaintext": "Massively increases Ability Power and can be activated to enter stasis",
         "description": "<stats>+100 Ability Power<br>+45 Armor  <\/stats><br><br><unique>UNIQUE Passive:<\/unique> Increases Ability Power by 25%<br><active>UNIQUE Active:<\/active> Champion becomes invulnerable and untargetable for 2.5 seconds, but is unable to move, attack, cast spells, or use items during this time (90 second cooldown).",
         "name": "Wooglet's Witchcap"
      },
      "1324": {
          "tags": ["Boots"],
         "id": 1324,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Homeguard bonus. UNIQUE Passive - Homeguard: Visiting the shop vastly increases Health and Mana Regeneration and grants 200% bonus Movement Speed that decays over 8 seconds. Bonus Movement Speed and regeneration are disabled for 6 seconds upon dealing or taking damage. (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Homeguard bonus.<br><br><unique>UNIQUE Passive - Homeguard:<\/unique> Visiting the shop vastly increases Health and Mana Regeneration and grants 200% bonus Movement Speed that decays over 8 seconds. Bonus Movement Speed and regeneration are disabled for 6 seconds upon dealing or taking damage.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Homeguard",
         "group": "BootsHomeguard"
      },
      "3093": {
         "tags": [
            "CriticalStrike",
            "GoldPer"
         ],
         "id": 3093,
         "sanitizedDescription": "+10% Critical Strike Chance UNIQUE Passive - Avarice: +3 Gold per 10 seconds UNIQUE Passive - Greed: Grants 2 Gold upon killing a unit. May be bought with another Gold Income item",
         "plaintext": "Grants gold over time and additional gold on kill",
         "description": "<stats>+10% Critical Strike Chance<\/stats><br><br><unique>UNIQUE Passive - Avarice:<\/unique> +3 Gold per 10 seconds<br><unique>UNIQUE Passive - Greed:<\/unique> Grants 2 Gold upon killing a unit.<br><br><groupLimit>May be bought with another Gold Income item<\/groupLimit>",
         "name": "Avarice Blade"
      },
      "1327": {
          "tags": ["Boots"],
         "id": 1327,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Captain bonus. UNIQUE Passive - Captain: Grants +10% Movement Speed to nearby approaching allied champions. (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Captain bonus.<br><br><unique>UNIQUE Passive - Captain:<\/unique> Grants +10% Movement Speed to nearby approaching allied champions.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Captain",
         "group": "BootsCaptain"
      },
      "1326": {
          "tags": ["Boots"],
         "id": 1326,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Alacrity bonus. UNIQUE Passive - Alacrity: +20 Movement Speed (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Alacrity bonus. <br><br><unique>UNIQUE Passive - Alacrity:<\/unique> +20 Movement Speed<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Alacrity",
         "group": "BootsAlacrity"
      },
      "3092": {
         "tags": [
            "Active",
            "CooldownReduction",
            "GoldPer",
            "ManaRegen",
            "Slow",
            "SpellDamage"
         ],
         "id": 3092,
         "sanitizedDescription": "+50 Ability Power +10% Cooldown Reduction +2 Gold per 10 seconds +50% Base Mana Regen UNIQUE Passive - Tribute: Spells and basic attacks against champions or buildings deal 15 additional damage and grant 10 Gold. This can occur up to 3 times every 30 seconds. UNIQUE Active: Fires an ice lance that explodes dealing 50 (+5 per champion level) magic damage to nearby enemies and slowing their Movement Speed by 80%, decaying over 2 seconds (60 second cooldown). Limited to 1 Gold Income item",
         "plaintext": "Chills target area, damaging and slowing enemies caught in the path or explosion",
         "description": "<stats>+50 Ability Power<br>+10% Cooldown Reduction<br>+2 Gold per 10 seconds<br><mana>+50% Base Mana Regen <\/mana><\/stats><br><br><unique>UNIQUE Passive - Tribute:<\/unique> Spells and basic attacks against champions or buildings deal 15 additional damage and grant 10 Gold. This can occur up to 3 times every 30 seconds.<br><active>UNIQUE Active:<\/active> Fires an ice lance that explodes dealing 50 (+5 per champion level) magic damage to nearby enemies and slowing their Movement Speed by 80%, decaying over 2 seconds (60 second cooldown).<br><br><groupLimit>Limited to 1 Gold Income item<\/groupLimit>",
         "name": "Frost Queen's Claim",
         "group": "GoldBase"
      },
      "1321": {
          "tags": ["Boots"],
         "id": 1321,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Alacrity bonus. UNIQUE Passive - Alacrity: +20 Movement Speed (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Alacrity bonus. <br><br><unique>UNIQUE Passive - Alacrity:<\/unique> +20 Movement Speed<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Alacrity",
         "group": "BootsAlacrity"
      },
      "3716": {
         "tags": [
            "CooldownReduction",
            "Jungle",
            "Mana",
            "SpellDamage"
         ],
         "id": 3716,
         "sanitizedDescription": "+50 Ability Power +200 Mana +10% Cooldown Reduction UNIQUE Passive - Spellblade: After using an ability, the next basic attack deals 100% Base Attack Damage (+30% of Ability Power) bonus magic damage on hit (1.5 second cooldown). When directly attacking a monster, the bonus damage is reapplied in an AoE around the target, and 8% of your missing Mana is restored.",
         "description": "<stats>+50 Ability Power<br><mana>+200 Mana<\/mana><br>+10% Cooldown Reduction<\/stats><br><br><unique>UNIQUE Passive - Spellblade:<\/unique> After using an ability, the next basic attack deals 100% Base Attack Damage (+30% of Ability Power) bonus magic damage on hit (1.5 second cooldown). When directly attacking a monster, the bonus damage is reapplied in an AoE around the target, and 8% of your missing Mana is restored.",
         "name": "Enchantment: Runeglaive",
         "group": "JungleItems"
      },
      "1320": {
          "tags": ["Boots"],
         "id": 1320,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Furor bonus. UNIQUE Passive - Furor: Upon dealing damage with a single target spell or attack (on hit), grants +12% Movement Speed that decays over 2 seconds. (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Furor bonus.<br><br><unique>UNIQUE Passive - Furor:<\/unique> Upon dealing damage with a single target spell or attack (on hit), grants +12% Movement Speed that decays over 2 seconds.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Furor",
         "group": "BootsFuror"
      },
      "3715": {
         "tags": [
            "Damage",
            "HealthRegen",
            "Jungle",
            "ManaRegen",
            "OnHit"
         ],
         "id": 3715,
         "sanitizedDescription": "+30 Bonus Gold per Large Monster Kill Passive - Challenging Smite: Smite can be cast on enemy champions, marking them for 4 seconds. While marked, basic attacks deal true damage over 3 seconds, you have vision of them, and their damage to you is reduced by 20%. Passive - Jungler: Deal 45 additional magic damage to monsters over 2 seconds and gain 10 Health Regen and 5 Mana Regen per second while under attack from neutral monsters. Limited to 1 Jungle item",
         "plaintext": "Lets your Smite mark Champions, giving you combat power against them.",
         "description": "<stats>+30 Bonus Gold per Large Monster Kill<\/stats><br><passive>Passive - Challenging Smite:<\/passive> Smite can be cast on enemy champions, marking them for 4 seconds. While marked, basic attacks deal true damage over 3 seconds, you have vision of them, and their damage to you is reduced by 20%.<br><br><passive>Passive - Jungler:<\/passive> Deal 45 additional magic damage to monsters over 2 seconds and gain 10 Health Regen and 5 Mana Regen per second while under attack from neutral monsters.<br><br><groupLimit>Limited to 1 Jungle item<\/groupLimit>",
         "name": "Skirmisher's Sabre",
         "group": "JungleItems"
      },
      "1323": {
          "tags": ["Boots"],
         "id": 1323,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Distortion bonus. UNIQUE Passive - Distortion: Teleport, Flash, and Ghost summoner spell cooldowns are reduced by 20% and are granted additional mobility: Ghost: Grants 40% Movement Speed from 27%. Flash: 20% Movement Speed bonus for 1 second after cast. Teleport: 30% Movement Speed bonus for 3 seconds after use. (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Distortion bonus.<br><br><unique>UNIQUE Passive - Distortion:<\/unique> Teleport, Flash, and Ghost summoner spell cooldowns are reduced by 20% and are granted additional mobility: <br><br><font color='#FFDD00'>Ghost:<\/font> Grants 40% Movement Speed from 27%.<br><font color='#FFDD00'>Flash:<\/font> 20% Movement Speed bonus for 1 second after cast.<br><font color='#FFDD00'>Teleport:<\/font> 30% Movement Speed bonus for 3 seconds after use.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Distortion",
         "group": "BootsDistortion"
      },
      "3718": {
         "tags": [
            "AttackSpeed",
            "Damage",
            "Jungle",
            "OnHit"
         ],
         "id": 3718,
         "sanitizedDescription": "+50% Attack Speed +30 Magic Damage on Hit Passive - Devouring Spirit: Takedowns on enemies increase the magic damage of this item: +1 for Champions or Large Monsters +2 for Rift Scuttlers +5 for Epic Monsters At 30 Stacks, your Devourer becomes Sated, granting extra on Hit effects.",
         "description": "<stats>+50% Attack Speed<br>+30 Magic Damage on Hit<\/stats><br><br><unique>Passive - Devouring Spirit:<\/unique> Takedowns on enemies increase the magic damage of this item:<br>+1 for Champions or Large Monsters<br>+2 for Rift Scuttlers<br>+5 for Epic Monsters<br><br>At 30 Stacks, your Devourer becomes Sated, granting extra on Hit effects.",
         "name": "Enchantment: Devourer",
         "group": "JungleItems"
      },
      "1322": {
          "tags": ["Boots"],
         "id": 1322,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Captain bonus. UNIQUE Passive - Captain: Grants +10% Movement Speed to nearby approaching allied champions. (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Captain bonus.<br><br><unique>UNIQUE Passive - Captain:<\/unique> Grants +10% Movement Speed to nearby approaching allied champions.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Captain",
         "group": "BootsCaptain"
      },
      "3717": {
         "tags": [
            "Health",
            "Jungle"
         ],
         "id": 3717,
         "sanitizedDescription": "+400 Health +15% Bonus Health UNIQUE Passive - Immolate: Deals 15 (+0.6 per champion level) magic damage a second to nearby enemies. Deals 100% bonus damage to monsters.",
         "description": "<stats>+400 Health<br>+15% Bonus Health<\/stats><br><br><unique>UNIQUE Passive - Immolate:<\/unique> Deals 15 (+0.6 per champion level) magic damage a second to nearby enemies. Deals 100% bonus damage to monsters. ",
         "name": "Enchantment: Cinderhulk",
         "group": "JungleItems"
      },
      "1330": {
          "tags": ["Boots"],
         "id": 1330,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Furor bonus. UNIQUE Passive - Furor: Upon dealing damage with a single target spell or attack (on hit), grants +12% Movement Speed that decays over 2 seconds. (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Furor bonus.<br><br><unique>UNIQUE Passive - Furor:<\/unique> Upon dealing damage with a single target spell or attack (on hit), grants +12% Movement Speed that decays over 2 seconds.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Furor",
         "group": "BootsFuror"
      },
      "3599": {
         "tags": ["Active"],
         "id": 3599,
         "sanitizedDescription": "Active: Offer to bind with an ally for the remainder of the game, becoming Oathsworn Allies. Oathsworn empowers you both while near one another.",
         "plaintext": "Kalista's spear that binds an Oathsworn Ally.",
         "description": "<stats><\/stats><br><passive>Active:<\/passive> Offer to bind with an ally for the remainder of the game, becoming Oathsworn Allies. Oathsworn empowers you both while near one another.",
         "name": "The Black Spear",
         "group": "TheBlackSpear"
      },
      "1075": {
         "tags": [
            "Damage",
            "Health",
            "LifeSteal",
            "OnHit"
         ],
         "id": 1075,
         "sanitizedDescription": "+70 Health +7 Attack Damage +3% Life Steal Limited to 2 Doran's items on Showdown",
         "plaintext": "Good starting item for attackers",
         "description": "<stats>+70 Health<br>+7 Attack Damage<br>+3% Life Steal<\/stats><br><br><groupLimit>Limited to 2 Doran's items on Showdown<\/groupLimit><br><br>",
         "name": "Doran's Blade (Showdown)",
         "group": "DoransShowdown"
      },
      "1074": {
         "tags": [
            "Health",
            "HealthRegen"
         ],
         "id": 1074,
         "sanitizedDescription": "+100 Health +10 Health Regen per 5 seconds UNIQUE Passive: Blocks 8 damage from champion basic attacks. Limited to 2 Doran's items on Showdown",
         "plaintext": "Good defensive starting item",
         "description": "<stats>+100 Health<br>+10 Health Regen per 5 seconds<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Blocks 8 damage from champion basic attacks.<br><br><groupLimit>Limited to 2 Doran's items on Showdown<\/groupLimit><br><br>",
         "name": "Doran's Shield (Showdown)",
         "group": "DoransShowdown"
      },
      "1076": {
         "tags": [
            "Health",
            "ManaRegen",
            "SpellDamage"
         ],
         "id": 1076,
         "sanitizedDescription": "+60 Health +15 Ability Power +3 Mana Regen per 5 seconds Passive: Restores 4 Mana upon killing a unit. Limited to 2 Doran's items on Showdown",
         "plaintext": "Good starting item for casters",
         "description": "<stats>+60 Health<br>+15 Ability Power<br>+3 Mana Regen per 5 seconds<\/stats><br><br><passive>Passive:<\/passive> Restores 4 Mana upon killing a unit.<br><br><groupLimit>Limited to 2 Doran's items on Showdown<\/groupLimit><br><br>",
         "name": "Doran's Ring (Showdown)",
         "group": "DoransShowdown"
      },
      "3748": {
         "tags": [
            "Active",
            "Damage",
            "Health",
            "HealthRegen",
            "OnHit"
         ],
         "id": 3748,
         "sanitizedDescription": "+400 Health +50 Attack Damage +100% Base Health Regen UNIQUE Passive - Cleave: Basic attacks deal 5 + 1% of your maximum health as bonus physical damage to your target and 40 + 2.5% of your maximum health as physical damage to other enemies in a cone on hit. UNIQUE Active - Crescent: Cleave damage to all targets is increased to 40 + 10% of your maximum health as bonus physical damage in a larger cone for your next basic attack (20 second cooldown). (Unique Passives with the same name don't stack.)",
         "plaintext": "Deals area of effect damage based on owner's health",
         "description": "<stats>+400 Health<br>+50 Attack Damage<br>+100% Base Health Regen <\/stats><br><br><unique>UNIQUE Passive - Cleave:<\/unique> Basic attacks deal 5 + 1% of your maximum health as bonus physical damage  to your target and 40 + 2.5% of your maximum health as physical damage  to other enemies in a cone on hit.<br><active>UNIQUE Active - Crescent:<\/active> Cleave damage to all targets is increased to 40 + 10% of your maximum health as bonus physical damage  in a larger cone for your next basic attack (20 second cooldown).<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Titanic Hydra (Melee Only)"
      },
      "1307": {
          "tags": ["Boots"],
         "id": 1307,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Captain bonus. UNIQUE Passive - Captain: Grants +10% Movement Speed to nearby approaching allied champions. (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Captain bonus.<br><br><unique>UNIQUE Passive - Captain:<\/unique> Grants +10% Movement Speed to nearby approaching allied champions.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Captain",
         "group": "BootsCaptain"
      },
      "1306": {
         "tags": ["Boots"],
         "id": 1306,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Alacrity bonus. UNIQUE Passive - Alacrity: +20 Movement Speed (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Alacrity bonus. <br><br><unique>UNIQUE Passive - Alacrity:<\/unique> +20 Movement Speed<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Alacrity",
         "group": "BootsAlacrity"
      },
      "1309": {
         "tags": ["Boots"],
         "id": 1309,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Homeguard bonus. UNIQUE Passive - Homeguard: Visiting the shop vastly increases Health and Mana Regeneration and grants 200% bonus Movement Speed that decays over 8 seconds. Bonus Movement Speed and regeneration are disabled for 6 seconds upon dealing or taking damage. (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Homeguard bonus.<br><br><unique>UNIQUE Passive - Homeguard:<\/unique> Visiting the shop vastly increases Health and Mana Regeneration and grants 200% bonus Movement Speed that decays over 8 seconds. Bonus Movement Speed and regeneration are disabled for 6 seconds upon dealing or taking damage.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Homeguard",
         "group": "BootsHomeguard"
      },
      "1308": {
          "tags": ["Boots"],
         "id": 1308,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Distortion bonus. UNIQUE Passive - Distortion: Teleport, Flash, and Ghost summoner spell cooldowns are reduced by 20% and are granted additional mobility: Ghost: Grants 40% Movement Speed from 27%. Flash: 20% Movement Speed bonus for 1 second after cast. Teleport: 30% Movement Speed bonus for 3 seconds after use. (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Distortion bonus.<br><br><unique>UNIQUE Passive - Distortion:<\/unique> Teleport, Flash, and Ghost summoner spell cooldowns are reduced by 20% and are granted additional mobility: <br><br><font color='#FFDD00'>Ghost:<\/font> Grants 40% Movement Speed from 27%.<br><font color='#FFDD00'>Flash:<\/font> 20% Movement Speed bonus for 1 second after cast.<br><font color='#FFDD00'>Teleport:<\/font> 30% Movement Speed bonus for 3 seconds after use.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Distortion",
         "group": "BootsDistortion"
      },
      "1301": {
         "tags": ["Boots"],
         "id": 1301,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Alacrity bonus. UNIQUE Passive - Alacrity: +20 Movement Speed (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Alacrity bonus. <br><br><unique>UNIQUE Passive - Alacrity:<\/unique> +20 Movement Speed<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Alacrity",
         "group": "BootsAlacrity"
      },
      "1063": {
         "tags": [
            "Health",
            "ManaRegen",
            "SpellDamage"
         ],
         "id": 1063,
         "sanitizedDescription": "+35 Ability Power Passive : +6 Mana Regen per 5 seconds UNIQUE Passive - Prospector: +150 Health (Unique Passives with the same name don't stack.)",
         "plaintext": "Good starting item for casters",
         "description": "<stats>+35 Ability Power<\/stats><br><br><unique>Passive :<\/unique> <mana>+6 Mana Regen per 5 seconds<\/mana><br><unique>UNIQUE Passive - Prospector:<\/unique> +150 Health<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Prospector's Ring"
      },
      "1300": {
         "tags": ["Boots"],
         "id": 1300,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Furor bonus. UNIQUE Passive - Furor: Upon dealing damage with a single target spell or attack (on hit), grants +12% Movement Speed that decays over 2 seconds. (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Furor bonus.<br><br><unique>UNIQUE Passive - Furor:<\/unique> Upon dealing damage with a single target spell or attack (on hit), grants +12% Movement Speed that decays over 2 seconds.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Furor",
         "group": "BootsFuror"
      },
      "1062": {
         "tags": [
            "AttackSpeed",
            "Damage",
            "Health"
         ],
         "id": 1062,
         "sanitizedDescription": "+16 Attack Damage +15% Attack Speed UNIQUE Passive - Prospector: +150 Health (Unique Passives with the same name don't stack.)",
         "plaintext": "Good starting item for attackers",
         "description": "<stats>+16 Attack Damage<br>+15% Attack Speed <\/stats><br><br><unique>UNIQUE Passive - Prospector:<\/unique> +150 Health<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Prospector's Blade"
      },
      "1303": {
         "tags": ["Boots"],
         "id": 1303,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Distortion bonus. UNIQUE Passive - Distortion: Teleport, Flash, and Ghost summoner spell cooldowns are reduced by 20% and are granted additional mobility: Ghost: Grants 40% Movement Speed from 27%. Flash: 20% Movement Speed bonus for 1 second after cast. Teleport: 30% Movement Speed bonus for 3 seconds after use. (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Distortion bonus.<br><br><unique>UNIQUE Passive - Distortion:<\/unique> Teleport, Flash, and Ghost summoner spell cooldowns are reduced by 20% and are granted additional mobility: <br><br><font color='#FFDD00'>Ghost:<\/font> Grants 40% Movement Speed from 27%.<br><font color='#FFDD00'>Flash:<\/font> 20% Movement Speed bonus for 1 second after cast.<br><font color='#FFDD00'>Teleport:<\/font> 30% Movement Speed bonus for 3 seconds after use.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Distortion",
         "group": "BootsDistortion"
      },
      "1302": {
         "tags": ["Boots"],
         "id": 1302,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Captain bonus. UNIQUE Passive - Captain: Grants +10% Movement Speed to nearby approaching allied champions. (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Captain bonus.<br><br><unique>UNIQUE Passive - Captain:<\/unique> Grants +10% Movement Speed to nearby approaching allied champions.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Captain",
         "group": "BootsCaptain"
      },
      "1305": {
         "tags": ["Boots"],
         "id": 1305,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Furor bonus. UNIQUE Passive - Furor: Upon dealing damage with a single target spell or attack (on hit), grants +12% Movement Speed that decays over 2 seconds. (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Furor bonus.<br><br><unique>UNIQUE Passive - Furor:<\/unique> Upon dealing damage with a single target spell or attack (on hit), grants +12% Movement Speed that decays over 2 seconds.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Furor",
         "group": "BootsFuror"
      },
      "1304": {
         "tags": ["Boots"],
         "id": 1304,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Homeguard bonus. UNIQUE Passive - Homeguard: Visiting the shop vastly increases Health and Mana Regeneration and grants 200% bonus Movement Speed that decays over 8 seconds. Bonus Movement Speed and regeneration are disabled for 6 seconds upon dealing or taking damage. (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Homeguard bonus.<br><br><unique>UNIQUE Passive - Homeguard:<\/unique> Visiting the shop vastly increases Health and Mana Regeneration and grants 200% bonus Movement Speed that decays over 8 seconds. Bonus Movement Speed and regeneration are disabled for 6 seconds upon dealing or taking damage.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Homeguard",
         "group": "BootsHomeguard"
      },
      "1058": {
         "tags": ["SpellDamage"],
         "id": 1058,
         "sanitizedDescription": "+60 Ability Power",
         "plaintext": "Greatly increases Ability Power",
         "description": "<stats>+60 Ability Power<\/stats>",
         "name": "Needlessly Large Rod"
      },
      "1056": {
         "tags": [
            "Health",
            "Lane",
            "ManaRegen",
            "SpellDamage"
         ],
         "id": 1056,
         "sanitizedDescription": "+60 Health +15 Ability Power Passive: +3 Mana Regen per 5 seconds. Passive: Restores 4 Mana upon killing a unit.",
         "plaintext": "Good starting item for casters",
         "description": "<stats>+60 Health<br>+15 Ability Power<\/stats><br><br><passive>Passive:<\/passive> <mana>+3 Mana Regen per 5 seconds.<br><passive>Passive:<\/passive> Restores 4 Mana upon killing a unit.<\/mana>",
         "name": "Doran's Ring"
      },
      "1057": {
         "tags": ["SpellBlock"],
         "id": 1057,
         "sanitizedDescription": "+45 Magic Resist",
         "plaintext": "Moderately increases Magic Resist",
         "description": "<stats>+45 Magic Resist<\/stats>",
         "name": "Negatron Cloak"
      },
      "3930": {
         "tags": [
            "AttackSpeed",
            "Damage",
            "Jungle",
            "OnHit"
         ],
         "id": 3930,
         "sanitizedDescription": "+50% Attack Speed +60 Magic Damage on Hit Passive - Phantom Hit: Every other basic attack will trigger on Hit effects an additional time.",
         "description": "<stats>+50% Attack Speed<br>+60 Magic Damage on Hit<\/stats><br><br><passive>Passive - Phantom Hit:<\/passive> Every other basic attack will trigger on Hit effects an additional time.",
         "name": "Enchantment: Sated Devourer",
         "group": "JungleItems"
      },
      "3931": {
         "tags": [
            "AttackSpeed",
            "Damage",
            "Jungle",
            "OnHit"
         ],
         "id": 3931,
         "sanitizedDescription": "+50% Attack Speed +60 Magic Damage on Hit Passive - Phantom Hit: Every other basic attack will trigger on Hit effects an additional time.",
         "description": "<stats>+50% Attack Speed<br>+60 Magic Damage on Hit<\/stats><br><br><passive>Passive - Phantom Hit:<\/passive> Every other basic attack will trigger on Hit effects an additional time.",
         "name": "Enchantment: Sated Devourer",
         "group": "JungleItems"
      },
      "3932": {
         "tags": [
            "AttackSpeed",
            "Damage",
            "Jungle",
            "OnHit"
         ],
         "id": 3932,
         "sanitizedDescription": "+50% Attack Speed +60 Magic Damage on Hit Passive - Phantom Hit: Every other basic attack will trigger on Hit effects an additional time.",
         "description": "<stats>+50% Attack Speed<br>+60 Magic Damage on Hit<\/stats><br><br><passive>Passive - Phantom Hit:<\/passive> Every other basic attack will trigger on Hit effects an additional time.",
         "name": "Enchantment: Sated Devourer",
         "group": "JungleItems"
      },
      "3933": {
         "tags": [
            "AttackSpeed",
            "Damage",
            "Jungle",
            "OnHit"
         ],
         "id": 3933,
         "sanitizedDescription": "+50% Attack Speed +60 Magic Damage on Hit Passive - Phantom Hit: Every other basic attack will trigger on Hit effects an additional time.",
         "description": "<stats>+50% Attack Speed<br>+60 Magic Damage on Hit<\/stats><br><br><passive>Passive - Phantom Hit:<\/passive> Every other basic attack will trigger on Hit effects an additional time.",
         "name": "Enchantment: Sated Devourer",
         "group": "JungleItems"
      },
      "3110": {
         "tags": [
            "Armor",
            "Aura",
            "CooldownReduction",
            "Mana"
         ],
         "id": 3110,
         "sanitizedDescription": "+90 Armor +20% Cooldown Reduction +400 Mana UNIQUE Aura: Reduces the Attack Speed of nearby enemies by 15%.",
         "plaintext": "Massively increases Armor and slows enemy basic attacks",
         "description": "<stats>+90 Armor<br>+20% Cooldown Reduction<br><mana>+400 Mana<\/mana><\/stats><br><br><aura>UNIQUE Aura:<\/aura> Reduces the Attack Speed of nearby enemies by 15%.",
         "name": "Frozen Heart"
      },
      "3111": {
         "tags": [
            "Boots",
            "SpellBlock",
            "Tenacity"
         ],
         "id": 3111,
         "sanitizedDescription": "+25 Magic Resist UNIQUE Passive - Enhanced Movement: +45 Movement Speed UNIQUE Passive - Tenacity: Reduces the duration of stuns, slows, taunts, fears, silences, blinds, polymorphs, and immobilizes by 35%. (Unique Passives with the same name don't stack.)",
         "plaintext": "Increases Movement Speed and reduces duration of disabling effects",
         "description": "<stats>+25 Magic Resist<\/stats><br><br><unique>UNIQUE Passive - Enhanced Movement:<\/unique> +45 Movement Speed<br><unique>UNIQUE Passive - Tenacity:<\/unique> Reduces the duration of stuns, slows, taunts, fears, silences, blinds, polymorphs, and immobilizes by 35%.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Mercury's Treads"
      },
      "3112": {
         "tags": [
            "HealthRegen",
            "SpellBlock"
         ],
         "id": 3112,
         "sanitizedDescription": "+70 Magic Resist +100% Base Health Regeneration UNIQUE Passive: Grants a shield that absorbs up to 30 (+10 per level) damage. The shield will refresh after 9 seconds without receiving damage.",
         "plaintext": "Grants a shield when out of combat",
         "description": "<stats>+70 Magic Resist<br>+100% Base Health Regeneration <\/stats><br><br><unique>UNIQUE Passive:<\/unique> Grants a shield that absorbs up to 30 (+10 per level) damage. The shield will refresh after 9 seconds without receiving damage.",
         "name": "Orb of Winter"
      },
      "3106": {
         "tags": [
            "AttackSpeed",
            "OnHit"
         ],
         "id": 3106,
         "sanitizedDescription": "+15% Attack Speed UNIQUE Passive - Maim: Basic attacks against monsters deal 50 bonus magic damage and heal 8 Health on hit. (Unique Passives with the same name don't stack.)",
         "plaintext": "Basic attacks kill minions and monsters quickly",
         "description": "<stats>+15% Attack Speed<\/stats><br><br><unique>UNIQUE Passive - Maim:<\/unique> Basic attacks against monsters deal 50 bonus magic damage and heal 8 Health on hit.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Madred's Razors"
      },
      "3108": {
         "tags": [
            "CooldownReduction",
            "SpellDamage"
         ],
         "id": 3108,
         "sanitizedDescription": "+30 Ability Power UNIQUE Passive: +10% Cooldown Reduction",
         "plaintext": "Increases Ability Power and Cooldown Reduction",
         "description": "<stats>+30 Ability Power<\/stats><br><br><unique>UNIQUE Passive:<\/unique> +10% Cooldown Reduction",
         "name": "Fiendish Codex"
      },
      "3102": {
         "tags": [
            "Health",
            "HealthRegen",
            "SpellBlock"
         ],
         "id": 3102,
         "sanitizedDescription": "+450 Health +60 Magic Resist +100% Base Health Regeneration UNIQUE Passive: Grants a spell shield that blocks the next enemy ability. This shield refreshes after no damage is taken from enemy champions for 40 seconds.",
         "plaintext": "Periodically blocks enemy abilities",
         "description": "<stats>+450 Health<br>+60 Magic Resist<br>+100% Base Health Regeneration <\/stats><br><br><unique>UNIQUE Passive:<\/unique> Grants a spell shield that blocks the next enemy ability. This shield refreshes after no damage is taken from enemy champions for 40 seconds.",
         "name": "Banshee's Veil"
      },
      "3105": {
         "tags": [
            "Aura",
            "Health",
            "HealthRegen",
            "SpellBlock"
         ],
         "id": 3105,
         "sanitizedDescription": "+200 Health +100% Base Health Regen +20 Magic Resist UNIQUE Aura - Legion: Grants nearby allies +15 Magic Resist. (Unique Auras with the same name don't stack.)",
         "plaintext": "Improves defenses for nearby allies",
         "description": "<stats>+200 Health<br>+100% Base Health Regen <br>+20 Magic Resist<\/stats><br><br><aura>UNIQUE Aura - Legion:<\/aura> Grants nearby allies +15 Magic Resist.<br><br><i>(Unique Auras with the same name don't stack.)<\/i>",
         "name": "Aegis of the Legion"
      },
      "3104": {
         "tags": [
            "CriticalStrike",
            "Damage"
         ],
         "id": 3104,
         "sanitizedDescription": "+80 Attack Damage +25% Critical Strike Chance UNIQUE Passive: Critical Strikes cause enemies to bleed for an additional 150% of bonus Attack Damage as magic damage over 3 seconds and reveal them for the duration.",
         "plaintext": "Critical strikes cause your target to bleed and be revealed.",
         "description": "<stats>+80 Attack Damage<br>+25% Critical Strike Chance<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Critical Strikes cause enemies to bleed for an additional 150% of bonus Attack Damage as magic damage over 3 seconds and reveal them for the duration.",
         "name": "Lord Van Damm's Pillager"
      },
      "3100": {
         "tags": [
            "Mana",
            "NonbootsMovement",
            "SpellDamage"
         ],
         "id": 3100,
         "sanitizedDescription": "+80 Ability Power +5% Movement Speed +250 Mana UNIQUE Passive - Spellblade: After using an ability, the next basic attack deals 75% Base Attack Damage (+50% of Ability Power) bonus magic damage on hit (1.5 second cooldown). (Unique Passives with the same name don't stack.)",
         "plaintext": "Grants a bonus to next attack after spell cast",
         "description": "<stats>+80 Ability Power<br>+5% Movement Speed<br><mana>+250 Mana<\/mana><\/stats><br><br><unique>UNIQUE Passive - Spellblade:<\/unique> After using an ability, the next basic attack deals 75% Base Attack Damage (+50% of Ability Power) bonus magic damage on hit (1.5 second cooldown).<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Lich Bane"
      },
      "3101": {
         "tags": [
            "AttackSpeed",
            "CooldownReduction"
         ],
         "id": 3101,
         "sanitizedDescription": "+40% Attack Speed UNIQUE Passive: +10% Cooldown Reduction",
         "plaintext": "Increased Attack Speed and Cooldown Reduction",
         "description": "<stats>+40% Attack Speed<\/stats><br><br><unique>UNIQUE Passive:<\/unique> +10% Cooldown Reduction",
         "name": "Stinger"
      },
      "3801": {
         "tags": [
            "Health",
            "HealthRegen"
         ],
         "id": 3801,
         "sanitizedDescription": "+200 Health +50% Base Health Regen",
         "plaintext": "Grants Health and Health Regen",
         "description": "<stats>+200 Health<br>+50% Base Health Regen <\/stats>",
         "name": "Crystalline Bracer"
      },
      "3706": {
         "tags": [
            "Damage",
            "HealthRegen",
            "Jungle",
            "ManaRegen",
            "OnHit"
         ],
         "id": 3706,
         "sanitizedDescription": "+30 Bonus Gold per Large Monster Kill Passive - Chilling Smite: Smite can be cast on enemy champions, dealing reduced true damage and stealing 20% movement speed for 2 seconds. Passive - Jungler: Deal 45 additional magic damage to monsters over 2 seconds and gain 10 Health Regen and 5 Mana Regen per second while under attack from neutral monsters. Limited to 1 Jungle item",
         "plaintext": "Lets your Smite slow Champions",
         "description": "<stats>+30 Bonus Gold per Large Monster Kill<\/stats><br><passive>Passive - Chilling Smite:<\/passive> Smite can be cast on enemy champions, dealing reduced true damage and stealing 20% movement speed for 2 seconds. <br><br><passive>Passive - Jungler:<\/passive> Deal 45 additional magic damage to monsters over 2 seconds and gain 10 Health Regen and 5 Mana Regen per second while under attack from neutral monsters.<br><br><groupLimit>Limited to 1 Jungle item<\/groupLimit>",
         "name": "Stalker's Blade",
         "group": "JungleItems"
      },
      "3707": {
         "tags": [
            "ArmorPenetration",
            "CooldownReduction",
            "Damage",
            "Jungle"
         ],
         "id": 3707,
         "sanitizedDescription": "+40 Attack Damage +10% Cooldown Reduction +10 Armor Penetration",
         "description": "<stats>+40 Attack Damage<br>+10% Cooldown Reduction<br>+10 Armor Penetration<\/stats>",
         "name": "Enchantment: Warrior",
         "group": "JungleItems"
      },
      "3800": {
         "tags": [
            "Active",
            "Health",
            "HealthRegen",
            "Mana",
            "NonbootsMovement",
            "Slow"
         ],
         "id": 3800,
         "sanitizedDescription": "+500 Health +300 Mana +100% Base Health Regen UNIQUE Active: Grants +60% Movement Speed to nearby allies when moving towards enemies or enemy turrets for 3 seconds. After 3 seconds, a shockwave is emitted, slowing nearby enemy champion Movement Speed by 80% for 1 second(s) (90 second cooldown). This effect may be reactivated early to instantly release the shockwave.",
         "plaintext": "Grants Health, Mana. Activate to speed towards enemies and slow them.",
         "description": "<stats>+500 Health<br><mana>+300 Mana<\/mana><br>+100% Base Health Regen <\/stats><br><br><unique>UNIQUE Active:<\/unique> Grants +60% Movement Speed to nearby allies when moving towards enemies or enemy turrets for 3 seconds. After 3 seconds, a shockwave is emitted, slowing nearby enemy champion Movement Speed by 80% for 1 second(s) (90 second cooldown).<br><br>This effect may be reactivated early to instantly release the shockwave.",
         "name": "Righteous Glory"
      },
      "3504": {
         "tags": [
            "CooldownReduction",
            "ManaRegen",
            "NonbootsMovement",
            "SpellDamage"
         ],
         "id": 3504,
         "sanitizedDescription": "+40 Ability Power +10% Cooldown Reduction +100% Base Mana Regen UNIQUE Passive: +8% Movement Speed UNIQUE Passive: Your heals and shields on another allied champion grant them 15% Attack Speed and 30 magic damage on-hit for 6 seconds. (This does not include regeneration effects or effects on yourself.)",
         "plaintext": "Shield and heal effects on other units grant them Attack Speed and bonus on-hit magic damage briefly",
         "description": "<stats>+40 Ability Power<br>+10% Cooldown Reduction<br><mana>+100% Base Mana Regen <\/mana><\/stats><br><br><unique>UNIQUE Passive:<\/unique> +8% Movement Speed<br><unique>UNIQUE Passive:<\/unique> Your heals and shields on another allied champion grant them 15% Attack Speed and 30 magic damage on-hit for 6 seconds.<br><br><i>(This does not include regeneration effects or effects on yourself.)",
         "name": "Ardent Censer"
      },
      "3708": {
         "tags": [
            "CooldownReduction",
            "Jungle",
            "Mana",
            "SpellDamage"
         ],
         "id": 3708,
         "sanitizedDescription": "+50 Ability Power +200 Mana +10% Cooldown Reduction UNIQUE Passive - Spellblade: After using an ability, the next basic attack deals 100% Base Attack Damage (+30% of Ability Power) bonus magic damage on hit (1.5 second cooldown). When directly attacking a monster, the bonus damage is reapplied in an AoE around the target, and 8% of your missing Mana is restored.",
         "description": "<stats>+50 Ability Power<br><mana>+200 Mana<\/mana><br>+10% Cooldown Reduction<\/stats><br><br><unique>UNIQUE Passive - Spellblade:<\/unique> After using an ability, the next basic attack deals 100% Base Attack Damage (+30% of Ability Power) bonus magic damage on hit (1.5 second cooldown). When directly attacking a monster, the bonus damage is reapplied in an AoE around the target, and 8% of your missing Mana is restored.",
         "name": "Enchantment: Runeglaive",
         "group": "JungleItems"
      },
      "3709": {
         "tags": [
            "Health",
            "Jungle"
         ],
         "id": 3709,
         "sanitizedDescription": "+400 Health +15% Bonus Health UNIQUE Passive - Immolate: Deals 15 (+0.6 per champion level) magic damage a second to nearby enemies. Deals 100% bonus damage to monsters.",
         "description": "<stats>+400 Health<br>+15% Bonus Health<\/stats><br><br><unique>UNIQUE Passive - Immolate:<\/unique> Deals 15 (+0.6 per champion level) magic damage a second to nearby enemies. Deals 100% bonus damage to monsters. ",
         "name": "Enchantment: Cinderhulk",
         "group": "JungleItems"
      },
      "3508": {
         "tags": [
            "CooldownReduction",
            "Damage",
            "LifeSteal",
            "ManaRegen"
         ],
         "id": 3508,
         "sanitizedDescription": "+80 Attack Damage +10% Life Steal +10% Cooldown Reduction UNIQUE Passive: Restores 2% to 8% of the damage dealt by basic attacks as Mana. This effect increases based on missing Mana.",
         "plaintext": "Grants Attack Damage and Mana Leech based on missing Mana",
         "description": "<stats>+80 Attack Damage<br>+10% Life Steal<br>+10% Cooldown Reduction<\/stats><br><br><mana><passive>UNIQUE Passive:<\/passive> Restores 2% to 8% of the damage dealt by basic attacks as Mana. This effect increases based on missing Mana.<\/mana>",
         "name": "Essence Reaver"
      },
      "3361": {
         "tags": [
            "Active",
            "Trinket",
            "Vision"
         ],
         "id": 3361,
         "sanitizedDescription": "Limited to 1 Trinket. *Level 9+ required to upgrade. UNIQUE Active: Consume a charge to place an invisible ward that reveals the surrounding area for 180 seconds. Stores a charge every 60 seconds, up to 2 total. Limit 3 Stealth Wards on the map per player. (Trinkets cannot be used in the first 30 seconds of a game. Selling a Trinket will disable Trinket use for 120 seconds).",
         "plaintext": "Periodically place a Stealth Ward",
         "description": "<groupLimit>Limited to 1 Trinket.<\/groupLimit><levelLimit> *Level 9+ required to upgrade.<\/levelLimit><stats><\/stats><br><br><unique>UNIQUE Active:<\/unique> Consume a charge to place an invisible ward that reveals the surrounding area for 180 seconds.  Stores a charge every 60 seconds, up to 2 total. Limit 3 <font color='#BBFFFF'>Stealth Wards<\/font> on the map per player.<br><br><i>(Trinkets cannot be used in the first 30 seconds of a game. Selling a Trinket will disable Trinket use for 120 seconds).<\/i>",
         "name": "Greater Stealth Totem (Trinket)",
         "group": "RelicBase"
      },
      "3362": {
         "tags": [
            "Active",
            "Trinket",
            "Vision"
         ],
         "id": 3362,
         "sanitizedDescription": "Limited to 1 Trinket. *Level 9+ required to upgrade. UNIQUE Active: Places a visible ward that reveals the surrounding area and invisible units in the area until killed (120 second cooldown). Limit 1 Vision Ward on the map per player. (Trinkets cannot be used in the first 30 seconds of a game. Selling a Trinket will disable Trinket use for 120 seconds).",
         "plaintext": "Periodically place a Vision Ward",
         "description": "<groupLimit>Limited to 1 Trinket.<\/groupLimit><levelLimit> *Level 9+ required to upgrade.<\/levelLimit><stats><\/stats><br><br><unique>UNIQUE Active:<\/unique> Places a visible ward that reveals the surrounding area and invisible units in the area until killed (120 second cooldown). Limit 1 <font color='#BBFFFF'>Vision Ward<\/font> on the map per player.<br><br><i>(Trinkets cannot be used in the first 30 seconds of a game. Selling a Trinket will disable Trinket use for 120 seconds).<\/i>",
         "name": "Greater Vision Totem (Trinket)",
         "group": "RelicBase"
      },
      "3363": {
         "tags": [
            "Active",
            "Trinket",
            "Vision"
         ],
         "id": 3363,
         "sanitizedDescription": "Limited to 1 Trinket. *Level 9+ required to upgrade. UNIQUE Active: Reveals an area up to 4000 units away for 2 seconds. Enemy champions found will be revealed for 5 seconds (90 second cooldown). Also places a visible ward in the area that lasts 60 seconds. This ward is untargetable by allies. (Trinkets cannot be used in the first 30 seconds of a game. Selling a Trinket will disable Trinket use for 120 seconds).",
         "plaintext": "Briefly reveals a targeted area",
         "description": "<groupLimit>Limited to 1 Trinket.<\/groupLimit><levelLimit> <stats> *Level 9+ required to upgrade.<\/stats><\/levelLimit><br><br><unique>UNIQUE Active:<\/unique> Reveals an area up to 4000 units away for 2 seconds. Enemy champions found will be revealed for 5 seconds (90 second cooldown). <br><br>Also places a visible ward in the area that lasts 60 seconds. This ward is untargetable by allies.<br><br><i>(Trinkets cannot be used in the first 30 seconds of a game. Selling a Trinket will disable Trinket use for 120 seconds).<\/i>",
         "name": "Farsight Orb (Trinket)",
         "group": "RelicBase"
      },
      "3364": {
         "tags": [
            "Active",
            "Trinket",
            "Vision"
         ],
         "id": 3364,
         "sanitizedDescription": "Limited to 1 Trinket. *Level 9+ required to upgrade. UNIQUE Active: Reveals and disables nearby invisible traps and invisible wards for 6 seconds in a medium radius and grants detection of nearby invisible units for 10 seconds (75 second cooldown). (Trinkets cannot be used in the first 30 seconds of a game. Selling a Trinket will disable Trinket use for 120 seconds).",
         "plaintext": "Disables nearby invisible wards and trap and grants true sight briefly",
         "description": "<groupLimit>Limited to 1 Trinket.<\/groupLimit><levelLimit> *Level 9+ required to upgrade.<\/levelLimit><stats><\/stats><br><br><unique>UNIQUE Active:<\/unique> Reveals and disables nearby invisible traps and invisible wards for 6 seconds in a medium radius and grants detection of nearby invisible units for 10 seconds (75 second cooldown).<br><br><i>(Trinkets cannot be used in the first 30 seconds of a game. Selling a Trinket will disable Trinket use for 120 seconds).<\/i>",
         "name": "Oracle's Lens (Trinket)",
         "group": "RelicBase"
      },
      "2140": {
         "tags": [
            "Consumable",
            "Damage",
            "LifeSteal",
            "SpellVamp"
         ],
         "id": 2140,
         "sanitizedDescription": "Level 9 required to purchase. Click to Consume: Grants +25 Attack Damage and Bloodlust for 3 minutes. Bloodlust: Dealing physical damage to champions heals for 10% of the damage dealt. Scoring a Kill or Assist extends the duration of this Flask by 30 seconds. (Only one Flask effect may be active at a time.)",
         "plaintext": "Temporarily grants Attack Damage and heals you when dealing physical damage.",
         "description": "<stats><levelLimit>Level 9 required to purchase.<\/levelLimit><\/stats><br><br><consumable>Click to Consume:<\/consumable> Grants +25 Attack Damage and <font color='#FF8811'><u>Bloodlust<\/u><\/font> for 3 minutes.<br><br><font color='#FF8811'><u>Bloodlust:<\/u><\/font> Dealing physical damage to champions heals for 10% of the damage dealt. Scoring a Kill or Assist extends the duration of this Flask by 30 seconds.<br><br><i>(Only one Flask effect may be active at a time.)<\/i>",
         "name": "Elixir of Wrath",
         "group": "Flasks"
      },
      "2138": {
         "tags": [
            "Consumable",
            "NonbootsMovement",
            "Tenacity"
         ],
         "id": 2138,
         "sanitizedDescription": "Level 9 required to purchase. Click to Consume: Grants 25% increased Size, Slow Resistance, Tenacity and Path of Iron for 3 minutes. Path of Iron: Moving leaves a path behind that boosts allied champion's Movement Speed by 15%. (Only one Flask effect may be active at a time.)",
         "plaintext": "Temporarily reduces the power of enemy crowd control effects. Leaves a trail for allies to follow.",
         "description": "<stats><levelLimit>Level 9 required to purchase.<\/levelLimit><\/stats><br><br><consumable>Click to Consume:<\/consumable> Grants 25% increased Size, Slow Resistance, Tenacity and <font color='#FF8811'><u>Path of Iron<\/u><\/font> for 3 minutes.<br><br><font color='#FF8811'><u>Path of Iron:<\/u><\/font> Moving leaves a path behind that boosts allied champion's Movement Speed by 15%.<br><br><i>(Only one Flask effect may be active at a time.)<\/i>",
         "name": "Elixir of Iron",
         "group": "Flasks"
      },
      "2139": {
         "tags": [
            "Consumable",
            "ManaRegen",
            "SpellDamage"
         ],
         "id": 2139,
         "sanitizedDescription": "Level 9 required to purchase. Click to Consume: Grants +40 Ability Power, 15 bonus Mana Regen per 5 seconds and Sorcery for 3 minutes. Sorcery: Damaging a champion or turret deals 25 bonus True Damage. This effect has a 5 second cooldown versus champions but no cooldown versus turrets. (Only one Flask effect may be active at a time.)",
         "plaintext": "Temporarily grants Ability Power and Bonus Damage to champions and turrets.",
         "description": "<stats><levelLimit>Level 9 required to purchase.<\/levelLimit><\/stats><br><br><consumable>Click to Consume:<\/consumable> Grants +40 Ability Power, 15 bonus Mana Regen per 5 seconds and <font color='#FF8811'><u>Sorcery<\/u><\/font> for 3 minutes. <br><br><font color='#FF8811'><u>Sorcery:<\/u><\/font> Damaging a champion or turret deals 25 bonus True Damage. This effect has a 5 second cooldown versus champions but no cooldown versus turrets.<br><br><i>(Only one Flask effect may be active at a time.)<\/i><br>",
         "name": "Elixir of Sorcery",
         "group": "Flasks"
      },
      "2137": {
         "tags": [
            "Consumable",
            "Health"
         ],
         "id": 2137,
         "sanitizedDescription": "Level 9 required to purchase. Click to Consume: Grants +250 Health, 15% Bonus Damage to Towers and Siege Commander for 3 minutes. Siege Commander: Nearby minions gain 15% Bonus Damage to Towers and gain Movement Speed based on champion's Movement Speed. (Only one Flask effect may be active at a time.)",
         "plaintext": "Temporarily grants Health and boosts the speed and power of nearby minions versus Towers.",
         "description": "<stats><levelLimit>Level 9 required to purchase.<\/levelLimit><\/stats><br><br><consumable>Click to Consume:<\/consumable> Grants +250 Health, 15% Bonus Damage to Towers and <font color='#FF8811'><u>Siege Commander<\/u><\/font> for 3 minutes.<br><br><font color='#FF8811'><u>Siege Commander:<\/u><\/font> Nearby minions gain 15% Bonus Damage to Towers and gain Movement Speed based on champion's Movement Speed.<br><br><i>(Only one Flask effect may be active at a time.)<\/i>",
         "name": "Elixir of Ruin",
         "group": "Flasks"
      },
      "1004": {
         "tags": ["ManaRegen"],
         "id": 1004,
         "sanitizedDescription": "+25% Base Mana Regen",
         "plaintext": "Slightly increases Mana Regen",
         "description": "<stats><mana>+25% Base Mana Regen <\/mana><\/stats>",
         "name": "Faerie Charm"
      },
      "1001": {
         "tags": ["Boots"],
         "id": 1001,
         "sanitizedDescription": "Limited to 1. UNIQUE Passive - Enhanced Movement: +25 Movement Speed (Unique Passives with the same name don't stack.)",
         "plaintext": "Slightly increases Movement Speed",
         "description": "<groupLimit>Limited to 1.<\/groupLimit><br><br><unique>UNIQUE Passive - Enhanced Movement:<\/unique> +25 Movement Speed<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Boots of Speed",
         "group": "BootsNormal"
      },
      "3146": {
         "tags": [
            "Active",
            "Damage",
            "LifeSteal",
            "Slow",
            "SpellDamage",
            "SpellVamp"
         ],
         "id": 3146,
         "sanitizedDescription": "+40 Attack Damage +80 Ability Power +10% Life Steal UNIQUE Passive: +20% Spell Vamp UNIQUE Passive: Basic attacks (on hit) and single-target spells against champions reduce the cooldown of this item by 3 seconds. UNIQUE Active: Deals 150 (+40% of Ability Power) magic damage and slows the target champion's Movement Speed by 40% for 2 seconds (60 second cooldown). (Spell Vamp: Abilities heal for a percentage of the damage they deal. Area of Effect spells only grant one-third of the healing from Spell Vamp.)",
         "plaintext": "Increases Attack Damage and Ability Power, activate to slow a target",
         "description": "<stats>+40 Attack Damage<br>+80 Ability Power<br>+10% Life Steal<\/stats><br><br><unique>UNIQUE Passive:<\/unique> +20% Spell Vamp<br><unique>UNIQUE Passive:<\/unique> Basic attacks (on hit) and single-target spells against champions reduce the cooldown of this item by 3 seconds.<br><active>UNIQUE Active:<\/active> Deals 150 (+40% of Ability Power) magic damage and slows the target champion's Movement Speed by 40% for 2 seconds (60 second cooldown).<br><br><i>(Spell Vamp: Abilities heal for a percentage of the damage they deal. Area of Effect spells only grant one-third of the healing from Spell Vamp.)<\/i>",
         "name": "Hextech Gunblade"
      },
      "1006": {
         "tags": ["HealthRegen"],
         "id": 1006,
         "sanitizedDescription": "+50% Base Health Regen",
         "plaintext": "Slightly increases Health Regen",
         "description": "<stats>+50% Base Health Regen <\/stats>",
         "name": "Rejuvenation Bead"
      },
      "3006": {
         "tags": [
            "AttackSpeed",
            "Boots"
         ],
         "id": 3006,
         "sanitizedDescription": "+25% Attack Speed UNIQUE Passive - Enhanced Movement: +45 Movement Speed (Unique Passives with the same name don't stack.)",
         "plaintext": "Enhances Movement Speed and Attack Speed",
         "description": "<stats> +25% Attack Speed<\/stats><br><br><unique>UNIQUE Passive - Enhanced Movement:<\/unique> +45 Movement Speed<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Berserker's Greaves"
      },
      "3003": {
         "tags": [
            "Mana",
            "ManaRegen",
            "SpellDamage"
         ],
         "id": 3003,
         "sanitizedDescription": "+80 Ability Power +250 Mana +50% Base Mana Regen UNIQUE Passive - Insight: Grants Ability Power equal to 3% of maximum Mana. UNIQUE Passive - Mana Charge: Grants +8 maximum Mana (max +750 Mana) for each spell cast and Mana expenditure (occurs up to 2 times every 8 seconds). Transforms into Seraph's Embrace at +750 Mana. (Unique Passives with the same name don't stack.)",
         "plaintext": "Increases Ability Power based on maximum Mana",
         "description": "<stats>+80 Ability Power<br><mana>+250 Mana<br>+50% Base Mana Regen <\/mana><\/stats><br><br><mana><unique>UNIQUE Passive - Insight:<\/unique> Grants Ability Power equal to 3% of maximum Mana.<br><unique>UNIQUE Passive - Mana Charge:<\/unique> Grants +8 maximum Mana (max +750 Mana) for each spell cast and Mana expenditure (occurs up to 2 times every 8 seconds). Transforms into Seraph's Embrace at +750 Mana.<\/mana><br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Archangel's Staff"
      },
      "3004": {
         "tags": [
            "Damage",
            "Mana",
            "ManaRegen",
            "OnHit"
         ],
         "id": 3004,
         "sanitizedDescription": "+25 Attack Damage +250 Mana +25% Base Mana Regen UNIQUE Passive - Awe: Grants bonus Attack Damage equal to 2% of maximum Mana. UNIQUE Passive - Mana Charge: Grants +4 maximum Mana (max +750 Mana) for each basic attack, spell cast, and Mana expenditure (occurs up to 2 times every 8 seconds). Transforms into Muramana at +750 Mana. (Unique Passives with the same name don't stack.)",
         "plaintext": "Increases Attack Damage based on maximum Mana",
         "description": "<stats>+25 Attack Damage<br><mana>+250 Mana<br>+25% Base Mana Regen <\/mana><\/stats><br><br><mana><unique>UNIQUE Passive - Awe:<\/unique> Grants bonus Attack Damage equal to 2% of maximum Mana.<br><unique>UNIQUE Passive - Mana Charge:<\/unique> Grants +4 maximum Mana (max +750 Mana) for each basic attack, spell cast, and Mana expenditure (occurs up to 2 times every 8 seconds).<br><br>Transforms into Muramana at +750 Mana.<\/mana><br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Manamune"
      },
      "3009": {
         "tags": ["Boots"],
         "id": 3009,
         "sanitizedDescription": "UNIQUE Passive - Enhanced Movement: +60 Movement Speed UNIQUE Passive - Slow Resist: Movement slowing effects are reduced by 25%. (Unique Passives with the same name don't stack.)",
         "plaintext": "Enhances Movement Speed and reduces the effect of slows",
         "description": "<unique>UNIQUE Passive - Enhanced Movement:<\/unique> +60 Movement Speed<br><unique>UNIQUE Passive - Slow Resist:<\/unique> Movement slowing effects are reduced by 25%.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Boots of Swiftness"
      },
      "3007": {
         "tags": [
            "Mana",
            "ManaRegen",
            "SpellDamage"
         ],
         "id": 3007,
         "sanitizedDescription": "+80 Ability Power +250 Mana +50% Base Mana Regen UNIQUE Passive - Insight: Grants Ability Power equal to 3% of maximum Mana. UNIQUE Passive - Mana Charge: Grants +10 maximum Mana (max +750 Mana) for each spell cast and Mana expenditure (occurs up to 2 times every 6 seconds). Transforms into Seraph's Embrace at +750 Mana. (Unique Passives with the same name don't stack.)",
         "plaintext": "Increases Ability Power based on maximum Mana",
         "description": "<stats>+80 Ability Power<br><mana>+250 Mana<br>+50% Base Mana Regen <\/mana><\/stats><br><br><mana><unique>UNIQUE Passive - Insight:<\/unique> Grants Ability Power equal to 3% of maximum Mana.<br><unique>UNIQUE Passive - Mana Charge:<\/unique> Grants +10 maximum Mana (max +750 Mana) for each spell cast and Mana expenditure (occurs up to 2 times every 6 seconds). Transforms into Seraph's Embrace at +750 Mana.<br><\/mana><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Archangel's Staff (Crystal Scar)"
      },
      "3008": {
         "tags": [
            "Damage",
            "Mana",
            "ManaRegen",
            "OnHit"
         ],
         "id": 3008,
         "sanitizedDescription": "+25 Attack Damage +250 Mana +25% Base Mana Regen UNIQUE Passive - Awe: Grants bonus Attack Damage equal to 2% of maximum Mana. UNIQUE Passive - Mana Charge: Grants +8 maximum Mana (max +750 Mana) for each basic attack, spell cast, and Mana expenditure (occurs up to 2 times every 6 seconds). Transforms into Muramana at +750 Mana. (Unique Passives with the same name don't stack.)",
         "plaintext": "Increases Attack Damage based on maximum Mana",
         "description": "<stats>+25 Attack Damage<br><mana>+250 Mana<br>+25% Base Mana Regen <\/mana><\/stats><br><br><mana><unique>UNIQUE Passive - Awe:<\/unique> Grants bonus Attack Damage equal to 2% of maximum Mana.<br><unique>UNIQUE Passive - Mana Charge:<\/unique> Grants +8 maximum Mana (max +750 Mana) for each basic attack, spell cast, and Mana expenditure (occurs up to 2 times every 6 seconds).<br><br>Transforms into Muramana at +750 Mana.<br><\/mana><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Manamune (Crystal Scar)"
      },
      "3342": {
         "tags": [
            "Active",
            "Trinket",
            "Vision"
         ],
         "id": 3342,
         "sanitizedDescription": "Limited to 1 Trinket. Active: Reveals a small location within 2500 range for 2 seconds. Enemy champions found will be revealed for 5 seconds (120 second cooldown). At level 9, cast range increases to 3500. (Trinkets cannot be used in the first 30 seconds of a game. Selling a Trinket will disable Trinket use for 120 seconds).",
         "plaintext": "Briefly reveals a nearby targeted area",
         "description": "<groupLimit>Limited to 1 Trinket.<\/groupLimit><br><br><unique>Active:<\/unique> Reveals a small location within 2500 range for 2 seconds. Enemy champions found will be revealed for 5 seconds (120 second cooldown).<br><br>At level 9, cast range increases to 3500.<br><br><i>(Trinkets cannot be used in the first 30 seconds of a game. Selling a Trinket will disable Trinket use for 120 seconds).<\/i>",
         "name": "Scrying Orb (Trinket)",
         "group": "RelicBase"
      },
      "3341": {
         "tags": [
            "Active",
            "Jungle",
            "Trinket",
            "Vision"
         ],
         "id": 3341,
         "sanitizedDescription": "Limited to 1 Trinket. Active: Reveals and disables nearby invisible traps and invisible wards for 6 seconds in a small radius (120 second cooldown). At level 9, cast range and sweep radius increase by 50% each and the cooldown is reduced to 75 seconds. (Trinkets cannot be used in the first 30 seconds of a game. Selling a Trinket will disable Trinket use for 120 seconds).",
         "plaintext": "Detects and disables nearby invisible wards and traps",
         "description": "<groupLimit>Limited to 1 Trinket.<\/groupLimit><br><br><unique>Active:<\/unique> Reveals and disables nearby invisible traps and invisible wards for 6 seconds in a small radius (120 second cooldown).<br><br>At level 9, cast range and sweep radius increase by 50% each and the cooldown is reduced to 75 seconds.<br><br><i>(Trinkets cannot be used in the first 30 seconds of a game. Selling a Trinket will disable Trinket use for 120 seconds).<\/i>",
         "name": "Sweeping Lens (Trinket)",
         "group": "RelicBase"
      },
      "3340": {
         "tags": [
            "Active",
            "Jungle",
            "Lane",
            "Trinket",
            "Vision"
         ],
         "id": 3340,
         "sanitizedDescription": "Limited to 1 Trinket. Active: Places a Stealth Ward that lasts 60 seconds (120 second cooldown). At level 9, this ward's duration increases to 120 seconds. Limit 3 Stealth Wards on the map per player. (Trinkets cannot be used in the first 30 seconds of a game. Selling a Trinket will disable Trinket use for 120 seconds).",
         "plaintext": "Periodically place a Stealth Ward",
         "description": "<groupLimit>Limited to 1 Trinket.<\/groupLimit><br><br><unique>Active:<\/unique> Places a <font color='#BBFFFF'>Stealth Ward<\/font> that lasts 60 seconds (120 second cooldown).<br><br>At level 9, this ward's duration increases to 120 seconds.<br><br>Limit 3 <font color='#BBFFFF'>Stealth Wards<\/font> on the map per player.<br><br><i>(Trinkets cannot be used in the first 30 seconds of a game. Selling a Trinket will disable Trinket use for 120 seconds).<\/i>",
         "name": "Warding Totem (Trinket)",
         "group": "RelicBase"
      },
      "3010": {
         "tags": [
            "Health",
            "HealthRegen",
            "Mana",
            "ManaRegen"
         ],
         "id": 3010,
         "sanitizedDescription": "+200 Health +300 Mana UNIQUE Passive - Valor's Reward: Upon leveling up, restores 150 Health and 200 Mana over 8 seconds. (Unique Passives with the same name don't stack.)",
         "plaintext": "Restores Health and Mana upon leveling up",
         "description": "<stats>+200 Health<br><mana>+300 Mana<\/mana><\/stats><br><br><unique>UNIQUE Passive - Valor's Reward:<\/unique> Upon leveling up, restores 150 Health and 200 Mana over 8 seconds.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Catalyst the Protector"
      },
      "3156": {
         "tags": [
            "Damage",
            "SpellBlock"
         ],
         "id": 3156,
         "sanitizedDescription": "+60 Attack Damage +40 Magic Resist UNIQUE Passive: Grants +1 Attack Damage for every 2% of missing Health, up to a maximum of 35 Attack Damage. UNIQUE Passive - Lifeline: Upon taking magic damage that would reduce Health below 30%, grants a shield that absorbs 400 magic damage for 5 seconds (90 second cooldown). (Unique Passives with the same name don't stack.)",
         "plaintext": "Grants bonus Attack Damage when Health is low",
         "description": "<stats>+60 Attack Damage<br>+40 Magic Resist<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Grants +1 Attack Damage for every 2% of missing Health, up to a maximum of 35 Attack Damage.<br><unique>UNIQUE Passive - Lifeline:<\/unique> Upon taking magic damage that would reduce Health below 30%, grants a shield that absorbs 400 magic damage for 5 seconds (90 second cooldown).<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Maw of Malmortius"
      },
      "3155": {
         "tags": [
            "Damage",
            "SpellBlock"
         ],
         "id": 3155,
         "sanitizedDescription": "+25 Attack Damage +30 Magic Resist UNIQUE Passive - Lifeline: Upon taking magic damage that would reduce Health below 30%, grants a shield that absorbs 250 magic damage for 5 seconds (90 second cooldown). (Unique Passives with the same name don't stack.)",
         "plaintext": "Increases Attack Damage and Magic Resist",
         "description": "<stats>+25 Attack Damage<br>+30 Magic Resist<\/stats><br><br><unique>UNIQUE Passive - Lifeline:<\/unique> Upon taking magic damage that would reduce Health below 30%, grants a shield that absorbs 250 magic damage for 5 seconds (90 second cooldown).<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Hexdrinker"
      },
      "3154": {
         "tags": [
            "Active",
            "AttackSpeed",
            "Damage",
            "GoldPer",
            "OnHit",
            "Vision"
         ],
         "id": 3154,
         "sanitizedDescription": "+12 Attack Damage +30% Attack Speed UNIQUE Passive - Maim: Basic attacks against monsters deal 75 bonus magic damage and heal 10 Health on hit. UNIQUE Passive: Gain 30% increased Gold from monsters. UNIQUE Active: Places a Stealth Ward that reveals the surrounding area for 180 seconds (180 second cooldown). Transforms into Feral Flare at 30 kills, assists and large monster kills. (Champions and monsters killed with Hunter's Machete and Madred's Razors count toward this transformation) Limited to 1 Gold Income item",
         "plaintext": "Kills monsters quickly and gain more gold, activate to place a ward",
         "description": "<stats>+12 Attack Damage<br>+30% Attack Speed<\/stats><br><br><unique>UNIQUE Passive - Maim:<\/unique> Basic attacks against monsters deal 75 bonus magic damage and heal 10 Health on hit.<br><unique>UNIQUE Passive:<\/unique> Gain 30% increased Gold from monsters.<br><active>UNIQUE Active:<\/active> Places a <font color='#BBFFFF'>Stealth Ward<\/font> that reveals the surrounding area for 180 seconds (180 second cooldown).<br><br>Transforms into Feral Flare at 30 kills, assists and large monster kills.<br><i>(Champions and monsters killed with Hunter's Machete and Madred's Razors count toward this transformation)<\/i><br><br><groupLimit>Limited to 1 Gold Income item<\/groupLimit>",
         "name": "Wriggle's Lantern",
         "group": "GoldBase"
      },
      "3153": {
         "tags": [
            "Active",
            "AttackSpeed",
            "Damage",
            "LifeSteal",
            "NonbootsMovement",
            "OnHit"
         ],
         "id": 3153,
         "sanitizedDescription": "+25 Attack Damage +40% Attack Speed +10% Life Steal UNIQUE Passive: Basic attacks deal 8% of the target's current Health in bonus physical damage (max 60 vs. monsters and minions) on hit. UNIQUE Active: Deals 10% of target champion's maximum Health (min. 100) as physical damage, heals for the same amount, and steals 25% of the target's Movement Speed for 3 seconds (90 second cooldown).",
         "plaintext": "Deals damage based on target's Health, can steal Health and Movement Speed",
         "description": "<stats>+25 Attack Damage<br>+40% Attack Speed<br>+10% Life Steal<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Basic attacks deal 8% of the target's current Health in bonus physical damage (max 60 vs. monsters and minions) on hit.<br><active>UNIQUE Active:<\/active> Deals 10% of target champion's maximum Health (min. 100) as physical damage, heals for the same amount, and steals 25% of the target's Movement Speed for 3 seconds (90 second cooldown).",
         "name": "Blade of the Ruined King"
      },
      "3200": {
          "tags": ["Viktor","ChampionSpecific"],
         "id": 3200,
         "sanitizedDescription": "+1 Ability Power per level +10 Mana per level UNIQUE Passive - Progress: This item can be upgraded three times to enhance Viktor's basic abilities.",
         "plaintext": "Increases Ability Power and can be upgraded to improve Viktor's abilities",
         "description": "<stats>+1 Ability Power per level<br>+10 Mana per level<\/stats><br><br><passive>UNIQUE Passive - Progress:<\/passive> This item can be upgraded three times to enhance Viktor's basic abilities.",
         "name": "Prototype Hex Core"
      },
      "3152": {
         "tags": [
            "CooldownReduction",
            "SpellDamage",
            "SpellVamp"
         ],
         "id": 3152,
         "sanitizedDescription": "+80 Ability Power +10% Cooldown Reduction UNIQUE Passive: Your spells and abilities heal you for 15% of the damage dealt, calculated before your target's resistances. This effect is reduced to one third for AoE effects.",
         "plaintext": "Grants Spell Vamp and Ability Power",
         "description": "<stats>+80 Ability Power<br>+10% Cooldown Reduction<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Your spells and abilities heal you for 15% of the damage dealt, calculated before your target's resistances.  This effect is reduced to one third for AoE effects.",
         "name": "Will of the Ancients"
      },
      "1011": {
         "tags": ["Health"],
         "id": 1011,
         "sanitizedDescription": "+380 Health",
         "plaintext": "Greatly increases Health",
         "description": "<stats>+380 Health<\/stats>",
         "name": "Giant's Belt"
      },
      "3151": {
         "tags": [
            "Health",
            "MagicPenetration",
            "SpellDamage"
         ],
         "id": 3151,
         "sanitizedDescription": "+80 Ability Power +300 Health UNIQUE Passive - Eyes of Pain: +15 Magic Penetration UNIQUE Passive: Dealing spell damage applies a damage-over-time effect for 3 seconds that deals bonus magic damage equal to 2% of the target's current Health per second. This bonus damage is doubled against movement-impaired units and capped at 100 damage per second vs. monsters. (A unit is movement-impaired if it is slowed, stunned, taunted, feared, or immobilized.) (Magic Penetration: Magic damage is increased by ignoring an amount of the target's Magic Resist equal to Magic Penetration.) (Unique Passives with the same name don't stack.)",
         "plaintext": "Spell damage burns enemies for a portion of their Health",
         "description": "<stats>+80 Ability Power<br>+300 Health<\/stats><br><br><unique>UNIQUE Passive - Eyes of Pain:<\/unique> +15 Magic Penetration<br><unique>UNIQUE Passive:<\/unique> Dealing spell damage applies a damage-over-time effect for 3 seconds that deals bonus magic damage equal to 2% of the target's current Health per second. This bonus damage is doubled against movement-impaired units and capped at 100 damage per second vs. monsters.<br><br><i>(A unit is movement-impaired if it is slowed, stunned, taunted, feared, or immobilized.)<\/i><br><br><i>(Magic Penetration: Magic damage is increased by ignoring an amount of the target's Magic Resist equal to Magic Penetration.)<\/i><br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Liandry's Torment"
      },
      "3139": {
         "tags": [
            "Active",
            "Damage",
            "NonbootsMovement",
            "SpellBlock"
         ],
         "id": 3139,
         "sanitizedDescription": "+80 Attack Damage +35 Magic Resist UNIQUE Active - Quicksilver: Removes all debuffs and also grants +50% bonus Movement Speed for 1 second (90 second cooldown).",
         "plaintext": "Activate to remove all debuffs and grant massive Movement Speed",
         "description": "<stats>+80 Attack Damage<br>+35 Magic Resist<\/stats><br><br><active>UNIQUE Active - Quicksilver:<\/active> Removes all debuffs and also grants +50% bonus Movement Speed for 1 second (90 second cooldown).",
         "name": "Mercurial Scimitar"
      },
      "3135": {
         "tags": [
            "MagicPenetration",
            "SpellDamage"
         ],
         "id": 3135,
         "sanitizedDescription": "+80 Ability Power UNIQUE Passive: Magic damage ignores 35% of the target's Magic Resist (applies before Magic Penetration).",
         "plaintext": "Increases magic damage",
         "description": "<stats>+80 Ability Power<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Magic damage ignores 35% of the target's Magic Resist (applies before Magic Penetration).",
         "name": "Void Staff"
      },
      "3136": {
         "tags": [
            "Health",
            "MagicPenetration",
            "SpellDamage"
         ],
         "id": 3136,
         "sanitizedDescription": "+25 Ability Power +200 Health UNIQUE Passive - Eyes of Pain: +15 Magic Penetration (Magic Penetration: Magic damage is increased by ignoring an amount of the target's Magic Resist equal to Magic Penetration.) (Unique Passives with the same name do not stack.)",
         "plaintext": "Increases magic damage",
         "description": "<stats>+25 Ability Power<br>+200 Health<\/stats><br><br><unique>UNIQUE Passive - Eyes of Pain:<\/unique> +15 Magic Penetration<br><br><i>(Magic Penetration: Magic damage is increased by ignoring an amount of the target's Magic Resist equal to Magic Penetration.)<\/i><br><br><i>(Unique Passives with the same name do not stack.)<\/i>",
         "name": "Haunting Guise"
      },
      "3137": {
         "tags": [
            "Active",
            "AttackSpeed",
            "CooldownReduction",
            "NonbootsMovement",
            "SpellBlock"
         ],
         "id": 3137,
         "sanitizedDescription": "+50% Attack Speed +45 Magic Resist +10% Cooldown Reduction UNIQUE Active - Quicksilver: Removes all debuffs, and if champion is melee, also grants +50% bonus Movement Speed for 1 second (90 second cooldown).",
         "plaintext": "Activate to remove all debuffs and grant massive Movement Speed",
         "description": "<stats>+50% Attack Speed<br>+45 Magic Resist<br>+10% Cooldown Reduction<\/stats><br><br><active>UNIQUE Active - Quicksilver:<\/active> Removes all debuffs, and if champion is melee, also grants +50% bonus Movement Speed for 1 second (90 second cooldown).",
         "name": "Dervish Blade"
      },
      "3348": {
         "tags": [
            "Active",
            "Stealth",
            "Trinket",
            "Vision"
         ],
         "id": 3348,
         "sanitizedDescription": "UNIQUE Active - Hunter's Sight: A stealth-detecting mist grants vision in the target area for 5 seconds, revealing traps and enemy champions that enter for 3 seconds (90 second cooldown).",
         "plaintext": "Activate to reveal a nearby area of the map",
         "description": "<active>UNIQUE Active - Hunter's Sight:<\/active> A stealth-detecting mist grants vision in the target area for 5 seconds, revealing traps and enemy champions that enter for 3 seconds (90 second cooldown).",
         "name": "Hextech Sweeper",
         "group": "RelicBase"
      },
      "3345": {
         "tags": [
            "Active",
            "Trinket",
            "Vision"
         ],
         "id": 3345,
         "sanitizedDescription": "Limited to 1 Trinket. Active: Consumes a charge to instantly revive at your Summoner Platform and grants 125% Movement Speed that decays over 12 seconds. Additional charges are gained at levels 9 and 14. (Max: 2 charges)",
         "plaintext": "Consumes charge to revive champion.",
         "description": "<groupLimit>Limited to 1 Trinket.<\/groupLimit><br><br><unique>Active:<\/unique> Consumes a charge to instantly revive at your Summoner Platform and grants 125% Movement Speed that decays over 12 seconds.<br><br><i>Additional charges are gained at levels 9 and 14.<\/i><br><br><font color='#BBFFFF'>(Max: 2 charges)<\/font><\/i><br><br>",
         "name": "Soul Anchor (Trinket)",
         "group": "RelicBase"
      },
      "3001": {
         "tags": [
            "Aura",
            "SpellBlock",
            "SpellDamage"
         ],
         "id": 3001,
         "sanitizedDescription": "+70 Ability Power +50 Magic Resist UNIQUE Aura: Reduces the Magic Resist of nearby enemies by 20.",
         "plaintext": "Reduces Magic Resist of nearby enemies",
         "description": "<stats>+70 Ability Power<br>+50 Magic Resist<\/stats><br><br><aura>UNIQUE Aura:<\/aura> Reduces the Magic Resist of nearby enemies by 20.",
         "name": "Abyssal Scepter"
      },
      "3143": {
         "tags": [
            "Active",
            "Armor",
            "Health",
            "Slow"
         ],
         "id": 3143,
         "sanitizedDescription": "+400 Health +60 Armor -10% Damage taken from Critical Strikes UNIQUE Passive - Cold Steel: When hit by basic attacks, reduces the attacker's Attack Speed by 15%. UNIQUE Active: Slows the Movement Speed of nearby enemy units by 35% for 4 seconds (60 second cooldown). (Unique Passives with the same name don't stack.)",
         "plaintext": "Greatly increases defenses, activate to slow nearby enemies",
         "description": "<stats>+400 Health<br>+60 Armor<br>-10% Damage taken from Critical Strikes<\/stats><br><br><unique>UNIQUE Passive - Cold Steel:<\/unique> When hit by basic attacks, reduces the attacker's Attack Speed by 15%.<br><active>UNIQUE Active:<\/active> Slows the Movement Speed of nearby enemy units by 35% for 4 seconds (60 second cooldown).<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Randuin's Omen"
      },
      "3142": {
         "tags": [
            "Active",
            "ArmorPenetration",
            "AttackSpeed",
            "CooldownReduction",
            "CriticalStrike",
            "Damage",
            "NonbootsMovement"
         ],
         "id": 3142,
         "sanitizedDescription": "+30 Attack Damage +15% Critical Strike Chance +10% Cooldown Reduction UNIQUE Passive: +20 Armor Penetration UNIQUE Active: Grants +20% Movement Speed and +40% Attack Speed for 6 seconds (45 second cooldown). (Armor Penetration: Physical damage is increased by ignoring an amount of the target's Armor equal to Armor Penetration.)",
         "plaintext": "Activate to greatly increase Movement Speed and Attack Speed",
         "description": "<stats>+30 Attack Damage<br>+15% Critical Strike Chance<br>+10% Cooldown Reduction<\/stats><br><br><passive>UNIQUE Passive:<\/passive> +20 Armor Penetration<\/passive><br><active>UNIQUE Active:<\/active> Grants +20% Movement Speed and +40% Attack Speed for 6 seconds (45 second cooldown).<br><br><i>(Armor Penetration: Physical damage is increased by ignoring an amount of the target's Armor equal to Armor Penetration.)<\/i>",
         "name": "Youmuu's Ghostblade"
      },
      "3145": {
         "tags": [
            "SpellDamage",
            "SpellVamp"
         ],
         "id": 3145,
         "sanitizedDescription": "+40 Ability Power UNIQUE Passive: +12% Spell Vamp (Spell Vamp: Abilities heal for a percentage of the damage they deal. Area of Effect spells only grant one-third of the healing from Spell Vamp.)",
         "plaintext": "Increases Spell Vamp and Ability Power",
         "description": "<stats>+40 Ability Power<\/stats><br><br><unique>UNIQUE Passive:<\/unique> +12% Spell Vamp<br><br><i>(Spell Vamp: Abilities heal for a percentage of the damage they deal. Area of Effect spells only grant one-third of the healing from Spell Vamp.)<\/i>",
         "name": "Hextech Revolver"
      },
      "3401": {
         "tags": [
            "CooldownReduction",
            "GoldPer",
            "Health",
            "HealthRegen"
         ],
         "id": 3401,
         "sanitizedDescription": "+500 Health +100% Base Health Regen +10% Cooldown Reduction UNIQUE Passive - Spoils of War: Melee basic attacks execute minions below 400 Health. Killing a minion heals the owner and the nearest allied champion for 50 (+1% of your maximum Health) and grants them kill Gold. These effects require a nearby allied champion. Recharges every 30 seconds. Max 4 charges. UNIQUE Active: Shield target ally for 10% of your maximum Health for 4 seconds. After 4 seconds, the target explodes dealing 100% of their total Attack Damage plus 30% of their Ability Power as magic damage in an area (60 second cooldown). Limited to 1 Gold Income item",
         "plaintext": "Shield an ally from damage based on your Health",
         "description": "<stats>+500 Health<br>+100% Base Health Regen <br>+10% Cooldown Reduction<\/stats><br><br><unique>UNIQUE Passive - Spoils of War:<\/unique> Melee basic attacks execute minions below 400 Health. Killing a minion heals the owner and the nearest allied champion for 50 (+1% of your maximum Health) and grants them kill Gold.<br><br>These effects require a nearby allied champion. Recharges every 30 seconds. Max 4 charges.<br><unique>UNIQUE Active:<\/unique> Shield target ally for 10% of your maximum Health for 4 seconds. After 4 seconds, the target explodes dealing 100% of their total Attack Damage plus 30% of their Ability Power as magic damage in an area (60 second cooldown).<br><br><groupLimit>Limited to 1 Gold Income item<\/groupLimit>",
         "name": "Face of the Mountain",
         "group": "GoldBase"
      },
      "3144": {
         "tags": [
            "Active",
            "Damage",
            "LifeSteal",
            "Slow"
         ],
         "id": 3144,
         "sanitizedDescription": "+25 Attack Damage +8% Life Steal UNIQUE Active: Deals 100 magic damage and slows the target champion's Movement Speed by 25% for 2 seconds (90 second cooldown).",
         "plaintext": "Activate to deal magic damage and slow target champion",
         "description": "<stats>+25 Attack Damage<br>+8% Life Steal<\/stats><br><br><active>UNIQUE Active:<\/active> Deals 100 magic damage and slows the target champion's Movement Speed by 25% for 2 seconds (90 second cooldown).",
         "name": "Bilgewater Cutlass"
      },
      "3211": {
         "tags": [
            "Health",
            "HealthRegen",
            "SpellBlock"
         ],
         "id": 3211,
         "sanitizedDescription": "+200 Health +40 Magic Resist UNIQUE Passive: Grants 150% Base Health Regen for up to 10 seconds after taking damage from an enemy champion.",
         "plaintext": "Improves defense and grants regeneration upon being damage",
         "description": "<stats>+200 Health<br>+40 Magic Resist<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Grants 150% Base Health Regen for up to 10 seconds after taking damage from an enemy champion.",
         "name": "Spectre's Cowl"
      },
      "3141": {
         "tags": ["Damage"],
         "id": 3141,
         "sanitizedDescription": "+10 Attack Damage UNIQUE Passive: Grants +5 Attack Damage per stack and 5 stacks upon first purchase. Grants 2 stacks for a kill or 1 stack for an assist (max 20 stacks). Half of the stacks are lost upon death. At 20 stacks, grants +20% bonus Attack Speed.",
         "plaintext": "Grants Attack Damage for kills and assists",
         "description": "<stats>+10 Attack Damage <\/stats><br><br><unique>UNIQUE Passive:<\/unique> Grants +5 Attack Damage per stack and 5 stacks upon first purchase. Grants 2 stacks for a kill or 1 stack for an assist (max 20 stacks). Half of the stacks are lost upon death. At 20 stacks, grants +20% bonus Attack Speed.",
         "name": "Sword of the Occult"
      },
      "3140": {
         "tags": [
            "Active",
            "SpellBlock"
         ],
         "id": 3140,
         "sanitizedDescription": "+30 Magic Resist UNIQUE Active - Quicksilver: Removes all debuffs (90 second cooldown).",
         "plaintext": "Activate to remove all debuffs",
         "description": "<stats>+30 Magic Resist<\/stats><br><br><active>UNIQUE Active - Quicksilver:<\/active> Removes all debuffs (90 second cooldown).",
         "name": "Quicksilver Sash"
      },
      "3124": {
         "tags": [
            "AttackSpeed",
            "Damage",
            "LifeSteal",
            "OnHit",
            "SpellDamage",
            "SpellVamp"
         ],
         "id": 3124,
         "sanitizedDescription": "+30 Attack Damage +40 Ability Power Passive: Basic attacks (on attack) and spell casts grant +4% Attack Speed and +4 Ability Power for 8 seconds (stacks up to 8 times). UNIQUE Passive: Falling below 50% Health grants +20% Attack Speed, +10% Life Steal, and +10% Spell Vamp until out of combat (30 second cooldown).",
         "plaintext": "Increases Ability Power and Attack Damage",
         "description": "<stats>+30 Attack Damage<br>+40 Ability Power<\/stats><br><br><passive>Passive:<\/passive> Basic attacks (on attack) and spell casts grant +4% Attack Speed and +4 Ability Power for 8 seconds (stacks up to 8 times).<br><unique>UNIQUE Passive:<\/unique> Falling below 50% Health grants +20% Attack Speed, +10% Life Steal, and +10% Spell Vamp until out of combat (30 second cooldown).",
         "name": "Guinsoo's Rageblade"
      },
      "3029": {
         "tags": [
            "Health",
            "HealthRegen",
            "Mana",
            "ManaRegen",
            "SpellDamage"
         ],
         "id": 3029,
         "sanitizedDescription": "+450 Health +450 Mana +60 Ability Power Passive: Grants +20 Health, +20 Mana, and +2 Ability Power per stack (max +200 Health, +200 Mana, and +20 Ability Power). Grants 1 stack per 40 seconds (max 10 stacks). UNIQUE Passive - Valor's Reward: Upon leveling up, restores 150 Health and 200 Mana over 8 seconds. (Unique Passives with the same name don't stack.)",
         "plaintext": "Greatly increases Health, Mana, and Ability Power",
         "description": "<stats>+450 Health<br><mana>+450 Mana<\/mana><br>+60 Ability Power<\/stats><br><br><passive>Passive:<\/passive> Grants +20 Health, +20 Mana, and +2 Ability Power per stack (max +200 Health, +200 Mana, and +20 Ability Power). Grants 1 stack per 40 seconds (max 10 stacks).<br><unique>UNIQUE Passive - Valor's Reward:<\/unique> Upon leveling up, restores 150 Health and 200 Mana over 8 seconds.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Rod of Ages (Crystal Scar)"
      },
      "3027": {
         "tags": [
            "Health",
            "HealthRegen",
            "Mana",
            "ManaRegen",
            "SpellDamage"
         ],
         "id": 3027,
         "sanitizedDescription": "+300 Health +400 Mana +60 Ability Power Passive: Grants +20 Health, +40 Mana, and +4 Ability Power per stack (max +200 Health, +400 Mana, and +40 Ability Power). Grants 1 stack per minute (max 10 stacks). UNIQUE Passive - Valor's Reward: Upon leveling up, restores 150 Health and 200 Mana over 8 seconds. (Unique Passives with the same name don't stack.)",
         "plaintext": "Greatly increases Health, Mana, and Ability Power",
         "description": "<stats>+300 Health<br><mana>+400 Mana<\/mana><br>+60 Ability Power<\/stats><br><br><passive>Passive:<\/passive> Grants +20 Health, +40 Mana, and +4 Ability Power per stack (max +200 Health, +400 Mana, and +40 Ability Power). Grants 1 stack per minute (max 10 stacks).<br><unique>UNIQUE Passive - Valor's Reward:<\/unique> Upon leveling up, restores 150 Health and 200 Mana over 8 seconds.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Rod of Ages"
      },
      "3028": {
         "tags": [
            "ManaRegen",
            "SpellBlock"
         ],
         "id": 3028,
         "sanitizedDescription": "+25 Magic Resist +50% Base Mana Regen UNIQUE Passive - Mana Font: Restores 2% of missing Mana every 5 seconds. (Unique Passives with the same name don't stack.)",
         "plaintext": "Greatly increases Mana Regen",
         "description": "<stats>+25 Magic Resist<br><mana>+50% Base Mana Regen <\/mana><\/stats><br><br><unique>UNIQUE Passive - Mana Font:<\/unique> Restores 2% of missing Mana every 5 seconds.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Chalice of Harmony"
      },
      "3025": {
         "tags": [
            "Armor",
            "CooldownReduction",
            "Mana",
            "Slow",
            "SpellDamage"
         ],
         "id": 3025,
         "sanitizedDescription": "+60 Armor +30 Ability Power +10% Cooldown Reduction +500 Mana UNIQUE Passive - Spellblade: After using an ability, the next basic attack (on hit) deals bonus physical damage equal to 125% of base Attack Damage to enemies near the target, and creates a field around the target for 2 seconds that slows enemy Movement Speed by 30% (1.5 second cooldown, half-sized field if ranged). (Unique Passives with the same name don't stack.)",
         "plaintext": "Basic attacks create a slow field after spell cast",
         "description": "<stats>+60 Armor<br>+30 Ability Power<br>+10% Cooldown Reduction<br><mana>+500 Mana<\/mana><\/stats><br><br><unique>UNIQUE Passive - Spellblade:<\/unique> After using an ability, the next basic attack (on hit) deals bonus physical damage equal to 125% of base Attack Damage to enemies near the target, and creates a field around the target for 2 seconds that slows enemy Movement Speed by 30% (1.5 second cooldown, half-sized field if ranged).<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Iceborn Gauntlet"
      },
      "3026": {
         "tags": [
            "Armor",
            "SpellBlock"
         ],
         "id": 3026,
         "sanitizedDescription": "+50 Armor +50 Magic Resist UNIQUE Passive: Upon taking lethal damage, restores 30% of maximum Health and Mana after 4 seconds of stasis (300 second cooldown).",
         "plaintext": "Periodically revives champion upon death",
         "description": "<stats>+50 Armor<br>+50 Magic Resist<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Upon taking lethal damage, restores 30% of maximum Health and Mana after 4 seconds of stasis (300 second cooldown).",
         "name": "Guardian Angel"
      },
      "3512": {
         "tags": [
            "Armor",
            "HealthRegen",
            "NonbootsMovement",
            "SpellBlock"
         ],
         "id": 3512,
         "sanitizedDescription": "+60 Armor +60 Magic Resist +150% Base Health Regen UNIQUE Passive - Point Runner: Builds up to +20% Movement Speed over 2 seconds while near turrets and fallen turrets. UNIQUE Active: Spawns a Void Gate at target location for 150 seconds. Every 4 seconds the gate makes a Voidspawn that travels down the nearest lane and decays over time. Voidspawn explodes when attacking structures. Voidspawn ignore champions and void targets (150 second cooldown). The first and every fourth Voidspawn gain 15% of maximum Health as damage.",
         "plaintext": "Makes a Voidspawn generating Void Gate to push a lane with.",
         "description": "<stats>+60 Armor<br>+60 Magic Resist<br>+150% Base Health Regen <br><\/stats><br><unique>UNIQUE Passive - Point Runner:<\/unique> Builds up to +20% Movement Speed over 2 seconds while near turrets and fallen turrets.<br><active>UNIQUE Active:<\/active> Spawns a Void Gate at target location for 150 seconds. Every 4 seconds the gate makes a Voidspawn that travels down the nearest lane and decays over time. Voidspawn explodes when attacking structures. Voidspawn ignore champions and void targets (150 second cooldown).<br><br>The first and every fourth Voidspawn gain 15% of maximum Health as damage.",
         "name": "Zz'Rot Portal"
      },
      "3035": {
         "tags": [
            "ArmorPenetration",
            "Damage"
         ],
         "id": 3035,
         "sanitizedDescription": "+40 Attack Damage UNIQUE Passive: Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
         "plaintext": "Increases physical damage",
         "description": "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
         "name": "Last Whisper"
      },
      "3031": {
         "tags": [
            "CriticalStrike",
            "Damage"
         ],
         "id": 3031,
         "sanitizedDescription": "+80 Attack Damage +20% Critical Strike Chance UNIQUE Passive: Critical strikes deal 250% damage instead of 200%.",
         "plaintext": "Massively enhances critical strikes",
         "description": "<stats>+80 Attack Damage<br>+20% Critical Strike Chance<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Critical strikes deal 250% damage instead of 200%.",
         "name": "Infinity Edge"
      },
      "3222": {
         "tags": [
            "Active",
            "CooldownReduction",
            "ManaRegen",
            "SpellBlock"
         ],
         "id": 3222,
         "sanitizedDescription": "+40 Magic Resist +10% Cooldown Reduction +100% Base Mana Regen UNIQUE Passive - Mana Font: Restores 2% of missing Mana every 5 seconds. UNIQUE Active: Removes all stuns, roots, taunts, fears, silences, and slows on an allied champion and heals that champion for 150 (+10% of maximum Health) (180 second cooldown). (Unique Passives with the same name do not stack.)",
         "plaintext": "Activate to heal and remove all disabling effects from an allied champion",
         "description": "<stats>+40 Magic Resist<br>+10% Cooldown Reduction<br><mana>+100% Base Mana Regen <\/mana><\/stats><br><br><mana><unique>UNIQUE Passive - Mana Font:<\/unique> Restores 2% of missing Mana every 5 seconds.<\/mana><br><active>UNIQUE Active:<\/active> Removes all stuns, roots, taunts, fears, silences, and slows on an allied champion and heals that champion for 150 (+10% of maximum Health) (180 second cooldown).<br><br><i>(Unique Passives with the same name do not stack.)<\/i>",
         "name": "Mikael's Crucible"
      },
      "3134": {
         "tags": [
            "ArmorPenetration",
            "CooldownReduction",
            "Damage"
         ],
         "id": 3134,
         "sanitizedDescription": "+25 Attack Damage UNIQUE Passive: +10% Cooldown Reduction UNIQUE Passive: +10 Armor Penetration (Armor Penetration: Physical damage is increased by ignoring an amount of the target's Armor equal to Armor Penetration.)",
         "plaintext": "Increases physical damage and Cooldown Reduction",
         "description": "<stats>+25 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> +10% Cooldown Reduction<br><unique>UNIQUE Passive:<\/unique> +10 Armor Penetration<br><br><i>(Armor Penetration: Physical damage is increased by ignoring an amount of the target's Armor equal to Armor Penetration.)<\/i>",
         "name": "The Brutalizer"
      },
      "3113": {
         "tags": [
            "NonbootsMovement",
            "SpellDamage"
         ],
         "id": 3113,
         "sanitizedDescription": "+30 Ability Power UNIQUE Passive: +5% Movement Speed",
         "plaintext": "Increases Ability Power and Movement Speed",
         "description": "<stats>+30 Ability Power<\/stats><br><br><unique>UNIQUE Passive:<\/unique> +5% Movement Speed",
         "name": "Aether Wisp"
      },
      "3114": {
         "tags": [
            "CooldownReduction",
            "ManaRegen"
         ],
         "id": 3114,
         "sanitizedDescription": "+50% Base Mana Regen UNIQUE Passive: +10% Cooldown Reduction",
         "plaintext": "Increases Mana Regeneration and Cooldown Reduction",
         "description": "<stats><mana>+50% Base Mana Regen <\/mana><\/stats><br><br><unique>UNIQUE Passive:<\/unique> +10% Cooldown Reduction",
         "name": "Forbidden Idol"
      },
      "3115": {
         "tags": [
            "AttackSpeed",
            "CooldownReduction",
            "OnHit",
            "SpellDamage"
         ],
         "id": 3115,
         "sanitizedDescription": "+40% Attack Speed +80 Ability Power UNIQUE Passive: +20% Cooldown Reduction UNIQUE Passive: Basic attacks deal 15 (+15% of Ability Power) bonus magic damage on hit.",
         "plaintext": "Increases Attack Speed, Ability Power, and Cooldown Reduction",
         "description": "<stats>+40% Attack Speed<br>+80 Ability Power<\/stats><br><br><unique>UNIQUE Passive:<\/unique> +20% Cooldown Reduction<br><unique>UNIQUE Passive:<\/unique> Basic attacks deal 15 (+15% of Ability Power) bonus magic damage on hit.<br>",
         "name": "Nashor's Tooth"
      },
      "3116": {
         "tags": [
            "Health",
            "Slow",
            "SpellDamage"
         ],
         "id": 3116,
         "sanitizedDescription": "+400 Health +100 Ability Power UNIQUE Passive: Damaging spells and abilities apply a Movement Speed reduction to enemies based on the spell type: Single Target: 40% reduction for 1.5 seconds. Area of Effect: 40% reduction for 1 seconds Damage over Time or Multi-hit: 20% reduction for 1 seconds. Summoned Minions: 20% reduction for 1 seconds. (If a spell fits in more than one category, it uses the weakest slow value.)",
         "plaintext": "Abilities slow enemies",
         "description": "<stats>+400 Health<br>+100 Ability Power<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Damaging spells and abilities apply a Movement Speed reduction to enemies based on the spell type:<br><br><active>Single Target:<\/active> 40% reduction for 1.5 seconds. <br><active>Area of Effect:<\/active> 40% reduction for 1 seconds<br><active>Damage over Time or Multi-hit:<\/active> 20% reduction for 1 seconds.<br><active>Summoned Minions:<\/active> 20% reduction for 1 seconds.<br><br><i>(If a spell fits in more than one category, it uses the weakest slow value.)<\/i>",
         "name": "Rylai's Crystal Scepter"
      },
      "3117": {
         "tags": ["Boots"],
         "id": 3117,
         "sanitizedDescription": "UNIQUE Passive - Enhanced Movement: +25 Movement Speed. Increases to +105 Movement Speed when out of combat for 5 seconds. (Unique Passives with the same name don't stack.)",
         "plaintext": "Greatly enhances Movement Speed when out of combat",
         "description": "<unique>UNIQUE Passive - Enhanced Movement:<\/unique> +25 Movement Speed. Increases to +105 Movement Speed when out of combat for 5 seconds.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Boots of Mobility"
      },
      "3022": {
         "tags": [
            "Damage",
            "Health",
            "OnHit",
            "Slow"
         ],
         "id": 3022,
         "sanitizedDescription": "+700 Health +30 Attack Damage UNIQUE Passive - Icy: Basic attacks slow the target's Movement Speed for 1.5 seconds on hit (40% slow for melee attacks, 30% slow for ranged attacks). (Unique Passives with the same name don't stack.)",
         "plaintext": "Basic attacks slow enemies",
         "description": "<stats>+700 Health<br>+30 Attack Damage<\/stats><br><br><unique>UNIQUE Passive - Icy:<\/unique> Basic attacks slow the target's Movement Speed for 1.5 seconds on hit (40% slow for melee attacks, 30% slow for ranged attacks).<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Frozen Mallet"
      },
      "3024": {
         "tags": [
            "Armor",
            "CooldownReduction",
            "Mana"
         ],
         "id": 3024,
         "sanitizedDescription": "+20 Armor +250 Mana UNIQUE Passive: +10% Cooldown Reduction",
         "plaintext": "Increases Armor and Cooldown Reduction",
         "description": "<stats>+20 Armor<br><mana>+250 Mana<\/mana><\/stats><br><br><unique>UNIQUE Passive:<\/unique> +10% Cooldown Reduction",
         "name": "Glacial Shroud"
      },
      "3023": {
         "tags": [
            "Active",
            "CooldownReduction",
            "NonbootsMovement",
            "Slow",
            "SpellDamage"
         ],
         "id": 3023,
         "sanitizedDescription": "+80 Ability Power +10% Cooldown Reduction +6% Movement Speed UNIQUE Active - Hunt: Summons up to 2 invulnerable ghosts that seek out the 2 nearest enemy champions for 6 seconds. If a ghost reaches its target, it reveals the target and reduces their Movement Speed by 40% for 2.5 seconds. If a ghost cannot find a target, it tries to return to the caster. Ghosts that successfully return in this way reduce the item's cooldown by 40 seconds (120 second cooldown).",
         "plaintext": "Summon wraiths to slow and reveal enemy champions",
         "description": "<stats>+80 Ability Power<br>+10% Cooldown Reduction<br>+6% Movement Speed<\/stats><br><br><active>UNIQUE Active - Hunt:<\/active> Summons up to 2 invulnerable ghosts that seek out the 2 nearest enemy champions for 6 seconds. If a ghost reaches its target, it reveals the target and reduces their Movement Speed by 40% for 2.5 seconds.<br><br>If a ghost cannot find a target, it tries to return to the caster. Ghosts that successfully return in this way reduce the item's cooldown by 40 seconds (120 second cooldown).",
         "name": "Twin Shadows"
      },
      "3020": {
         "tags": [
            "Boots",
            "MagicPenetration"
         ],
         "id": 3020,
         "sanitizedDescription": "+15 Magic Penetration UNIQUE Passive - Enhanced Movement: +45 Movement Speed (Magic Penetration: Magic damage is increased by ignoring an amount of the target's Magic Resist equal to Magic Penetration.) (Unique Passives with the same name don't stack.)",
         "plaintext": "Enhances Movement Speed and magic damage",
         "description": "<stats>+15 Magic Penetration<\/stats><br><br><unique>UNIQUE Passive - Enhanced Movement:<\/unique> +45 Movement Speed<br><br><i>(Magic Penetration: Magic damage is increased by ignoring an amount of the target's Magic Resist equal to Magic Penetration.)<\/i><br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Sorcerer's Shoes"
      },
      "3122": {
         "tags": [
            "CriticalStrike",
            "Damage",
            "OnHit"
         ],
         "id": 3122,
         "sanitizedDescription": "+20 Attack Damage +10% Critical Strike Chance UNIQUE Passive: Critical Strikes cause your target to bleed for an additional 60% of your bonus Attack Damage as magic damage over 3 seconds.",
         "plaintext": "Critical Strikes cause your target to bleed",
         "description": "<stats>+20 Attack Damage<br>+10% Critical Strike Chance<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Critical Strikes cause your target to bleed for an additional 60% of your bonus Attack Damage as magic damage over 3 seconds.<\/i>",
         "name": "Wicked Hatchet"
      },
      "3048": {
         "tags": ["Active"],
         "id": 3048,
         "sanitizedDescription": "+80 Ability Power +1000 Mana +50% Base Mana Regen UNIQUE Passive - Insight: Grants Ability Power equal to 3% of maximum Mana. UNIQUE Active - Mana Shield: Consumes 20% of current Mana to grant a shield for 3 seconds that absorbs damage equal to 150 plus the amount of Mana consumed (120 second cooldown). (Unique Passives with the same name don't stack.)",
         "description": "<stats>+80 Ability Power<br><mana>+1000 Mana<br>+50% Base Mana Regen <\/mana><\/stats><br><br><mana><unique>UNIQUE Passive - Insight:<\/unique> Grants Ability Power equal to 3% of maximum Mana.<\/mana><br><active>UNIQUE Active - Mana Shield:<\/active> Consumes 20% of current Mana to grant a shield for 3 seconds that absorbs damage equal to 150 plus the amount of Mana consumed (120 second cooldown).<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Seraph's Embrace"
      },
      "3047": {
         "tags": [
            "Armor",
            "Boots"
         ],
         "id": 3047,
         "sanitizedDescription": "+25 Armor UNIQUE Passive: Blocks 10% of the damage from basic attacks. UNIQUE Passive - Enhanced Movement: +45 Movement Speed (Unique Passives with the same name don't stack.)",
         "plaintext": "Enhances Movement Speed and reduces incoming basic attack damage",
         "description": "<stats>+25 Armor<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Blocks 10% of the damage from basic attacks.<br><unique>UNIQUE Passive - Enhanced Movement:<\/unique> +45 Movement Speed<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Ninja Tabi"
      },
      "2050": {
         "tags": ["Consumable"],
         "id": 2050,
         "sanitizedDescription": "Click to Consume: Places an invisible ward that reveals the surrounding area for 60 seconds.",
         "description": "<consumable>Click to Consume:<\/consumable> Places an invisible ward that reveals the surrounding area for 60 seconds.",
         "name": "Explorer's Ward"
      },
      "2051": {
         "tags": [
            "Active",
            "Armor",
            "Health",
            "HealthRegen",
            "NonbootsMovement",
            "SpellBlock"
         ],
         "id": 2051,
         "sanitizedDescription": "+200 Health +125% Base Health Regeneration UNIQUE Passive: Enemy spellcasts reduce the cooldown of Battle Cry by 1 second. UNIQUE Active - Battle Cry: Gain 30% Movement Speed, 20 Armor, and 20 Magic Resist for 3 seconds. 25 second cooldown.",
         "plaintext": "Activate for Movement Speed and a defensive boost",
         "description": "<stats>+200 Health<br>+125% Base Health Regeneration <\/stats><br><br><unique>UNIQUE Passive:<\/unique> Enemy spellcasts reduce the cooldown of Battle Cry by 1 second.<br><active>UNIQUE Active - Battle Cry:<\/active> Gain 30% Movement Speed, 20 Armor, and 20 Magic Resist for 3 seconds. 25 second cooldown.",
         "name": "Guardian's Horn"
      },
      "2052": {
          "tags": ["Consumable"],
         "id": 2052,
         "sanitizedDescription": "This savory blend of free-range, grass-fed Avarosan game hens and organic, non-ZMO Freljordian herbs contains the essential nutrients necessary to keep your Poro purring with pleasure. All proceeds will be donated towards fighting Noxian animal cruelty.",
         "description": "This savory blend of free-range, grass-fed Avarosan game hens and organic, non-ZMO Freljordian herbs contains the essential nutrients necessary to keep your Poro purring with pleasure.<br><br><i>All proceeds will be donated towards fighting Noxian animal cruelty.<\/i>",
         "name": "Poro-Snax",
         "group": "RelicBase"
      },
      "1051": {
         "tags": ["CriticalStrike"],
         "id": 1051,
         "sanitizedDescription": "+8% Critical Strike Chance",
         "plaintext": "Slightly increases Critical Strike Chance",
         "description": "<stats>+8% Critical Strike Chance<\/stats>",
         "name": "Brawler's Gloves"
      },
      "3197": {
         "tags": [
            "Mana",
            "SpellDamage"
         ],
         "id": 3197,
         "sanitizedDescription": "+6 Ability Power per level +20 Mana per level UNIQUE Passive - Progress: Viktor can upgrade one of his basic spells.",
         "plaintext": "Allows Viktor to improve an ability of his choice",
         "description": "<stats>+6 Ability Power per level<br>+20 Mana per level<\/stats><br><br><passive>UNIQUE Passive - Progress:<\/passive> Viktor can upgrade one of his basic spells.",
         "name": "The Hex Core mk-2"
      },
      "3198": {
         "tags": [
            "Mana",
            "SpellDamage"
         ],
         "id": 3198,
         "sanitizedDescription": "+10 Ability Power per level +25 Mana per level UNIQUE Passive - Glorious Evolution: Viktor has reached the pinnacle of his power, upgrading Chaos Storm in addition to his basic spells.",
         "plaintext": "Allows Viktor to improve an ability of his choice",
         "description": "<stats>+10 Ability Power per level<br>+25 Mana per level<\/stats><br><br><passive>UNIQUE Passive - Glorious Evolution:<\/passive> Viktor has reached the pinnacle of his power, upgrading Chaos Storm in addition to his basic spells.",
         "name": "Perfect Hex Core"
      },
      "1054": {
         "tags": [
            "Health",
            "HealthRegen",
            "Lane"
         ],
         "id": 1054,
         "sanitizedDescription": "+80 Health Passive: Restores 6 Health every 5 seconds. UNIQUE Passive: Blocks 8 damage from single target attacks and spells from champions.",
         "plaintext": "Good defensive starting item",
         "description": "<stats>+80 Health<\/stats><br><br><unique>Passive: <\/unique> Restores 6 Health every 5 seconds.<br><unique>UNIQUE Passive:<\/unique> Blocks 8 damage from single target attacks and spells from champions.",
         "name": "Doran's Shield"
      },
      "1055": {
         "tags": [
            "Damage",
            "Health",
            "Lane",
            "LifeSteal"
         ],
         "id": 1055,
         "sanitizedDescription": "+70 Health +7 Attack Damage +3% Life Steal",
         "plaintext": "Good starting item for attackers",
         "description": "<stats>+70 Health<br>+7 Attack Damage<br>+3% Life Steal<\/stats>",
         "name": "Doran's Blade"
      },
      "3196": {
         "tags": [
            "Mana",
            "SpellDamage"
         ],
         "id": 3196,
         "sanitizedDescription": "+3 Ability Power per level +15 Mana per level UNIQUE Passive - Progress: Viktor can upgrade one of his basic spells.",
         "plaintext": "Allows Viktor to improve an ability of his choice",
         "description": "<stats>+3 Ability Power per level<br>+15 Mana per level<\/stats><br><br><passive>UNIQUE Passive - Progress:<\/passive> Viktor can upgrade one of his basic spells.",
         "name": "The Hex Core mk-1"
      },
      "1052": {
         "tags": ["SpellDamage"],
         "id": 1052,
         "sanitizedDescription": "+20 Ability Power",
         "plaintext": "Slightly increases Ability Power",
         "description": "<stats>+20 Ability Power<\/stats>",
         "name": "Amplifying Tome"
      },
      "1053": {
         "tags": [
            "Damage",
            "LifeSteal"
         ],
         "id": 1053,
         "sanitizedDescription": "+10 Attack Damage +8% Life Steal",
         "plaintext": "Basic attacks restore Health",
         "description": "<stats>+10 Attack Damage<br>+8% Life Steal<\/stats>",
         "name": "Vampiric Scepter"
      },
      "3191": {
         "tags": [
            "Armor",
            "SpellDamage"
         ],
         "id": 3191,
         "sanitizedDescription": "+30 Armor +25 Ability Power UNIQUE Passive: Killing a unit grants 0.5 bonus Armor and Ability Power. This bonus stacks up to 30 times.",
         "plaintext": "Increases Armor and Ability Power",
         "description": "<stats>+30 Armor<br>+25 Ability Power<\/stats><br><br><passive>UNIQUE Passive:<\/passive> Killing a unit grants 0.5 bonus Armor and Ability Power. This bonus stacks up to 30 times.",
         "name": "Seeker's Armguard"
      },
      "3053": {
         "tags": [
            "Damage",
            "Health",
            "LifeSteal"
         ],
         "id": 3053,
         "sanitizedDescription": "+500 Health +25% Base Attack Damage UNIQUE Passive: Upon taking at least 400 to 1800 damage (based on level) within 5 seconds, gain Sterak's Fury for 8 seconds (45 second cooldown). Sterak's Fury: Grow in size and strength, gaining increased Size, +25% additional Base Attack Damage, and a rapidly decaying Shield for 30% of your maximum Health.",
         "plaintext": "Shields against large bursts of damage",
         "description": "<stats>+500 Health<br>+25% Base Attack Damage <\/stats><br><br><unique>UNIQUE Passive:<\/unique> Upon taking at least 400 to 1800 damage (based on level) within 5 seconds, gain <font color='#FF8811'><u>Sterak's Fury<\/u><\/font> for 8 seconds (45 second cooldown).<br><br><font color='#FF8811'><u>Sterak's Fury<\/u>:<\/font> Grow in size and strength, gaining increased Size, +25% additional Base Attack Damage, and a rapidly decaying Shield for 30% of your maximum Health.",
         "name": "Sterak's Gage"
      },
      "3050": {
         "tags": [
            "Armor",
            "Aura",
            "CooldownReduction",
            "Mana",
            "SpellDamage"
         ],
         "id": 3050,
         "sanitizedDescription": "+250 Mana +35 Armor +50 Ability Power +10% Cooldown Reduction UNIQUE Active - Conduit: Bind to target ally (60 second cooldown). UNIQUE Passive: When within 1000 units of each other, you and your ally generate Charges. Attacking or casting spells generates extra Charges. At 100 Charges, causing damage consumes them, increasing your and your ally's Ability Power by 20% and Critical Strike Chance by 50% for 8 seconds.",
         "plaintext": "Empowers an ally with Critical Strike Chance and Ability Power",
         "description": "<stats><mana>+250 Mana<\/mana><br>+35 Armor<br>+50 Ability Power<br>+10% Cooldown Reduction<\/stats><br><br><active>UNIQUE Active - Conduit:<\/active> Bind to target ally (60 second cooldown).<br><unique>UNIQUE Passive:<\/unique> When within 1000 units of each other, you and your ally generate Charges. Attacking or casting spells generates extra Charges. At 100 Charges, causing damage consumes them, increasing your and your ally's Ability Power by 20% and Critical Strike Chance by 50% for 8 seconds. ",
         "name": "Zeke's Harbinger"
      },
      "3190": {
         "tags": [
            "Active",
            "Aura",
            "CooldownReduction",
            "Health",
            "HealthRegen",
            "SpellBlock"
         ],
         "id": 3190,
         "sanitizedDescription": "+400 Health +100% Base Health Regen +20 Magic Resist +10% Cooldown Reduction UNIQUE Active: Grants a shield to nearby allies for 2 seconds that absorbs up to 75 (+15 per level) damage (60 second cooldown). UNIQUE Aura - Legion: Grants nearby allies +15 Magic Resist. (Unique Auras with the same name don't stack.)",
         "plaintext": "Activate to shield nearby allies from damage",
         "description": "<stats>+400 Health<br>+100% Base Health Regen <br>+20 Magic Resist<br>+10% Cooldown Reduction<\/stats><br><br><active>UNIQUE Active:<\/active> Grants a shield to nearby allies for 2 seconds that absorbs up to 75 (+15 per level) damage (60 second cooldown).<br><aura>UNIQUE Aura - Legion:<\/aura> Grants nearby allies +15 Magic Resist.<br><br><i>(Unique Auras with the same name don't stack.)<\/i>",
         "name": "Locket of the Iron Solari"
      },
      "2047": {
         "tags": [
            "Consumable",
            "Stealth",
            "Vision"
         ],
         "id": 2047,
         "sanitizedDescription": "Click to Consume: Grants detection of nearby invisible units for up to 5 minutes or until death.",
         "plaintext": "Allows champion to see invisible units",
         "description": "<consumable>Click to Consume:<\/consumable> Grants detection of nearby invisible units for up to 5 minutes or until death.",
         "name": "Oracle's Extract"
      },
      "3056": {
         "tags": [
            "Active",
            "Armor",
            "CooldownReduction",
            "Health",
            "HealthRegen",
            "NonbootsMovement"
         ],
         "id": 3056,
         "sanitizedDescription": "+300 Health +50 Armor +150% Base Health Regen +10% Cooldown Reduction UNIQUE Active: Prevents nearby enemy turrets from attacking for 3 seconds (120 second cooldown). This effect cannot be used against the same turret more than once every 8 seconds. UNIQUE Passive - Point Runner: Builds up to +20% Movement Speed over 2 seconds while near turrets (including fallen turrets).",
         "plaintext": "Temporarily disables enemy turrets",
         "description": "<stats>+300 Health<br>+50 Armor<br>+150% Base Health Regen <br>+10% Cooldown Reduction<\/stats><br><br><active>UNIQUE Active:<\/active> Prevents nearby enemy turrets from attacking for 3 seconds (120 second cooldown). This effect cannot be used against the same turret more than once every 8 seconds.<br><br><unique>UNIQUE Passive - Point Runner:<\/unique> Builds up to +20% Movement Speed over 2 seconds while near turrets (including fallen turrets).",
         "name": "Ohmwrecker"
      },
      "3057": {
         "tags": [
            "Mana",
            "SpellDamage"
         ],
         "id": 3057,
         "sanitizedDescription": "+25 Ability Power +200 Mana UNIQUE Passive - Spellblade: After using an ability, the next basic attack deals bonus physical damage equal to 100% base Attack Damage on hit (1.5 second cooldown). (Unique Passives with the same name don't stack.)",
         "plaintext": "Grants a bonus to next attack after spell cast",
         "description": "<stats>+25 Ability Power<br><mana>+200 Mana<\/mana><\/stats><br><br><unique>UNIQUE Passive - Spellblade:<\/unique> After using an ability, the next basic attack deals bonus physical damage equal to 100% base Attack Damage on hit (1.5 second cooldown).<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Sheen"
      },
      "2049": {
         "tags": [
            "Active",
            "Health",
            "Vision"
         ],
         "id": 2049,
         "sanitizedDescription": "+150 Health UNIQUE Passive - Ward Refresh: Holds 4 charges and refills upon visiting the shop. UNIQUE Active - Ghost Ward: Consumes a charge to place a Stealth Ward that reveals the surrounding area for 3 minutes. A player may only have 3 Stealth Wards on the map at one time. (Unique Passives with the same name don't stack.)",
         "plaintext": "Increases Health and provides Stealth Wards over time",
         "description": "<stats>+150 Health<\/stats><br><br><unique>UNIQUE Passive - Ward Refresh:<\/unique> Holds 4 charges and refills upon visiting the shop.<br><active>UNIQUE Active - Ghost Ward:<\/active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward<\/font> that reveals the surrounding area for 3 minutes. A player may only have 3 <font color='#BBFFFF'>Stealth Wards<\/font> on the map at one time.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Sightstone"
      },
      "1341": {
          "tags": ["Boots"],
         "id": 1341,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Teleport Active. UNIQUE Active - Teleport: Teleport to target allied object (240s CD) (60s CD on purchase)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Teleport Active.<br><br><unique>UNIQUE Active - Teleport:<\/unique> Teleport to target allied object (240s CD) (60s CD on purchase)",
         "name": "Enchantment: Teleport",
         "group": "BootsTeleport"
      },
      "1340": {
          "tags": ["Boots"],
         "id": 1340,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Teleport Active. UNIQUE Active - Teleport: Teleport to target allied object (240s CD) (60s CD on purchase)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Teleport Active.<br><br><unique>UNIQUE Active - Teleport:<\/unique> Teleport to target allied object (240s CD) (60s CD on purchase)",
         "name": "Enchantment: Teleport",
         "group": "BootsTeleport"
      },
      "3301": {
         "tags": [
            "GoldPer",
            "Lane",
            "ManaRegen"
         ],
         "id": 3301,
         "sanitizedDescription": "+25% Base Mana Regen UNIQUE Passive - Favor: Being near a minion death without dealing the killing blow grants 3 Gold and 5 Health. Limited to 1 Gold Income item ''Gold dust rises from the desert and clings to the coin.'' - Historian Shurelya, 11 November, 23 CLE",
         "plaintext": "Grants gold when nearby minions die that you didn't kill",
         "description": "<stats><mana>+25% Base Mana Regen <\/mana><\/stats><br><br><unique>UNIQUE Passive - Favor:<\/unique> Being near a minion death without dealing the killing blow grants 3 Gold and 5 Health.<br><br><groupLimit>Limited to 1 Gold Income item<\/groupLimit><br><br><i><font color='#447777'>''Gold dust rises from the desert and clings to the coin.'' - Historian Shurelya, 11 November, 23 CLE<\/font><\/i><br><br>",
         "name": "Ancient Coin",
         "group": "GoldBase"
      },
      "3303": {
         "tags": [
            "GoldPer",
            "Lane",
            "ManaRegen",
            "SpellDamage"
         ],
         "id": 3303,
         "sanitizedDescription": "+5 Ability Power +2 Gold per 10 seconds +25% Base Mana Regen UNIQUE Passive - Tribute: Spells and basic attacks against champions or buildings deal 10 additional damage and grant 5 Gold. This can occur up to 3 times every 30 seconds. Killing a minion disables this passive for 12 seconds. Limited to 1 Gold Income item",
         "plaintext": "Grants gold when you attack enemies",
         "description": "<stats>+5 Ability Power<br>+2 Gold per 10 seconds<br><mana>+25% Base Mana Regen <\/mana><\/stats><br><br><unique>UNIQUE Passive - Tribute:<\/unique> Spells and basic attacks against champions or buildings deal 10 additional damage and grant 5 Gold. This can occur up to 3 times every 30 seconds. Killing a minion disables this passive for 12 seconds.<br><br><groupLimit>Limited to 1 Gold Income item<\/groupLimit>",
         "name": "Spellthief's Edge",
         "group": "GoldBase"
      },
      "3302": {
         "tags": [
            "Aura",
            "GoldPer",
            "Health",
            "Lane"
         ],
         "id": 3302,
         "sanitizedDescription": "+75 Health UNIQUE Passive - Spoils of War: Melee basic attacks execute minions below 200 Health. Killing a minion heals the owner and the nearest allied champion for 40 Health and grants them kill Gold. These effects require a nearby allied champion. Recharges every 60 seconds. Max 2 charges. Limited to 1 Gold Income item",
         "plaintext": "Kill minions periodically to heal and grant gold to a nearby ally",
         "description": "<stats>+75 Health<\/stats><br><br><unique>UNIQUE Passive - Spoils of War:<\/unique> Melee basic attacks execute minions below 200 Health. Killing a minion heals the owner and the nearest allied champion for 40 Health and grants them kill Gold.<br><br>These effects require a nearby allied champion. Recharges every 60 seconds. Max 2 charges. <br><br><groupLimit>Limited to 1 Gold Income item<\/groupLimit>",
         "name": "Relic Shield",
         "group": "GoldBase"
      },
      "1037": {
         "tags": ["Damage"],
         "id": 1037,
         "sanitizedDescription": "+25 Attack Damage",
         "plaintext": "Moderately increases Attack Damage",
         "description": "<stats>+25 Attack Damage<\/stats>",
         "name": "Pickaxe"
      },
      "1036": {
         "tags": [
            "Damage",
            "Lane"
         ],
         "id": 1036,
         "sanitizedDescription": "+10 Attack Damage",
         "plaintext": "Slightly increases Attack Damage",
         "description": "<stats>+10 Attack Damage<\/stats>",
         "name": "Long Sword"
      },
      "1039": {
         "tags": [
            "Damage",
            "HealthRegen",
            "Jungle",
            "ManaRegen",
            "OnHit"
         ],
         "id": 1039,
         "sanitizedDescription": "+15 Bonus Gold per Large Monster Kill Passive - Jungler: Deal 30 magic damage on hit to monsters over 2 seconds and gain 7 Health and 4 Mana per second while under attack from neutral monsters. Limited to 1 Jungle item",
         "plaintext": "Increases combat power against neutral monsters",
         "description": "<stats>+15 Bonus Gold per Large Monster Kill<\/stats><br><passive>Passive - Jungler:<\/passive> Deal 30 magic damage on hit to monsters over 2 seconds and gain 7 Health and 4 Mana per second while under attack from neutral monsters.<br><br><groupLimit>Limited to 1 Jungle item<\/groupLimit>",
         "name": "Hunter's Machete",
         "group": "JungleItems"
      },
      "1038": {
         "tags": ["Damage"],
         "id": 1038,
         "sanitizedDescription": "+50 Attack Damage",
         "plaintext": "Greatly increases Attack Damage",
         "description": "<stats>+50 Attack Damage<\/stats>",
         "name": "B. F. Sword"
      },
      "3187": {
         "tags": [
            "Active",
            "Armor",
            "CooldownReduction",
            "Health",
            "Mana",
            "Stealth",
            "Vision"
         ],
         "id": 3187,
         "sanitizedDescription": "+225 Health +250 Mana +25 Armor +20% Cooldown Reduction UNIQUE Passive - Trap Detection: Nearby stealthed enemy traps are revealed. UNIQUE Active - Hunter's Sight: A stealth-detecting mist grants vision in the target area for 5 seconds, revealing enemy champions that enter for 3 seconds (60 second cooldown).",
         "plaintext": "Activate to reveal a nearby area of the map",
         "description": "<stats>+225 Health<br>+250 Mana<br>+25 Armor<br>+20% Cooldown Reduction<\/stats><br><br><unique>UNIQUE Passive - Trap Detection:<\/unique> Nearby stealthed enemy traps are revealed.<br><active>UNIQUE Active - Hunter's Sight:<\/active> A stealth-detecting mist grants vision in the target area for 5 seconds, revealing enemy champions that enter for 3 seconds (60 second cooldown).",
         "name": "Hextech Sweeper"
      },
      "1339": {
          "tags": ["Boots"],
         "id": 1339,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Teleport Active. UNIQUE Active - Teleport: Teleport to target allied object (240s CD) (60s CD on purchase)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Teleport Active.<br><br><unique>UNIQUE Active - Teleport:<\/unique> Teleport to target allied object (240s CD) (60s CD on purchase)",
         "name": "Enchantment: Teleport",
         "group": "BootsTeleport"
      },
      "1042": {
         "tags": ["AttackSpeed"],
         "id": 1042,
         "sanitizedDescription": "+15% Attack Speed",
         "plaintext": "Slightly increases Attack Speed",
         "description": "<stats>+15% Attack Speed<\/stats>",
         "name": "Dagger"
      },
      "1043": {
         "tags": ["AttackSpeed"],
         "id": 1043,
         "sanitizedDescription": "+30% Attack Speed UNIQUE Passive: Basic attacks deal an additional 10 physical damage on hit.",
         "plaintext": "Greatly increases Attack Speed",
         "description": "<stats>+30% Attack Speed<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Basic attacks deal an additional 10 physical damage on hit.",
         "name": "Recurve Bow"
      },
      "3184": {
         "tags": [
            "Active",
            "Damage",
            "Health",
            "NonbootsMovement",
            "Slow"
         ],
         "id": 3184,
         "sanitizedDescription": "+275 Health +55 Attack Damage UNIQUE Passive - Rage: Basic attacks grant 20 Movement Speed for 2 seconds on hit. Kills grant 60 Movement Speed for 2 seconds. This Movement Speed bonus is halved for ranged champions. UNIQUE Active: For the next 5 seconds, basic attacks reduce the target's Movement Speed by 30% and deal 80 true damage over 2.5 seconds on hit (60 second cooldown). (Unique Passives with the same name don't stack.)",
         "plaintext": "Attacks and kills give a small burst of speed, activate to slow enemies",
         "description": "<stats>+275 Health<br>+55 Attack Damage<\/stats><br><br><unique>UNIQUE Passive - Rage:<\/unique> Basic attacks grant 20 Movement Speed for 2 seconds on hit. Kills grant 60 Movement Speed for 2 seconds. This Movement Speed bonus is halved for ranged champions.<br><active>UNIQUE Active:<\/active> For the next 5 seconds, basic attacks reduce the target's Movement Speed by 30% and deal 80 true damage over 2.5 seconds on hit (60 second cooldown).<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Entropy"
      },
      "3185": {
         "tags": [
            "Active",
            "CriticalStrike",
            "Damage",
            "OnHit",
            "Stealth",
            "Vision"
         ],
         "id": 3185,
         "sanitizedDescription": "+30 Attack Damage +30% Critical Strike Chance UNIQUE Passive: Critical Strikes cause enemies to bleed for an additional 90% of bonus Attack Damage as magic damage over 3 seconds and reveal them for the duration. UNIQUE Passive - Trap Detection: Nearby stealthed enemy traps are revealed. UNIQUE Active - Hunter's Sight: A stealth-detecting mist grants vision in the target area for 5 seconds, revealing enemy champions that enter for 3 seconds (60 second cooldown). (Unique Passives with the same name don't stack.)",
         "plaintext": "Critical Strikes cause your target to bleed and be revealed",
         "description": "<stats>+30 Attack Damage<br>+30% Critical Strike Chance<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Critical Strikes cause enemies to bleed for an additional 90% of bonus Attack Damage as magic damage over 3 seconds and reveal them for the duration.<br><unique>UNIQUE Passive - Trap Detection:<\/unique> Nearby stealthed enemy traps are revealed.<br><active>UNIQUE Active - Hunter's Sight:<\/active> A stealth-detecting mist grants vision in the target area for 5 seconds, revealing enemy champions that enter for 3 seconds (60 second cooldown).<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "The Lightbringer"
      },
      "1335": {
          "tags": ["Boots"],
         "id": 1335,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Teleport Active. UNIQUE Active - Teleport: Teleport to target allied object (240s CD) (60s CD on purchase)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Teleport Active.<br><br><unique>UNIQUE Active - Teleport:<\/unique> Teleport to target allied object (240s CD) (60s CD on purchase)",
         "name": "Enchantment: Teleport",
         "group": "BootsTeleport"
      },
      "1336": {
          "tags": ["Boots"],
         "id": 1336,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Teleport Active. UNIQUE Active - Teleport: Teleport to target allied object (240s CD) (60s CD on purchase)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Teleport Active.<br><br><unique>UNIQUE Active - Teleport:<\/unique> Teleport to target allied object (240s CD) (60s CD on purchase)",
         "name": "Enchantment: Teleport",
         "group": "BootsTeleport"
      },
      "3040": {
         "tags": ["Active"],
         "id": 3040,
         "sanitizedDescription": "+80 Ability Power +1000 Mana +50% Base Mana Regen UNIQUE Passive - Insight: Grants Ability Power equal to 3% of maximum Mana. UNIQUE Active - Mana Shield: Consumes 20% of current Mana to grant a shield for 3 seconds that absorbs damage equal to 150 plus the amount of Mana consumed (120 second cooldown). (Unique Passives with the same name don't stack.)",
         "description": "<stats>+80 Ability Power<br><mana>+1000 Mana<br>+50% Base Mana Regen <\/mana><\/stats><br><br><mana><unique>UNIQUE Passive - Insight:<\/unique> Grants Ability Power equal to 3% of maximum Mana.<\/mana><br><active>UNIQUE Active - Mana Shield:<\/active> Consumes 20% of current Mana to grant a shield for 3 seconds that absorbs damage equal to 150 plus the amount of Mana consumed (120 second cooldown).<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Seraph's Embrace"
      },
      "1337": {
          "tags": ["Boots"],
         "id": 1337,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Teleport Active. UNIQUE Active - Teleport: Teleport to target allied object (240s CD) (60s CD on purchase)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Teleport Active.<br><br><unique>UNIQUE Active - Teleport:<\/unique> Teleport to target allied object (240s CD) (60s CD on purchase)",
         "name": "Enchantment: Teleport",
         "group": "BootsTeleport"
      },
      "3041": {
         "tags": ["SpellDamage"],
         "id": 3041,
         "sanitizedDescription": "+20 Ability Power UNIQUE Passive: Grants +8 Ability Power per stack and 5 stacks upon first purchase. Grants 2 stacks for a kill or 1 stack for an assist (max 20 stacks). Half of the stacks are lost upon death. At 20 stacks, grants +15% Cooldown Reduction.",
         "plaintext": "Grants Ability Power for kills and assists",
         "description": "<stats>+20 Ability Power  <\/stats><br><br><unique>UNIQUE Passive:<\/unique> Grants +8 Ability Power per stack and 5 stacks upon first purchase. Grants 2 stacks for a kill or 1 stack for an assist (max 20 stacks). Half of the stacks are lost upon death. At 20 stacks, grants +15% Cooldown Reduction.",
         "name": "Mejai's Soulstealer"
      },
      "3180": {
         "tags": [
            "Active",
            "Health",
            "Mana",
            "SpellBlock"
         ],
         "id": 3180,
         "sanitizedDescription": "+350 Health +350 Mana +50 Magic Resist UNIQUE Passive: Reduces and stores 10% of magic damage received. UNIQUE Active: Deals 200 + (stored magic) (max 400) magic damage to nearby enemy units (90 second cooldown).",
         "plaintext": "Improves defense, activate for area magic damage",
         "description": "<stats>+350 Health<br>+350 Mana<br>+50 Magic Resist<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Reduces and stores 10% of magic damage received. <br><active>UNIQUE Active:<\/active> Deals 200 + (stored magic) (max 400) magic damage to nearby enemy units (90 second cooldown).",
         "name": "Odyn's Veil"
      },
      "1338": {
          "tags": ["Boots"],
         "id": 1338,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Teleport Active. UNIQUE Active - Teleport: Teleport to target allied object (240s CD) (60s CD on purchase)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Teleport Active.<br><br><unique>UNIQUE Active - Teleport:<\/unique> Teleport to target allied object (240s CD) (60s CD on purchase)",
         "name": "Enchantment: Teleport",
         "group": "BootsTeleport"
      },
      "3042": {
         "tags": ["OnHit"],
         "id": 3042,
         "sanitizedDescription": "+25 Attack Damage +1000 Mana +25% Base Mana Regen UNIQUE Passive - Awe: Grants bonus Attack Damage equal to 2% of maximum Mana. UNIQUE Toggle: Single target spells and attacks (on hit) consume 3% of current Mana to deal bonus physical damage equal to twice the amount of Mana consumed. (Unique Passives with the same name don't stack.)",
         "description": "<stats>+25 Attack Damage<br><mana>+1000 Mana<br>+25% Base Mana Regen <\/mana><\/stats><br><br><mana><unique>UNIQUE Passive - Awe:<\/unique> Grants bonus Attack Damage equal to 2% of maximum Mana.<br><unique>UNIQUE Toggle:<\/unique> Single target spells and attacks (on hit) consume 3% of current Mana to deal bonus physical damage equal to twice the amount of Mana consumed.<\/mana><br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Muramana"
      },
      "3181": {
         "tags": [
            "Damage",
            "LifeSteal"
         ],
         "id": 3181,
         "sanitizedDescription": "+45 Attack Damage +10% Life Steal UNIQUE Passive: Basic attacks grant +6 Attack Damage and +1% Life Steal for 8 seconds on hit (effect stacks up to 5 times).",
         "plaintext": "Greatly increases Attack Damage and Life Steal",
         "description": "<stats>+45 Attack Damage<br>+10% Life Steal<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Basic attacks grant +6 Attack Damage and +1% Life Steal for 8 seconds on hit (effect stacks up to 5 times).",
         "name": "Sanguine Blade"
      },
      "1331": {
          "tags": ["Boots"],
         "id": 1331,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Alacrity bonus. UNIQUE Passive - Alacrity: +20 Movement Speed (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Alacrity bonus. <br><br><unique>UNIQUE Passive - Alacrity:<\/unique> +20 Movement Speed<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Alacrity",
         "group": "BootsAlacrity"
      },
      "3043": {
         "tags": ["OnHit"],
         "id": 3043,
         "sanitizedDescription": "+25 Attack Damage +1000 Mana +25% Base Mana Regen UNIQUE Passive - Awe: Grants bonus Attack Damage equal to 2% of maximum Mana. UNIQUE Toggle: Single target spells and attacks (on hit) consume 3% of current Mana to deal bonus physical damage equal to twice the amount of Mana consumed. (Unique Passives with the same name don't stack.)",
         "description": "<stats>+25 Attack Damage<br><mana>+1000 Mana<br>+25% Base Mana Regen <\/mana><\/stats><br><br><mana><unique>UNIQUE Passive - Awe:<\/unique> Grants bonus Attack Damage equal to 2% of maximum Mana.<br><unique>UNIQUE Toggle:<\/unique> Single target spells and attacks (on hit) consume 3% of current Mana to deal bonus physical damage equal to twice the amount of Mana consumed.<\/mana><br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Muramana"
      },
      "1332": {
          "tags": ["Boots"],
         "id": 1332,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Captain bonus. UNIQUE Passive - Captain: Grants +10% Movement Speed to nearby approaching allied champions. (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Captain bonus.<br><br><unique>UNIQUE Passive - Captain:<\/unique> Grants +10% Movement Speed to nearby approaching allied champions.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Captain",
         "group": "BootsCaptain"
      },
      "3044": {
         "tags": [
            "Damage",
            "Health",
            "NonbootsMovement",
            "OnHit"
         ],
         "id": 3044,
         "sanitizedDescription": "+200 Health +20 Attack Damage UNIQUE Passive - Rage: Basic attacks grant 20 Movement Speed for 2 seconds. Kills grant 60 Movement Speed instead. This Movement Speed bonus is halved for ranged champions. (Unique Passives with the same name don't stack.)",
         "plaintext": "Attacks and kills give a small burst of speed",
         "description": "<stats>+200 Health<br>+20 Attack Damage<\/stats><br><br><unique>UNIQUE Passive - Rage:<\/unique> Basic attacks grant 20 Movement Speed for 2 seconds. Kills grant 60 Movement Speed instead. This Movement Speed bonus is halved for ranged champions.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Phage"
      },
      "1333": {
          "tags": ["Boots"],
         "id": 1333,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Distortion bonus. UNIQUE Passive - Distortion: Teleport, Flash, and Ghost summoner spell cooldowns are reduced by 20% and are granted additional mobility: Ghost: Grants 40% Movement Speed from 27%. Flash: 20% Movement Speed bonus for 1 second after cast. Teleport: 30% Movement Speed bonus for 3 seconds after use. (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Distortion bonus.<br><br><unique>UNIQUE Passive - Distortion:<\/unique> Teleport, Flash, and Ghost summoner spell cooldowns are reduced by 20% and are granted additional mobility: <br><br><font color='#FFDD00'>Ghost:<\/font> Grants 40% Movement Speed from 27%.<br><font color='#FFDD00'>Flash:<\/font> 20% Movement Speed bonus for 1 second after cast.<br><font color='#FFDD00'>Teleport:<\/font> 30% Movement Speed bonus for 3 seconds after use.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Distortion",
         "group": "BootsDistortion"
      },
      "1334": {
          "tags": ["Boots"],
         "id": 1334,
         "sanitizedDescription": "Limited to 1 of each enchantment type. Enchants boots to have Homeguard bonus. UNIQUE Passive - Homeguard: Visiting the shop vastly increases Health and Mana Regeneration and grants 200% bonus Movement Speed that decays over 8 seconds. Bonus Movement Speed and regeneration are disabled for 6 seconds upon dealing or taking damage. (Unique Passives with the same name don't stack.)",
         "description": "<groupLimit>Limited to 1 of each enchantment type.<\/groupLimit><br>Enchants boots to have Homeguard bonus.<br><br><unique>UNIQUE Passive - Homeguard:<\/unique> Visiting the shop vastly increases Health and Mana Regeneration and grants 200% bonus Movement Speed that decays over 8 seconds. Bonus Movement Speed and regeneration are disabled for 6 seconds upon dealing or taking damage.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Enchantment: Homeguard",
         "group": "BootsHomeguard"
      },
      "3046": {
         "tags": [
            "AttackSpeed",
            "CriticalStrike",
            "NonbootsMovement"
         ],
         "id": 3046,
         "sanitizedDescription": "+50% Attack Speed +35% Critical Strike Chance +5% Movement Speed UNIQUE Passive: Champion can move through units.",
         "plaintext": "Champion attacks faster and can move through units",
         "description": "<stats>+50% Attack Speed<br>+35% Critical Strike Chance<br>+5% Movement Speed<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Champion can move through units.",
         "name": "Phantom Dancer"
      },
      "3901": {
          "tags": ["Ganglank","ChampionSpecific"],
         "id": 3901,
         "sanitizedDescription": "Requires 500 Silver Serpents. UNIQUE Passive: Cannon Barrage fires at an increasing rate over time (additional 6 waves over the duration).",
         "plaintext": "Cannon Barrage gains extra waves",
         "description": "Requires 500 Silver Serpents.<br><br><unique>UNIQUE Passive:<\/unique> Cannon Barrage fires at an increasing rate over time (additional 6 waves over the duration).",
         "name": "Fire at Will",
         "group": "GangplankRUpgrade01"
      },
      "3069": {
         "tags": [
            "Active",
            "CooldownReduction",
            "GoldPer",
            "HealthRegen",
            "ManaRegen",
            "NonbootsMovement"
         ],
         "id": 3069,
         "sanitizedDescription": "+100% Base Health Regen +100% Base Mana Regen +20 Movement Speed +10% Cooldown Reduction +2 Gold per 10 seconds UNIQUE Passive - Favor: Being near a minion death without dealing the killing blow grants 4 Gold and 10 Health. UNIQUE Active: Grants nearby allies +40% Movement Speed for 3 seconds (40 second cooldown). Limited to 1 Gold Income item ''Praise the sun.'' - Historian Shurelya, 22 September, 25 CLE",
         "plaintext": "Increases Health / Mana Regeneration and Cooldown Reduction. Activate to speed up nearby allies.",
         "description": "<stats>+100% Base Health Regen <br><mana>+100% Base Mana Regen <br><\/mana>+20 Movement Speed<br>+10% Cooldown Reduction<br>+2 Gold per 10 seconds<\/stats><br><br><unique>UNIQUE Passive - Favor:<\/unique> Being near a minion death without dealing the killing blow grants 4 Gold and 10 Health.<br><active>UNIQUE Active:<\/active> Grants nearby allies +40% Movement Speed for 3 seconds (40 second cooldown).<br><br><groupLimit>Limited to 1 Gold Income item<\/groupLimit><br><br><i><font color='#447777'>''Praise the sun.'' - Historian Shurelya, 22 September, 25 CLE<\/font><\/i><br><br>",
         "name": "Talisman of Ascension",
         "group": "GoldBase"
      },
      "3903": {
          "tags": ["Ganglank","ChampionSpecific"],
         "id": 3903,
         "sanitizedDescription": "Requires 500 Silver Serpents. UNIQUE Passive: Allies in the Cannon Barrage gain 30% Movement Speed for 2 seconds.",
         "plaintext": "Cannon Barrage hastes allies",
         "description": "Requires 500 Silver Serpents.<br><br><unique>UNIQUE Passive:<\/unique> Allies in the Cannon Barrage gain 30% Movement Speed for 2 seconds.",
         "name": "Raise Morale",
         "group": "GangplankRUpgrade03"
      },
      "1029": {
         "tags": ["Armor"],
         "id": 1029,
         "sanitizedDescription": "+15 Armor",
         "plaintext": "Slightly increases Armor",
         "description": "<stats>+15 Armor<\/stats>",
         "name": "Cloth Armor"
      },
      "3902": {
          "tags": ["Ganglank","ChampionSpecific"],
         "id": 3902,
         "sanitizedDescription": "Requires 500 Silver Serpents. UNIQUE Passive: Cannon Barrage additionally fires a mega-cannonball at center of the Barrage, dealing 300% true damage and slowing them by 60% for 1.5 seconds.",
         "plaintext": "Cannon Barrage fires a mega-cannonball",
         "description": "Requires 500 Silver Serpents.<br><br><unique>UNIQUE Passive:<\/unique>  Cannon Barrage additionally fires a mega-cannonball at center of the Barrage, dealing 300% true damage and slowing them by 60% for 1.5 seconds. ",
         "name": "Death's Daughter",
         "group": "GangplankRUpgrade02"
      },
      "1028": {
         "tags": ["Health"],
         "id": 1028,
         "sanitizedDescription": "+150 Health",
         "plaintext": "Increases Health",
         "description": "<stats>+150 Health<\/stats>",
         "name": "Ruby Crystal"
      },
      "1027": {
         "tags": ["Mana"],
         "id": 1027,
         "sanitizedDescription": "+200 Mana",
         "plaintext": "Increases Mana",
         "description": "<stats><mana>+200 Mana<\/mana><\/stats>",
         "name": "Sapphire Crystal"
      },
      "1026": {
         "tags": ["SpellDamage"],
         "id": 1026,
         "sanitizedDescription": "+40 Ability Power",
         "plaintext": "Moderately increases Ability Power",
         "description": "<stats>+40 Ability Power<\/stats>",
         "name": "Blasting Wand"
      },
      "3460": {
         "tags": [
            "Active",
            "Trinket"
         ],
         "id": 3460,
         "sanitizedDescription": "Active: Use this trinket to teleport to one of the battle platforms. Can only be used from the summoning platform. ''It is at this magical precipice where a champion is dismantled, reforged, and empowered.''",
         "description": "<unique>Active:<\/unique> Use this trinket to teleport to one of the battle platforms. Can only be used from the summoning platform.<br><br><i><font color='#FDD017'>''It is at this magical precipice where a champion is dismantled, reforged, and empowered.''<\/font><\/i>",
         "name": "Golden Transcendence",
         "group": "RelicBase"
      },
      "3070": {
         "tags": [
            "Mana",
            "ManaRegen"
         ],
         "id": 3070,
         "sanitizedDescription": "+250 Mana +25% Base Mana Regen UNIQUE Passive - Mana Charge: Grants 4 maximum Mana on spell cast or Mana expenditure (up to 2 times per 8 seconds). Grants 1 maximum Mana every 8 seconds. Caps at +750 Mana. (Unique Passives with the same name don't stack.)",
         "plaintext": "Increases maximum Mana as Mana is spent",
         "description": "<stats><mana>+250 Mana<br>+25% Base Mana Regen <\/mana><\/stats><br><br><mana><unique>UNIQUE Passive - Mana Charge:<\/unique> Grants 4 maximum Mana on spell cast or Mana expenditure (up to 2 times per 8 seconds). Grants 1 maximum Mana every 8 seconds.<br><br>Caps at +750 Mana.<\/mana><br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Tear of the Goddess"
      },
      "1033": {
         "tags": ["SpellBlock"],
         "id": 1033,
         "sanitizedDescription": "+25 Magic Resist",
         "plaintext": "Slightly increases Magic Resist",
         "description": "<stats>+25 Magic Resist<\/stats>",
         "name": "Null-Magic Mantle"
      },
      "3071": {
         "tags": [
            "ArmorPenetration",
            "CooldownReduction",
            "Damage",
            "Health",
            "NonbootsMovement",
            "OnHit"
         ],
         "id": 3071,
         "sanitizedDescription": "+400 Health +40 Attack Damage +20% Cooldown Reduction UNIQUE Passive: Dealing physical damage to an enemy champion Cleaves them, reducing their Armor by 5% for 6 seconds (stacks up to 6 times, up to 30%). UNIQUE Passive - Rage: Dealing physical damage grants 20 movement speed for 2 seconds. Assists on Cleaved enemy champions or kills on any unit grant 60 movement speed for 2 seconds instead. This Movement Speed is halved for ranged champions. (Unique Passives with the same name don't stack.)",
         "plaintext": "Dealing physical damage to enemy champions reduces their Armor",
         "description": "<stats>+400 Health<br>+40 Attack Damage<br>+20% Cooldown Reduction<\/stats><br><br><passive>UNIQUE Passive:<\/passive> Dealing physical damage to an enemy champion Cleaves them, reducing their Armor by 5% for 6 seconds (stacks up to 6 times, up to 30%).<br><unique>UNIQUE Passive - Rage:<\/unique> Dealing physical damage grants 20 movement speed for 2 seconds. Assists on Cleaved enemy champions or kills on any unit grant 60 movement speed for 2 seconds instead. This Movement Speed is halved for ranged champions.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "The Black Cleaver"
      },
      "3174": {
         "tags": [
            "CooldownReduction",
            "ManaRegen",
            "SpellBlock",
            "SpellDamage"
         ],
         "id": 3174,
         "sanitizedDescription": "+60 Ability Power +25 Magic Resist +20% Cooldown Reduction +100% Base Mana Regen UNIQUE Passive: Restores 30% of maximum Mana on kill or assist. UNIQUE Passive - Mana Font: Restores 2% of missing Mana every 5 seconds. (Unique Passives with the same name do not stack.)",
         "plaintext": "Restores maximum Mana on kill or assist",
         "description": "<stats>+60 Ability Power<br>+25 Magic Resist<br>+20% Cooldown Reduction<br><mana>+100% Base Mana Regen <\/mana><\/stats><br><br><mana><unique>UNIQUE Passive:<\/unique> Restores 30% of maximum Mana on kill or assist.<br><unique>UNIQUE Passive - Mana Font:<\/unique> Restores 2% of missing Mana every 5 seconds.<br><\/mana><br><i>(Unique Passives with the same name do not stack.)<\/i>",
         "name": "Athene's Unholy Grail"
      },
      "3751": {
         "tags": ["Health"],
         "id": 3751,
         "sanitizedDescription": "+300 Health UNIQUE Passive - Immolate: Deals 5 (+1 per champion level) magic damage per second to nearby enemies. Deals 50% bonus damage to minions and monsters.",
         "plaintext": "Grants Health and Immolate Aura",
         "description": "<stats>+300 Health  <\/stats><br><br><unique>UNIQUE Passive - Immolate:<\/unique> Deals 5 (+1 per champion level) magic damage per second to nearby enemies. Deals 50% bonus damage to minions and monsters.",
         "name": "Bami's Cinder"
      },
      "1031": {
         "tags": ["Armor"],
         "id": 1031,
         "sanitizedDescription": "+40 Armor",
         "plaintext": "Greatly increases Armor",
         "description": "<stats>+40 Armor<\/stats>",
         "name": "Chain Vest"
      },
      "3172": {
         "tags": [
            "AttackSpeed",
            "CooldownReduction",
            "Damage",
            "NonbootsMovement",
            "Tenacity"
         ],
         "id": 3172,
         "sanitizedDescription": "+25 Attack Damage +50% Attack Speed +10% Movement Speed +10% Cooldown Reduction UNIQUE Passive - Tenacity: Reduces the duration of stuns, slows, taunts, fears, silences, blinds, polymorphs, and immobilizes by 35%. (Unique Passives with the same name do not stack.)",
         "plaintext": "Improves offense and reduces duration of disabling effects",
         "description": "<stats>+25 Attack Damage<br>+50% Attack Speed<br>+10% Movement Speed<br>+10% Cooldown Reduction<\/stats><br><br><unique>UNIQUE Passive - Tenacity:<\/unique> Reduces the duration of stuns, slows, taunts, fears, silences, blinds, polymorphs, and immobilizes by 35%.<br><br><i>(Unique Passives with the same name do not stack.)<\/i>",
         "name": "Zephyr"
      },
      "3078": {
         "tags": [
            "AttackSpeed",
            "CriticalStrike",
            "Damage",
            "Health",
            "Mana",
            "NonbootsMovement",
            "OnHit",
            "SpellDamage"
         ],
         "id": 3078,
         "sanitizedDescription": "+30 Attack Damage +30 Ability Power +30% Attack Speed +10% Critical Strike Chance +8% Movement Speed +250 Health +200 Mana UNIQUE Passive - Rage: Basic attacks grant 20 Movement Speed for 2 seconds. Kills grant 60 Movement Speed instead. This Movement Speed bonus is halved for ranged champions. UNIQUE Passive - Spellblade: After using an ability, the next basic attack deals bonus physical damage equal to 200% of base Attack Damage on hit (1.5 second cooldown). (Unique Passives with the same name don't stack.)",
         "plaintext": "Tons of Damage",
         "description": "<stats>+30 Attack Damage<br>+30 Ability Power<br>+30% Attack Speed<br>+10% Critical Strike Chance<br>+8% Movement Speed<br>+250 Health<br><mana>+200 Mana<\/mana><\/stats><br><br><unique>UNIQUE Passive - Rage:<\/unique> Basic attacks grant 20 Movement Speed for 2 seconds. Kills grant 60 Movement Speed instead. This Movement Speed bonus is halved for ranged champions.<br><unique>UNIQUE Passive - Spellblade:<\/unique> After using an ability, the next basic attack deals bonus physical damage equal to 200% of base Attack Damage on hit (1.5 second cooldown).<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Trinity Force"
      },
      "3077": {
         "tags": [
            "Active",
            "Damage",
            "HealthRegen",
            "OnHit"
         ],
         "id": 3077,
         "sanitizedDescription": "+40 Attack Damage +100% Base Health Regen UNIQUE Passive - Cleave: Basic attacks deal 20% to 60% of total Attack Damage as bonus physical damage to enemies near the target on hit (enemies closest to the target take the most damage). UNIQUE Active - Crescent: Deals 60% to 100% of total Attack Damage as physical damage to nearby enemy units (enemies closest to the target take the most damage) (10 second cooldown). (Unique Passives with the same name don't stack.)",
         "plaintext": "Melee attacks hit nearby enemies",
         "description": "<stats>+40 Attack Damage<br>+100% Base Health Regen <\/stats><br><br><unique>UNIQUE Passive - Cleave:<\/unique> Basic attacks deal 20% to 60% of total Attack Damage as bonus physical damage to enemies near the target on hit (enemies closest to the target take the most damage).<br><active>UNIQUE Active - Crescent:<\/active> Deals 60% to 100% of total Attack Damage as physical damage to nearby enemy units (enemies closest to the target take the most damage) (10 second cooldown).<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Tiamat (Melee Only)"
      },
      "3074": {
         "tags": [
            "Active",
            "Damage",
            "HealthRegen",
            "LifeSteal",
            "OnHit"
         ],
         "id": 3074,
         "sanitizedDescription": "+75 Attack Damage +100% Base Health Regen +12% Life Steal Passive: Life Steal applies to damage dealt by this item. UNIQUE Passive - Cleave: Basic attacks deal 20% to 60% of total Attack Damage as bonus physical damage to enemies near the target on hit (enemies closest to the target take the most damage). UNIQUE Active - Crescent: Deals 60% to 100% of total Attack Damage as physical damage to nearby enemy units (closest enemies take the most damage) (10 second cooldown). (Unique Passives with the same name don't stack.)",
         "plaintext": "Melee attacks hit nearby enemies, dealing damage and restoring Health",
         "description": "<stats>+75 Attack Damage<br>+100% Base Health Regen <br>+12% Life Steal<\/stats><br><br><passive>Passive:<\/passive> Life Steal applies to damage dealt by this item.<br><unique>UNIQUE Passive - Cleave:<\/unique> Basic attacks deal 20% to 60% of total Attack Damage as bonus physical damage to enemies near the target on hit (enemies closest to the target take the most damage).<br><active>UNIQUE Active - Crescent:<\/active> Deals 60% to 100% of total Attack Damage as physical damage to nearby enemy units (closest enemies take the most damage) (10 second cooldown).<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Ravenous Hydra (Melee Only)"
      },
      "3075": {
         "tags": ["Armor"],
         "id": 3075,
         "sanitizedDescription": "+100 Armor UNIQUE Passive: Upon being hit by a basic attack, reflects magic damage back to the attacker equal to 25% of your bonus Armor plus 15% of the incoming damage. (Bonus Armor is Armor from Items, Buffs, Runes and Masteries.) (Reflect damage is calculated based on damage taken before being reduced by Armor.)",
         "plaintext": "Returns damage taken from basic attacks as magic damage",
         "description": "<stats>+100 Armor  <\/stats><br><br><unique>UNIQUE Passive:<\/unique> Upon being hit by a basic attack, reflects magic damage back to the attacker equal to 25% of your bonus Armor plus 15% of the incoming damage.<br><br><i>(Bonus Armor is Armor from Items, Buffs, Runes and Masteries.)<\/i><br><i>(Reflect damage is calculated based on damage taken before being reduced by Armor.)<\/i>",
         "name": "Thornmail"
      },
      "3170": {
         "tags": [
            "Armor",
            "SpellBlock",
            "SpellDamage",
            "Tenacity"
         ],
         "id": 3170,
         "sanitizedDescription": "+50 Ability Power +50 Armor +50 Magic Resist UNIQUE Passive - Tenacity: Reduces the duration of stuns, slows, taunts, fears, silences, blinds, polymorphs, and immobilizes by 35%. (Unique Passives with the same name do not stack.)",
         "plaintext": "Improves defense and reduces duration of disabling effects",
         "description": "<stats>+50 Ability Power<br>+50 Armor<br>+50 Magic Resist<\/stats><br><br><unique>UNIQUE Passive - Tenacity:<\/unique> Reduces the duration of stuns, slows, taunts, fears, silences, blinds, polymorphs, and immobilizes by 35%.<br><br><i>(Unique Passives with the same name do not stack.)<\/i>",
         "name": "Moonflair Spellblade"
      },
      "3072": {
         "tags": [
            "Damage",
            "LifeSteal"
         ],
         "id": 3072,
         "sanitizedDescription": "+80 Attack Damage UNIQUE Passive: +20% Life Steal UNIQUE Passive: Your basic attacks can now overheal you. Excess life is stored as a shield that can block 50-350 damage, based on champion level. This shield decays slowly if you haven't dealt or taken damage in the last 25 seconds.",
         "plaintext": "Grants Attack Damage, Life Steal and Life Steal now overheals",
         "description": "<stats>+80 Attack Damage<\/stats><br><br><passive>UNIQUE Passive:<\/passive> +20% Life Steal<br><passive>UNIQUE Passive:<\/passive> Your basic attacks can now overheal you. Excess life is stored as a shield that can block 50-350 damage, based on champion level.<br><br>This shield decays slowly if you haven't dealt or taken damage in the last 25 seconds.",
         "name": "The Bloodthirster"
      },
      "3073": {
         "tags": [
            "Mana",
            "ManaRegen"
         ],
         "id": 3073,
         "sanitizedDescription": "+250 Mana +25% Base Mana Regen UNIQUE Passive - Mana Charge: Grants 5 maximum Mana on spell cast or Mana expenditure (up to 2 times per 6 seconds). Grants 1 maximum Mana every 6 seconds. Caps at +750 Mana. (Unique Passives with the same name don't stack.)",
         "plaintext": "Increases maximum Mana as Mana is spent",
         "description": "<stats><mana>+250 Mana<br>+25% Base Mana Regen <\/stats><br><br><mana><unique>UNIQUE Passive - Mana Charge:<\/unique> Grants 5 maximum Mana on spell cast or Mana expenditure (up to 2 times per 6 seconds). Grants 1 maximum Mana every 6 seconds.<br><br>Caps at +750 Mana.<\/mana><br><br><i>(Unique Passives with the same name don't stack.)<\/i><\/mana>",
         "name": "Tear of the Goddess (Crystal Scar)"
      },
      "2041": {
         "tags": [
            "Active",
            "Consumable",
            "HealthRegen",
            "Lane",
            "ManaRegen"
         ],
         "id": 2041,
         "sanitizedDescription": "UNIQUE Passive: Holds 3 charges and refills upon visiting the shop. UNIQUE Active: Consumes a charge to restore 120 Health and 60 Mana over 12 seconds.",
         "plaintext": "Restores Health and Mana over time, refills at shop",
         "description": "<unique>UNIQUE Passive:<\/unique> Holds 3 charges and refills upon visiting the shop.<br><active>UNIQUE Active:<\/active> Consumes a charge to restore 120 Health and 60 Mana over 12 seconds.",
         "name": "Crystalline Flask"
      },
      "2044": {
         "tags": [
            "Consumable",
            "Lane",
            "Vision"
         ],
         "id": 2044,
         "sanitizedDescription": "Can only carry 3 Stealth Wards in inventory. Click to Consume: Places an invisible ward that reveals the surrounding area for 3 minutes. Limit 3 Stealth Wards on the map per player.",
         "plaintext": "Use to temporarily provide vision in an area",
         "description": "<groupLimit>Can only carry 3 Stealth Wards in inventory.<\/groupLimit><br><br><consumable>Click to Consume:<\/consumable> Places an invisible ward that reveals the surrounding area for 3 minutes. Limit 3 <font color='#BBFFFF'>Stealth Wards<\/font> on the map per player.",
         "name": "Stealth Ward",
         "group": "GreenWards"
      },
      "2045": {
         "tags": [
            "Active",
            "Health",
            "Vision"
         ],
         "id": 2045,
         "sanitizedDescription": "+400 Health UNIQUE Passive - Ward Refresh: Holds 5 charges and refills upon visiting the shop. UNIQUE Active - Ghost Ward: Consumes a charge to place a Stealth Ward that reveals the surrounding area for 3 minutes. A player may only have 3 Stealth Wards on the map at one time. (Unique Passives with the same name don't stack.)",
         "plaintext": "Greatly increases Health and provides Stealth Wards over time",
         "description": "<stats>+400 Health<\/stats><br><br><unique>UNIQUE Passive - Ward Refresh:<\/unique> Holds 5 charges and refills upon visiting the shop.<br><active>UNIQUE Active - Ghost Ward:<\/active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward<\/font> that reveals the surrounding area for 3 minutes. A player may only have 3 <font color='#BBFFFF'>Stealth Wards<\/font> on the map at one time.<br><br><i>(Unique Passives with the same name don't stack.)<\/i>",
         "name": "Ruby Sightstone"
      },
      "2043": {
         "tags": [
            "Consumable",
            "Lane",
            "Stealth",
            "Vision"
         ],
         "id": 2043,
         "sanitizedDescription": "Can only carry 2 Vision Wards in inventory. Click to Consume: Places a visible ward that reveals the surrounding area and invisible units in the area until killed. Limit 1 Vision Ward on the map per player. (Revealing a ward in this manner grants a portion of the gold reward when that unit is killed.)",
         "plaintext": "Use to temporarily provide vision and stealth detection in an area",
         "description": "<groupLimit>Can only carry 2 Vision Wards in inventory.<\/groupLimit><br><br><consumable>Click to Consume:<\/consumable> Places a visible ward that reveals the surrounding area and invisible units in the area until killed. Limit 1 <font color='#BBFFFF'>Vision Ward<\/font> on the map per player.<br><br><i>(Revealing a ward in this manner grants a portion of the gold reward when that unit is killed.)<\/i>",
         "name": "Vision Ward",
         "group": "PinkWards"
      },
      "3158": {
         "tags": [
            "Boots",
            "CooldownReduction"
         ],
         "id": 3158,
         "sanitizedDescription": "UNIQUE Passive: +15% Cooldown Reduction UNIQUE Passive - Enhanced Movement: +45 Movement Speed (Unique Passives with the same name don't stack.) ''This item is dedicated in honor of Ionia's victory over Noxus in the Rematch for the Southern Provinces on 10 December, 20 CLE.''",
         "plaintext": "Increases Movement Speed and Cooldown Reduction",
         "description": "<unique>UNIQUE Passive:<\/unique> +15% Cooldown Reduction<br><unique>UNIQUE Passive - Enhanced Movement:<\/unique> +45 Movement Speed<br><br><i>(Unique Passives with the same name don't stack.)<\/i><br><br><i><font color='#FDD017'>''This item is dedicated in honor of Ionia's victory over Noxus in the Rematch for the Southern Provinces on 10 December, 20 CLE.''<\/font><\/i>",
         "name": "Ionian Boots of Lucidity"
      },
      "3157": {
         "tags": [
            "Active",
            "Armor",
            "SpellDamage"
         ],
         "id": 3157,
         "sanitizedDescription": "+100 Ability Power +50 Armor UNIQUE Active - Stasis: Champion becomes invulnerable and untargetable for 2.5 seconds, but is unable to move, attack, cast spells, or use items during this time (90 second cooldown).",
         "plaintext": "Activate to become invincible but unable to take actions",
         "description": "<stats>+100 Ability Power<br>+50 Armor  <\/stats><br><br><active>UNIQUE Active - Stasis:<\/active> Champion becomes invulnerable and untargetable for 2.5 seconds, but is unable to move, attack, cast spells, or use items during this time (90 second cooldown).",
         "name": "Zhonya's Hourglass"
      },
      "1018": {
         "tags": ["CriticalStrike"],
         "id": 1018,
         "sanitizedDescription": "+15% Critical Strike Chance",
         "plaintext": "Moderately increases Critical Strike Chance",
         "description": "<stats>+15% Critical Strike Chance<\/stats>",
         "name": "Cloak of Agility"
      },
      "3159": {
         "tags": [
            "Active",
            "AttackSpeed",
            "Damage",
            "GoldPer",
            "OnHit",
            "Stealth",
            "Vision"
         ],
         "id": 3159,
         "sanitizedDescription": "+15 Attack Damage +30% Attack Speed UNIQUE Passive - Maim: Basic attacks against monsters deal 75 bonus magic damage and heal 10 Health on hit. UNIQUE Passive: Gain 30% increased Gold from monsters. UNIQUE Passive - Trap Detection: Nearby stealthed enemy traps are revealed. UNIQUE Active - Hunter's Sight: A stealth-detecting mist grants vision in the target area for 5 seconds, revealing enemy champions that enter for 3 seconds (60 second cooldown).",
         "plaintext": "Kills monsters quickly and gain more gold, activate to reveal a nearby area of the map",
         "description": "<stats>+15 Attack Damage<br>+30% Attack Speed<\/stats><br><br><unique>UNIQUE Passive - Maim:<\/unique> Basic attacks against monsters deal 75 bonus magic damage and heal 10 Health on hit.<br><unique>UNIQUE Passive:<\/unique> Gain 30% increased Gold from monsters.<br><unique>UNIQUE Passive - Trap Detection:<\/unique> Nearby stealthed enemy traps are revealed.<br><active>UNIQUE Active - Hunter's Sight:<\/active> A stealth-detecting mist grants vision in the target area for 5 seconds, revealing enemy champions that enter for 3 seconds (60 second cooldown).",
         "name": "Grez's Spectral Lantern",
         "group": "GoldBase"
      },
      "3060": {
         "tags": [
            "Active",
            "Aura",
            "CooldownReduction",
            "Health",
            "HealthRegen",
            "SpellBlock",
            "SpellDamage"
         ],
         "id": 3060,
         "sanitizedDescription": "+200 Health +100% Base Health Regen +60 Ability Power +20 Magic Resist +10% Cooldown Reduction UNIQUE Aura - Legion: Grants nearby allies +15 Magic Resist. UNIQUE Active - Promote: Greatly increases the power of a lane minion and grants it immunity to magic damage (120 second cooldown). (Unique Auras with the same name do not stack.)",
         "plaintext": "Promotes a siege minion to a more powerful unit",
         "description": "<stats>+200 Health<br>+100% Base Health Regen <br>+60 Ability Power<br>+20 Magic Resist<br>+10% Cooldown Reduction<\/stats><br><br><aura>UNIQUE Aura - Legion:<\/aura> Grants nearby allies +15 Magic Resist.<br><active>UNIQUE Active - Promote:<\/active> Greatly increases the power of a lane minion and grants it immunity to magic damage (120 second cooldown).<br><br><i>(Unique Auras with the same name do not stack.)<\/i>",
         "name": "Banner of Command"
      },
      "3165": {
         "tags": [
            "CooldownReduction",
            "ManaRegen",
            "SpellDamage"
         ],
         "id": 3165,
         "sanitizedDescription": "+80 Ability Power +20% Cooldown Reduction +100% Base Mana Regen UNIQUE Passive: Dealing magic damage to enemy champions below 40% Health inflicts Grievous Wounds for 4 seconds. (Grievous Wounds reduces incoming healing and regeneration effects by 50%.)",
         "plaintext": "Greatly increases Ability Power and Cooldown Reduction",
         "description": "<stats>+80 Ability Power<br>+20% Cooldown Reduction<br><mana>+100% Base Mana Regen <\/mana><\/stats><br><br><unique>UNIQUE Passive:<\/unique> Dealing magic damage to enemy champions below 40% Health inflicts Grievous Wounds for 4 seconds.<br><br><i>(Grievous Wounds reduces incoming healing and regeneration effects by 50%.)<\/i>",
         "name": "Morellonomicon"
      },
      "3065": {
         "tags": [
            "CooldownReduction",
            "Health",
            "HealthRegen",
            "SpellBlock"
         ],
         "id": 3065,
         "sanitizedDescription": "+400 Health +60 Magic Resist +150% Base Health Regen +10% Cooldown Reduction UNIQUE Passive: Increases all healing received by 20%.",
         "plaintext": "Increases Health and healing effects",
         "description": "<stats>+400 Health<br>+60 Magic Resist<br>+150% Base Health Regen <br>+10% Cooldown Reduction<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Increases all healing received by 20%.",
         "name": "Spirit Visage"
      },
      "3067": {
         "tags": [
            "CooldownReduction",
            "Health"
         ],
         "id": 3067,
         "sanitizedDescription": "+200 Health UNIQUE Passive: +10% Cooldown Reduction",
         "plaintext": "Increases Health and Cooldown Reduction",
         "description": "<stats>+200 Health  <\/stats><br><br><unique>UNIQUE Passive:<\/unique> +10% Cooldown Reduction",
         "name": "Kindlegem"
      },
      "3068": {
         "tags": [
            "Armor",
            "Health"
         ],
         "id": 3068,
         "sanitizedDescription": "+450 Health +45 Armor UNIQUE Passive - Immolate: Deals 25 (+1 per champion level) magic damage per second to nearby enemies.",
         "plaintext": "Constantly deals damage to nearby enemies",
         "description": "<stats>+450 Health<br>+45 Armor  <\/stats><br><br><unique>UNIQUE Passive - Immolate:<\/unique> Deals 25 (+1 per champion level) magic damage per second to nearby enemies.",
         "name": "Sunfire Cape"
      }
   };
            
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
            }
            // todo: else - httpService

            return deferred.promise;
        }

        function getMaps() {
            var deferred = $q.defer();

            if (_maps) {
                deferred.resolve(_maps);
            }
            // todo: else - httpService

            return deferred.promise;
        }

        function getModes() {
            var deferred = $q.defer();

            if (_modes) {
                deferred.resolve(_modes);
            }
            // todo: else - httpService

            return deferred.promise;
        }

    }

}(window.angular));
// jshint ignore: end