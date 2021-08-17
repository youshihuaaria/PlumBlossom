chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({
    QIAN1: {
      name: "Qian",
      meaning: "Force",
      image: "./images/1QIAN.png",
      Fortune: "There is a sign of rising status, fame and fortune.",
      Love: "Don't try to be strong with each other, and get rid of the notion of egoism. There are often cases of quarreling opinions.",
      WaitingForSomeone: "He/She will definitely come.",
      LostProperty:
        "It will take a while and it can be found in the northwest.",
      Travel:
        "Better to travel in groups. Not suitable in summer, do not travel north or south, others are acceptable.",
      Exam: "Good results are expected.",
    },

    KUN2: {
      name: "KUN",
      meaning: "Field",
      image: "./images/2KUN.png",
      Fortune:
        "It is not advisable to advance in a hurry in all things. But if you are intoxicated with selfish desires and go against common sense, there will be ruthless disasters.",
      Love: "The man takes the initiative. It is not advisable to take action in a hurry.",
      Turnaround:
        "You must be patient, otherwise it will be difficult to acheive anything.",
      WaitingForSomeone: "Won't come, have to wait some time.",
      LostProperty:
        "It can be found in the southwest, but it is hard to find in the northwest.",
      Travel: "Not suitable. Especially avoid the northeast.",
      Exam: "Little hope to get a desirable result.",
    },

    ZHUN3: {
      name: "ZHUN",
      meaning: "Sprouting",
      image: "./images/3ZHUN.png",
      Fortune:
        "It is advisable to guard rather than advance. Be firm in your will. It is necessary to work step by step to eliminate the difficulties.",
      Love: "Temporarily lost contact, or hinder by bad conditions.",
      Turnaround:
        "Lots of difficulties. You must be patient, but still not optimistic.",
      WaitingForSomeone: "Won't come.",
      SearchingForSomeone: "People who run away are missing and hard to find.",
      LostProperty: "Property can be found if it is lost within a short time.",
      Travel: "Not suitable.",
      Exam: "Not ideal.",
    },

    MENG4: {
      name: "MENG",
      meaning: "Enveloping",
      image: "./images/4MENG.png",
      Fortune:
        "It's not going well at first, so you have to be patient and wait for it to get better. Don't act rashly or vouch for others, otherwise there will be losses. Follow the suggestions of older generations.",
      Love: "This hexagram is a hexagram of wisdom that has not yet been enlightened. It also symbols love left unspoken. The main reason is the lack of courage and determination, which leads to failure.",
      WaitingForSomeone: "May go the wrong way and be late.",
      LostProperty: "Hard to find.",
      Travel: "Unfavorable.",
      Exam: "Not ideal.",
    },

    XU5: {
      name: "XU",
      meaning: "Attending",
      image: "./images/5XU.png",
      Fortune:
        "It is advisable not to risk advancing. Don't be Opportunistic. It is important to know that greed leads to failure, the wise must wait for the opportunity.",
      Love: "May not be satisfactory at first. Only those with patience can achieve a good result.",
      WaitingForSomeone: "Will be late.",
      LostProperty: "Can be found in a few days.",
      Travel: "Don't. There are signs of theft.",
      Exam: "Need to work harder to achieve ideal outcomes.",
    },

    SONG6: {
      name: "SONG",
      meaning: "Arguing",
      image: "./images/6SONG.png",
      Fortune:
        "Frequent injuries, slander and easy to fall into treacherous tricks, bad luck. Forgive others and don't argue with people again, otherwise it will be disadvantageous.",
      Love: "Not likely to have a good result due to aspersion.",
      WaitingForSomeone:
        "Won't come. Even if it comes, there must be disputes between the two sides.",
      LostProperty:
        "No need to look for it. Even if it is found, there will be disputes.",
      Travel: "Not suitable.",
      Exam: "Not ideal. Very bad.",
    },

    SHI7: {
      name: "SHI",
      meaning: "Leading",
      image: "./images/7SHI.png",
      Fortune:
        "Although things are not going smoothly, take it as a lesson. Don't use opportunistic tricks for personal gain. There are many difficulties, and it is the best policy to rely on your own efforts to get rid of all difficulties.",
      Love: "Beware of conflicts and injuries caused by relation.",
      WaitingForSomeone: "The comer is not friendly.",
      LostProperty: "Has been stolen.",
      Travel: "Unfavorable. Prevent theft.",
      Exam: "You work hard but the outcomes are not ideal.",
    },

    BI8: {
      name: "BI",
      meaning: "Grouping",
      image: "./images/8BI.png",
      Fortune:
        "Good luck if you are friendly to people. You can be promoted, but you can't get aggressive, otherwise, your luck will be ruined.",
      Love: "Will have a happy relationship.",
      WaitingForSomeone: "Will come.",
      LostProperty:
        "The lost property can be found in the northeast and southwest, but it is damaged.",
      Travel: "Auspicious.",
      Exam: "Will have a good result.",
    },

    XIAOXU9: {
      name: "XIAOXU",
      meaning: "Small Accumulaating",
      image: "./images/9XIAOXU.png",
      Fortune:
        "The fortune is erratic, there is a disaster of right and wrong, and it is difficult to deal with urgently, so be patient and wait for the opportunity.",
      Love: "Discord in language, disagreement, unsatisfactory.",
      WaitingForSomeone: "Will not come, temporarily change his/her mind.",
      LostProperty:
        "Invaded by a villain, seen by a woman, rushing to the southeast to find it.",
      Travel: "Not ideal.",
      Exam: "Not ideal.",
    },

    LV10: {
      name: "LV",
      meaning: "Treading",
      image: "./images/10LV.png",
      Fortune:
        "When this hexagram is obtained, it means worries and hopelessness. But if you can humbly introspect and ask for advice from the elder, things will turn around.",
      Love: "Two people fall in love, but there are many obstacles. Although it is not easy to succeed, if they treat each other with sincerity and courtesy, they will eventually get married.",
      WaitingForSomeone: "Late.",
      LostProperty: "In the northwest or west, forgotten under something.",
      Travel: "It's better not to go",
      Exam: "Not ideal.",
    },

    TAI11: {
      name: "TAI",
      meaning: "Prevading",
      image: "./images/11TAI.png",
      Fortune:
        "Everything is good and auspicious. You must not be arrogant you should also be alert not to be too active to avoid disaster.",
      Love: "Good relationship. Don't be willful",
      WaitingForSomeone: "Will come.",
      LostProperty:
        "It is not stolen by a person but lost by yourself. It is possible to retrieve the item.",
      Travel: "Safe",
      Exam: "It is expected to pass the exam. Work harder.",
    },

    PI12: {
      name: "PI",
      meaning: "Obstruction",
      image: "./images/12PI.png",
      Fortune:
        "The situation is impassable, everything goes wrong, there are losses and many twists and turns. Therefore, it is advisable to stick to the right path. A slight deviation will result disaster.",
      Love: "Will be rejected",
      WaitingForSomeone: "Will not come.",
      LostProperty: "May find it in the southeast.",
      Travel: "Not suitable",
      Exam: "Not ideal.",
    },

    TONGREN13: {
      name: "TONGREN",
      meaning: "Concording People",
      image: "./images/13TONGREN.png",
      Fortune:
        "Peace, auspiciousness, and prosperity. Therefore, it is advisable to grasp the opportunity to maintain prosperity. Career should be the most important thing.",
      Love: "Mutual respect for each other, and they will become beautiful family members. Don't be arrogant.",
      WaitingForSomeone:
        "He/she will definitely come, and will bring good news.",
      LostProperty: "Can be found soon.",
      Travel: "Suitable.",
      Exam: "Will get good grades.",
    },

    DAYOU14: {
      name: "DAYOU",
      meaning: "Great Possessing",
      image: "./images/14DAYOU.png",
      Fortune:
        "Lucky and prosperous. However, the hexagram image has a sign of prosperity and decline, so you have to be cautious.",
      Love: "A good relationship can be realized.",
      WaitingForSomeone: "He/she will bring good news.",
      LostProperty:
        "It can be found in a high place in the south or northwest.",
      Travel: "Suitable.",
      Exam: "Will get good grades.",
    },

    QIAN15: {
      name: "QIAN",
      meaning: "Humbling",
      image: "./images/15QIAN.png",
      Fortune:
        "Auspicious and safe. Will have a good future. Don't be arrogant.",
      Love: "Can seek a good relationship with respect and humility.",
      WaitingForSomeone: "Arrived on time.",
      LostProperty:
        "It can be found if the item is lost in the northeast or southwest, and it is hard to find if it is lost the southeast.",
      Travel: "Suitable.",
      Exam: "Will get good grades.",
    },

    YU16: {
      name: "YU",
      meaning: "Providing For",
      image: "./images/16YU.png",
      Fortune:
        "Happiness and prosperity, and can be helped by the elders. Don't be lazy because of the prosperity, or indulge in sensual pleasures. Seize the good luck.",
      Love: "A godsent marriage.",
      WaitingForSomeone: "Will come.",
      LostProperty:
        "Find it as soon as possible, otherwise it is lost forever.",
      Travel: "Suitable. Do not climb mountains.",
      Exam: "Will get good grades.",
    },

    SUI17: {
      name: "SUI",
      meaning: "Following",
      image: "./images/17SUI.png",
      Fortune:
        "You can get fame and fortune if you corporate with others. If you are half-hearted, and you don’t listen to people’s advice, you are at risk of incurring disaster.",
      Love: "At present, it is more important than economics. No need to make a change.",
      WaitingForSomeone: "Will be late.",
      LostProperty:
        "Lost items can be found with the help of women. Can be found in East or West. It is mixed with some other items.",
      Travel: "Auspicious. It's better to be accompanied by someone.",
      Exam: "Will get good grades.",
    },

    GU18: {
      name: "GU",
      meaning: "Corrupting",
      image: "./images/18GU.png",
      Fortune:
        "Everything is unsatisfactory. It is advisable to muster up the courage to make innovations boldly, and there are signs of internal and external troubles.",
      Love: "The relationship is complicated. Look for another one.",
      WaitingForSomeone:
        "There will be changes in the middle way and will not come.",
      LostProperty: "Hard to find.",
      Travel: "Risky. Inappropriate.",
      Exam: "Failed.",
    },

    LIN19: {
      name: "LIN",
      meaning: "Nearing",
      image: "./images/19LIN.png",
      Fortune:
        "The fortune is gradually increasing, everything is prosperous, the future is promising, the official career is successful, and you can get help from the nobles. You should treat people with sincerity.",
      Love: "Don't be anxious or impulsive, and those who are compliant are lucky.",
      WaitingForSomeone: "The comer will arrive on time and bring good news.",
      LostProperty: "Under the stove or by the water.",
      Travel: "Suitable.",
      Exam: "Will get good grades.",
    },

    GUAN20: {
      name: "GUAN",
      meaning: "Viewing",
      image: "./images/20GUAN.png",
      Fortune:
        "In a dangerous and unstable fortune, you should wait and see the pros and cons of the current situation, and treat people and affairs with sincerity in order to escape difficulties.",
      Love: "It looks optimistic, but the inside is vain. It can be achieved with the support of the older generation, otherwise, it is still in a state of drifting and unstable.",
      WaitingForSomeone: "Probably not come.",
      LostProperty: "Hard to find.",
      Travel: "Not suitable.",
      Exam: "Not ideal.",
    },

    SHIHE21: {
      name: "SHIHE",
      meaning: "Gnawing Bite",
      image: "./images/21SHIHE.png",
      Fortune:
        "All things fail, and many things are hindered. When there are disputes and cannot move forward, it is advisable to always abide by the principles and not to be tempted to avoid being slandered by others.",
      Love: "Robbed of love by others. But don't be discouraged, you can succeed by striding forward bravely, otherwise just give up.",
      WaitingForSomeone: "Obstructed, unable to come.",
      LostProperty:
        "It can be found in the south or caught between something, which is not easy to detect for a while.",
      Travel: "Suitable.",
      Exam: "Poor.",
    },

    BI22: {
      name: "BI",
      meaning: "Adorning",
      image: "./images/22BI.png",
      Fortune:
        "Must enrich yourself, think deeply about everything, get along with others in harmony, and obtain unexpected benefits. Don't lose too much because of small mistakes, and there is no need to cause unnecessary losses in order to cover up the appearance. Be pragmatic, and proceed step by step.",
      Love: "Don’t place too much emphasis on appearance, and don’t overestimate both the partner and yourself. It should be noted that a gorgeous appearance does not represent everything.",
      WaitingForSomeone: "Will come. But those far away will not not come.",
      LostProperty: "Can be found in the northeast or South.",
      Travel: "Suitable. It's better not to travel too far away.",
      Exam: "Not ideal. But people think you did well.",
    },

    BO23: {
      name: "BO",
      meaning: "Stripping",
      image: "./images/23BO.png",
      Fortune:
        "There are unfavorable disasters. Don't hold on to ambition or dig your own grave. ",
      Love: "Don’t expect too much.",
      WaitingForSomeone:
        "The comer will be a villain, a woman, or will not come.",
      LostProperty: "Has been lost in the water.",
      Travel: "Not suitable.",
      Exam: "Not ideal.",
    },

    FU24: {
      name: "FU",
      meaning: "Returning",
      image: "./images/24FU.png",
      Fortune:
        "Everything will get better soon. In the beginning, it is not advisable to make rapid progress. If you are down-to-earth, you will have a lot of money and good luck.",
      Love: "You will lose if you are impatient, but you will benefit if you take it slowly.",
      WaitingForSomeone: "Will be late.",
      LostProperty: "Has been lost in the water.",
      Travel: "Suitable.",
      Exam: "Getting better.",
    },

    WUWANG25: {
      name: "WUWANG",
      meaning: "Without Embroiling",
      image: "./images/25WUWANG.png",
      Fortune:
        "This hexagram means true. Therefore, if you do things ethically, you can be auspicious. Those who behave improperly will inevitably have disasters. Never get drunk on fame and fortune.",
      Love: "Success depends on the morality of each person. However, this hexagram has signs of dissatisfaction and discord, or departure.",
      WaitingForSomeone:
        "The person will definitely come. But there are signs of dissatisfaction.",
      LostProperty: "Needle in the haystack.",
      Travel:
        "If you travel for business, you'll be fine. But if you travel privately, and will do the trading, it is advisable not to travel far away.",
      Exam: "Written examination is advantageous, oral examination is disadvantageous.",
    },

    DAXU26: {
      name: "DAXU",
      meaning: "Great Accumulating",
      image: "./images/26DAXU.png",
      Fortune:
        "Keep your feet on the ground in order to achieve your great cause. If you are arrogant because of gaining power, you will end up with failure.",
      Love: "Although there are some obstacles, it is still hopeful.",
      WaitingForSomeone: "Won't come.",
      LostProperty:
        "It can be found after a few days, by the water in the northeast.",
      Travel: "Auspicious.",
      Exam: "Pass the exam.",
    },

    YI27: {
      name: "YI",
      meaning: "Swallowing",
      image: "./images/27YI.png",
      Fortune:
        "There is a sign of lack of consideration and reckless action. It is even more disadvantageous for those who like to dispute with others. We must avoid willful actions.",
      Love: "Don't be arrogant. This love is confusing and fascinating, so we should observe calmly.",
      WaitingForSomeone: "Will come.",
      LostProperty:
        "Find in the utility room in the house or in the cave outside. Hard to find.",
      Travel: "Suitable. Pay attention to the food and language.",
      Exam: "Acceptable.",
    },

    DAGUO28: {
      name: "DAGUO",
      meaning: "Great Exceeding",
      image: "./images/28DAGUO.png",
      Fortune:
        "All things are declining, more troubles. It's a sign of being overwhelmed and overburdened. Those who have obtained this hexagram must not act rashly in everything, otherwise, there will be a mistake.",
      Love: "Both people have a high standard, and each has someone in mind, so bothersome and untrue, why do we need to talk about the relationship? Hopeless.",
      WaitingForSomeone: "Won't come.",
      LostProperty:
        "A small loss can be recovered, a greater loss is hopeless to be found. It is more promising to find in the southeast or west.",
      Travel: "Not suitable.",
      Exam: "Not ideal.",
    },

    KAN29: {
      name: "KAN",
      meaning: "Gorge",
      image: "./images/29KAN.png",
      Fortune:
        "There are many crises, you should be tolerant and self-respective, keep a cheerful mood, and deal with it calmly, then you can get out of danger. Otherwise, there will be misfortunes.",
      Love: "Indulge in love, but there are lots of troubles and pressures from the outside. Stay calm.",
      WaitingForSomeone: "Won't come.",
      LostProperty: "Hard to find. Or being stolen.",
      Travel: "Not suitable, especially avoid swimming near the water's edge",
      Exam: "Not ideal.",
    },

    LI30: {
      name: "LI",
      meaning: "Radiance",
      image: "./images/30LI.png",
      Fortune:
        "Although it looks extremely prosperous and everything is going well, it may be false or virtual. Hence treat others with modesty and rationality, otherwise, you will lose money. It is advisable to obey the elders, and not to be impulsive because of impatience, then you can thrive.",
      Love: "The other person is bright and energetic, the impatient will be self-defeating, and the sincere and quiet will achieve success.",
      WaitingForSomeone: "Will come.",
      LostProperty:
        "In the south, hide by women. You should look for it as soon as possible.",
      Travel: "Suitable, But don't be too rushed.",
      Exam: "Good grades.",
    },

    XIAN31: {
      name: "XIAN",
      meaning: "Conjoining",
      image: "./images/31XIAN.png",
      Fortune:
        "If you respect and love each other, those who are innocently associated will become married couples. If you have a bad name and are greedy, you should know how to repent to avoid bad luck.",
      Love: "The other person is bright and energetic, the impatient will be self-defeating, and the sincere and quiet will achieve success.",
      WaitingForSomeone: "He/she will come and bring good news.",
      LostProperty: "Look for it in the northeast or southwest.",
      Travel: "Suitable.",
      Exam: "Good grades.",
    },

    HENG32: {
      name: "HENG",
      meaning: "Persevering",
      image: "./images/32HENG.png",
      Fortune:
        "All things prosper. The image is auspicious to those who is perseverance. Those who move rashly cannot prosper.",
      Love: "Go smoothly and have good results.",
      WaitingForSomeone: "He/she will be late.",
      LostProperty:
        "Findable. Look for it in the southeast if indoors, northwest if outdoor.",
      Travel: "Suitable.",
      Exam: "High score record.",
    },

    DUN33: {
      name: "DUN",
      meaning: "Retiring",
      image: "./images/33DUN.png",
      Fortune:
        "Must stay away from the villain. be cautious in your words and deeds in order to be safe and fortunate.",
      Love: "You may want to see someone else.",
      WaitingForSomeone: "Can't come.",
      LostProperty: "Has been taken away. Hard to find.",
      Travel: "Unfavorable.",
      Exam: "Not ideal.",
    },

    DAZHUANG34: {
      name: "DAZHUANG",
      meaning: "Great Invigorating",
      image: "./images/34DAZHUANG.png",
      Fortune:
        "Although the fortune is strong, it is at the peak period and will decline soon. You should be more cautious and strive to maintain peace and prosperity and don't offend others, otherwise, you will fail because of this. Don't be greedy.",
      Love: "Go smoothly. But problems may occur due to lack of benevolence and courtesy. Be cautious.",
      WaitingForSomeone: "Late.",
      LostProperty: "Most of them are not findable.",
      Travel: "Unfavorable. There is unnecessary disaster.",
      Exam: "Ideal, but don't be too conceited.",
    },

    JIN35: {
      name: "JIN",
      meaning: "Prospering",
      image: "./images/35JIN.png",
      Fortune:
        "The career is prosperous, the reputation is getting higher, and those who work with others are lucky. However, we must know that everyone should be conscientious about matters, and we must not be overly conceited, otherwise, there will be a disaster. But wealth is prosperous.",
      Love: "Will become a lovely couple.",
      WaitingForSomeone: "Women will come, but men will not necessarily come.",
      LostProperty: "Easy to find.",
      Travel: "Suitable.",
      Exam: "Will get good grades.",
    },

    MINGYI36: {
      name: "MINGYI",
      meaning: "Brightness Hiding",
      image: "./images/36MINGYI.png",
      Fortune:
        "Fortunes are declined, everything toiled. Everything is blocked, confused, and disastrous. Therefore, it is advisable to be tolerant and self-respect and wait for the opportunity.",
      Love: "There are signs of betrayal and abandonment. Failed to be accepted by the other person. Will not succeed, and will be hurt seriously by this relations.",
      WaitingForSomeone: "Won't come.",
      LostProperty:
        "Can be found in clothes. If it is not in your clothes, it is hidden by something.",
      Travel: "Not suitable.",
      Exam: "Hopeless.",
    },

    JIAREN37: {
      name: "JIAREN",
      meaning: "Dwelling People",
      image: "./images/37JIAREN.png",
      Fortune:
        "It's safe and sound, and there will be happy events. Those who work with their family will benefit greatly.",
      Love: "Lovers finally get married.",
      WaitingForSomeone: "Will come and will bring good news.",
      LostProperty: "South or Southeast. Easy to find if it is lost indoors.",
      Travel: "Suitable.",
      Exam: "Ideal.",
    },

    KUI38: {
      name: "KUI",
      meaning: "Polarising",
      image: "./images/38KUI.png",
      Fortune:
        "Unlucky, and everything is difficult to accomplish. When everything goes against the expectation, if you can stay calm, you can still turn the crisis into peace. There might be discord within the relatives and friends. It is advisable to be gentle and to overcome difficulties with patience.",
      Love: "Hopeless.",
      WaitingForSomeone: "Won't come.",
      LostProperty: "It has been taken away and cannot be recovered.",
      Travel: "Unsuitable.",
      Exam: "Failed.",
    },

    JIAN39: {
      name: "JIAN",
      meaning: "Limping",
      image: "./images/39JIAN.png",
      Fortune:
        "Bad luck, many disasters, dilemmas, you must respect yourself and not act rashly. Since everything is messy, and it is more important to prevent the harm of the villain, and must not be involved in danger, otherwise disasters will come.",
      Love: "There will be many difficulties.",
      WaitingForSomeone: "Won't come.",
      LostProperty:
        "It can be found by the waterside or in the ditch in the northeast.",
      Travel: "Unsuitable.",
      Exam: "Failed.",
    },

    JIE40: {
      name: "JIE",
      meaning: "Taking-apart",
      image: "./images/40JIE.png",
      Fortune:
        "Take advantage of the trend, seize opportunities quickly, and persevere in your efforts. It is advisable to go out for more opportunities.",
      Love: "Don't hesitate, stick to it.",
      WaitingForSomeone: "Will come.",
      LostProperty: "Hard to find.",
      Travel: "Suitable, but don’t take a boat.",
      Exam: "Passed.",
    },

    SUN41: {
      name: "SUN",
      meaning: "Diminishing",
      image: "./images/41SUN.png",
      Fortune:
        "Everything is unsatisfactory. If you put your own interests and desires at the first place, there will be disasters and loss of wealth. It is necessary to be able to realize what has been lost in order to restore the situation. You can avoid loss by working with others.",
      Love: "You can succeed with honesty and get a good relationship.",
      WaitingForSomeone: "May be late.",
      LostProperty: "Can be found in the north, but hard to find elsewhere.",
      Travel: "Sojourn is possible, but travel is not suitable.",
      Exam: "Work harder, you can get a good grade.",
    },

    YI42: {
      name: "YI",
      meaning: "Augmenting",
      image: "./images/42YI.png",
      Fortune:
        "Taking advantage of the good luck, you can get the help of others. Everything goes smoothly, and the family is amicable. It is generally auspicious.",
      Love: "A happy marriage.",
      WaitingForSomeone: "Late. Because there are good news.",
      LostProperty:
        "The lost property has been modified and is hidden deep in the southeast.",
      Travel:
        "It is feasible, but there might be small accidents and unexpected changes.",
      Exam: "Good grades, parents are happy.",
    },

    GUAI43: {
      name: "GUAI",
      meaning: "Parting",
      image: "./images/43GUAI.png",
      Fortune:
        "Although there is good fortune, you will eventually encounter difficulties and dangers. Don't act rashly in everything. You should always alert yourself and watch out for unexpected disasters. The residence may change, and there may also be failures in documents and contracts, which are prone to errors. Be careful not to be arrogant or self-righteous. Those who are not humble are bound to suffer disaster.",
      Love: "It has the sign of a man abandon a woman, which is improper.",
      WaitingForSomeone: "Don't wait anymore, won't come.",
      LostProperty: "Search in northwest.",
      Travel: "Unsuitable.",
      Exam: "Not ideal.",
    },

    GOU44: {
      name: "GOU",
      meaning: "Coupling",
      image: "./images/44GOU.png",
      Fortune: "Everything is unsatisfactory, unable to move forward.",
      Love: "Both men and women are not satisfied with this relationship.",
      WaitingForSomeone:
        "The woman will come, but the man will not necessarily come, because he met other women on the way.",
      LostProperty: "May be found unintentionally.",
      Travel: "Suitable.",
      Exam: "Not ideal.",
    },

    CUI45: {
      name: "CUI",
      meaning: "Clustering",
      image: "./images/45CUI.png",
      Fortune: "Prosperity, but should be careful of financial disputes.",
      Love: "Wishes come true.",
      WaitingForSomeone: "Will definitely come, and there is good news.",
      LostProperty:
        "The lost property is in the southwest. Look for it as soon as possible.",
      Travel: "Auspicious.",
      Exam: "Ideal.",
    },

    SHENG46: {
      name: "SHENG",
      meaning: "Ascending",
      image: "./images/46SHENG.png",
      Fortune:
        "All things develop positively, and there is a sign of good fortune. There is good luck in the south.",
      Love: "Don't be too hasty, and progress slowly.",
      WaitingForSomeone: "Late.",
      LostProperty: "Can be found, but not now.",
      Travel: "Auspicious.",
      Exam: "Making progress.",
    },

    KUN47: {
      name: "KUN",
      meaning: "Confining",
      image: "./images/47KUN.png",
      Fortune:
        "Unsatisfactory, being deceived by the villain, work to no avail, can't achieve anything. It is advisable to wait for the opportunity.",
      Love: "Failure.",
      WaitingForSomeone:
        "The comer is obstructed. He/she will not come or will be late.",
      LostProperty:
        "The lost property is left out indoors or stored in a locker, but it is difficult to find.",
      Travel: "Unfavorable. It is not suitable to travel far.",
      Exam: "Not ideal.",
    },

    JING48: {
      name: "JING",
      meaning: "Welling",
      image: "./images/48JING.png",
      Fortune:
        "Lack of momentum. It is hard to make progress in everything, so it is better to keep calm.",
      Love: "Let it develop naturally, but the situation is not so good since there is a sign of breaking up.",
      WaitingForSomeone:
        "Contact the comer again as soon as possible. Will be late.",
      LostProperty: "It can be found indoors, but it is hard to find.",
      Travel: "Unfavorable.",
      Exam: "Acceptable.",
    },

    GE49: {
      name: "GE",
      meaning: "Skinning",
      image: "./images/49GE.png",
      Fortune:
        "Unstable, everything changes, so it is necessary to establish new rules, and it is advisable to make up your mind to reform. But we still need to be cautious about the way of reform.",
      Love: "Those who have gone are gone. Everything has a new beginning, it is appropriate to start again.",
      WaitingForSomeone:
        "He/she won't come because the comer changed his/her mind in the middle way.",
      LostProperty:
        "The lost property is hard to find. It may be found in the southwest or west.",
      Travel: "Suitable, but dates may change.",
      Exam: "Getting better.",
    },

    DING50: {
      name: "DING",
      meaning: "Holding",
      image: "./images/50DING.png",
      Fortune:
        "Able to solve difficulties, achieve stability, and gain both fame and fortune. It is best to find new friends to work as partners.",
      Love: "It looks smooth but there may be a third party's intervention, and it is not easy to be discovered.",
      WaitingForSomeone: "Will come.",
      LostProperty: "Find it in the southeast.",
      Travel: "There will be windfalls, feasible.",
      Exam: "Ideal.",
    },

    ZHEN51: {
      name: "ZHEN",
      meaning: "Shake",
      image: "./images/51ZHEN.png",
      Fortune:
        "It looks prosperous on the surface, but it is in the eventful autumn, so you should be cautious and don't think too much of yourself, which is useless. There are signs of turbulence, anxiety, and fear.",
      Love: "There will be many words of rumors.",
      WaitingForSomeone: "Will come, and will arrive early.",
      LostProperty:
        "Seek both east and west, if there is none, you lost it permanently.",
      Travel: "Feasible.",
      Exam: "May get the first place.",
    },

    GEN52: {
      name: "GEN",
      meaning: "Bound",
      image: "./images/52GEN.png",
      Fortune:
        "You should love yourself, and don't rely too much on it, otherwise, it will be disadvantageous. Don't act rashly in everything.",
      Love: "There is a tendency of confrontation, unrequited love. Both sides have their own obstacles.",
      WaitingForSomeone: "Won't come.",
      LostProperty: "Can be found in the northeast.",
      Travel: "Unfavorable.",
      Exam: "Failed.",
    },

    JIAN53: {
      name: "JIAN",
      meaning: "Infiltrating",
      image: "./images/53JIAN.png",
      Fortune:
        "Getting smooth, bright, and lucky gradually. It is necessary to guard against errors in money transactions and improper sexual relations between men and women.",
      Love: "Progressing slowly can make a good relationship.",
      WaitingForSomeone: "Will be late.",
      LostProperty: "Can be found.",
      Travel: "Suitable, but may be delayed.",
    },

    GUIMEI54: {
      name: "GUIMEI",
      meaning: "Converting Maidenhood",
      image: "./images/54GUIMEI.png",
      Fortune:
        "Misfortunes. Things are contrary to common sense. There is joy at the beginning, but soon afterward, disaster will follow.",
      Love: "Not appropriate.",
      WaitingForSomeone: "Won't come.",
      LostProperty: "Embezzlement.",
      Travel: "Not suitable.",
      Exam: "Failed.",
    },

    FENG55: {
      name: "FENG",
      meaning: "Abounding",
      image: "./images/55FENG.png",
      Fortune:
        "This hexagram means gains. The wise one should be satisfied and stop when the most prosperous and harvestable, while many people are greedy. They are very dangerous and will eventually regret. Particular attention should be paid to litigation matters, and there may also be sudden losses of money or fire accidents.",
      Love: "Passionate and emotional. If you are complacent, you will lose, and this relationship will not last long.",
      WaitingForSomeone: "Will come. Will also leave soon for some reason.",
      LostProperty: "Can be found in east and south.",
      Travel: "It is suitable but there are some twists and turns.",
      Exam: "Passed.",
    },

    LV56: {
      name: "LV",
      meaning: "Sojourning",
      image: "./images/56LV.png",
      Fortune: "Everything is uncertain, consider the opinions of others.",
      Love: "Unstable. It should be viewed with a normal mind, not too much attention.",
      WaitingForSomeone: "Won't come.",
      LostProperty: "It is stolen and cannot be retrieved.",
      Travel: "Not suitable.",
      Exam: "Very poor.",
    },

    XUN57: {
      name: "XUN",
      meaning: "Penetrating",
      image: "./images/57XUN.png",
      Fortune:
        "This hexagram symbolizes many twists and turns. At this time, you have to deal with things with calm and firm will. Be decisive and don't need to go with the flow. You can get unexpected gains if you treat people and things peacefully.",
      Love: "Be calm. The hexagram means wind. If wind is peaceful, the day will be beautiful. If the wind condenses, it can be known that the storm is approaching. Love is also uncertain like winds. The important life-long events must not be taken carelessly. There are good times and bad times, and there are so many tricks, all of which are erratic and untrue.",
      WaitingForSomeone:
        "Take the initiative to make appointments, and there will be a better results.",
      LostProperty:
        "Can be found in the southeast. Hidden underneath other items.",
      Travel: "Suitable.",
      Exam: "Poor.",
    },

    DUI58: {
      name: "DUI",
      meaning: "Open",
      image: "./images/58DUI.png",
      Fortune:
        "There are joys and worries, reputations and ridicules. Although you are lucky and wishful, you should behave yourself, otherwise you will commit disasters.",
      Love: "There is the sign of willful bickering. Therefore, don't be arrogant and try to get along with it peacefully.",
      WaitingForSomeone: "Will come, and there will be good news.",
      LostProperty: "In the west.",
      Travel: "Suitable.",
      Exam: "Ideal.",
    },

    HUAN59: {
      name: "HUAN",
      meaning: "Dispersing",
      image: "./images/59HUAN.png",
      Fortune:
        "There is a small loss at the beginning, but it will end up with happiness, everything will be prosperous if you are careful.",
      Love: "Due to some small obstacles, there might be separation. But the affection still exists, two people are likely to get back together.",
      WaitingForSomeone: "He/she may not come.",
      LostProperty: "Hard to find.",
      Travel: "Suitable, but stay away from water.",
      Exam: "Acceptable, but you can do better.",
    },

    JIE60: {
      name: "JIE",
      meaning: "Articulating",
      image: "./images/60JIE.png",
      Fortune:
        "With a heart of peace, you can overcome difficulties and get out of danger.",
      Love: "Whether you succeed or not depends on your own temperament. For this reason, if a person is steadfast in and is not casual, he/she can be lucky.",
      WaitingForSomeone: "Won’t come, or have to wait for a long time.",
      LostProperty:
        "In the west or northwest. Although it is in the near distance, it is hard to find.",
      Travel: "Not suitable.",
      Exam: "You must strive for progress so you can pass the exam.",
    },

    ZHONGFU61: {
      name: "ZHONGFU",
      meaning: "Centre Confirming",
      image: "./images/61ZHONGFU.png",
      Fortune:
        "You will benefit from everything you do.Remember sincerity is the foundation of one's career.",
      Love: "Treat each other with sincerity.",
      WaitingForSomeone: "Will come.",
      LostProperty: "Hard to find.",
      Travel: "Suitable.",
      Exam: "Ideal.",
    },

    XIAOGUO62: {
      name: "XIAOGUO",
      meaning: "Small Exceeding",
      image: "./images/62XIAOGUO.png",
      Fortune: "Not smooth.",
      Love: "Have had it before, but don't feel commensurate, and don't care about it anymore.",
      WaitingForSomeone: "Won't come, or will be late.",
      LostProperty: "Hard to find. It may be lost near the water.",
      Travel: "Not suitable.",
      Exam: "Not ideal.",
    },

    JIJI63: {
      name: "JIJI",
      meaning: "Already Fording",
      image: "./images/63JIJI.png",
      Fortune:
        "Extremely prosperous.However, prosperity starts to decline when it reach it peaks. If those who have obtained this hexagram forgot this principle due to the momentary success, eventually there will be lost and confusion.",
      Love: "The couple is inseparable at first. But after a long time, they will disperse.",
      WaitingForSomeone: "Has turned back halfway, no need to wait any longer.",
      LostProperty: "Will lost again after found. No need to find.",
      Travel: "It is better to travel in near places rather than far.",
      Exam: "You are capable. But the result may not be ideal. Generally, it's auspicious.",
    },

    WEIJI64: {
      name: "WEIJI",
      meaning: "Not-yet Fording",
      image: "./images/64WEIJI.png",
      Fortune:
        "Everything can't be done as you wish. There is a sign of prosperity after the initial decline. You must have patience in everything to break through the difficulties, and the future will be very promising. Those who can work hard can gain both fame and fortune.",
      Love: "At the beginning, each person has different opinion. If you can try to accept the other's views, you can be successful.",
      WaitingForSomeone: "Has turned back halfway, no need to wait any longer.",
      LostProperty:
        "It is not far from the temple or the water's edge or is mixed with something else. It can be found in north or south.",
      Travel:
        "It is not advisable to travel far because of accidents affecting the itinerary",
      Exam: "Ideal.",
    },
  });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Load Tung Shing
  if (request.message === "LoadTungShing") {
    const token = "d8d9ffa63b826b2b0b2418c75a65f0c4";
    const date = new Date().toISOString();
    const inputDate = date.substr(0, 10);

    const api =
      "https://api.djapi.cn/wannianli/get?date=" +
      inputDate +
      "&cn_to_unicode=0&token=" +
      token +
      "&datatype=json";
    console.log(api);
    console.log(inputDate);

    var d = new Date();
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    const m = month[d.getMonth()];
    const y = d.getFullYear();
    const dd = d.getDate();

    fetch(api)
      .then(function (res) {
        // if (res.ErrorReason !== "no") {
        //   console.log(res.ErrorReason);
        //   sendResponse({
        //     message: "Error",
        //     result: res.ErrorReason
        //   });
        //   return;
        // }
        res.json().then(function (data) {
          console.log("success");
          sendResponse({
            message: "success",
            result: data.Result,
            formatMonth: m,
            formatYear: y,
            formatDate: dd,
          });
        });
      })
      .catch(function (err) {
        console.log(err);
        sendResponse({
          message: "Error",
          result: "There is a problem when fetching the API.",
        });
      });

    return true;
  }

  if (request.message === "plumBlossom") {
    const shangYao = request.shangYao;
    const xiaYao = request.xiaYao;

    switch (true) {
      case shangYao === 0 && xiaYao === 0:
        chrome.storage.local.get("QIAN1", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.QIAN1,
          });
        });

      case shangYao === 0 && xiaYao === 1:
        chrome.storage.local.get("LV10", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.LV10,
          });
        });

      case shangYao === 0 && xiaYao === 2:
        chrome.storage.local.get("TONGREN13", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.TONGREN13,
          });
        });

      case shangYao === 0 && xiaYao === 3:
        chrome.storage.local.get("WUWANG25", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.WUWANG25,
          });
        });

      case shangYao === 0 && xiaYao === 4:
        chrome.storage.local.get("GOU44", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.GOU44,
          });
        });

      case shangYao === 0 && xiaYao === 5:
        chrome.storage.local.get("SONG6", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.SONG6,
          });
        });

      case shangYao === 0 && xiaYao === 6:
        chrome.storage.local.get("DUN33", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.DUN33,
          });
        });

      case shangYao === 0 && xiaYao === 7:
        chrome.storage.local.get("PI12", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.PI12,
          });
        });

      case shangYao === 1 && xiaYao === 0:
        chrome.storage.local.get("GUAI43", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.GUAI43,
          });
        });

      case shangYao === 1 && xiaYao === 1:
        chrome.storage.local.get("DUI58", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.DUI58,
          });
        });

      case shangYao === 1 && xiaYao === 2:
        chrome.storage.local.get("GE49", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.GE49,
          });
        });

      case shangYao === 1 && xiaYao === 3:
        chrome.storage.local.get("SUI17", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.SUI17,
          });
        });

      case shangYao === 1 && xiaYao === 4:
        chrome.storage.local.get("DAGUO28", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.DAGUO28,
          });
        });

      case shangYao === 1 && xiaYao === 5:
        chrome.storage.local.get("KUN47", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.KUN47,
          });
        });

      case shangYao === 1 && xiaYao === 6:
        chrome.storage.local.get("XIAN31", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.XIAN31,
          });
        });

      case shangYao === 1 && xiaYao === 7:
        chrome.storage.local.get("CUI45", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.CUI45,
          });
        });

      case shangYao === 2 && xiaYao === 0:
        chrome.storage.local.get("DAYOU14", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.DAYOU14,
          });
        });

      case shangYao === 2 && xiaYao === 1:
        chrome.storage.local.get("KUI38", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.KUI38,
          });
        });

      case shangYao === 2 && xiaYao === 2:
        chrome.storage.local.get("LI30", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.LI30,
          });
        });

      case shangYao === 2 && xiaYao === 3:
        chrome.storage.local.get("SHIHE21", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.SHIHE21,
          });
        });

      case shangYao === 2 && xiaYao === 4:
        chrome.storage.local.get("DING50", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.DING50,
          });
        });

      case shangYao === 2 && xiaYao === 5:
        chrome.storage.local.get("WEIJI64", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.WEIJI64,
          });
        });

      case shangYao === 2 && xiaYao === 6:
        chrome.storage.local.get("LV56", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.LV56,
          });
        });

      case shangYao === 2 && xiaYao === 7:
        chrome.storage.local.get("JIN35", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.JIN35,
          });
        });

      case shangYao === 3 && xiaYao === 0:
        chrome.storage.local.get("DAZHUANG34", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.DAZHUANG34,
          });
        });

      case shangYao === 3 && xiaYao === 1:
        chrome.storage.local.get("GUIMEI54", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.GUIMEI54,
          });
        });

      case shangYao === 3 && xiaYao === 2:
        chrome.storage.local.get("FENG55", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.FENG55,
          });
        });

      case shangYao === 3 && xiaYao === 3:
        chrome.storage.local.get("ZHEN51", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.ZHEN51,
          });
        });

      case shangYao === 3 && xiaYao === 4:
        chrome.storage.local.get("HENG32", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.HENG32,
          });
        });

      case shangYao === 3 && xiaYao === 5:
        chrome.storage.local.get("JIE40", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.JIE40,
          });
        });

      case shangYao === 3 && xiaYao === 6:
        chrome.storage.local.get("XIAOGUO62", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.XIAOGUO62,
          });
        });

      case shangYao === 3 && xiaYao === 7:
        chrome.storage.local.get("YU16", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.YU16,
          });
        });

      case shangYao === 4 && xiaYao === 0:
        chrome.storage.local.get("XIAOXU9", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.XIAOXU9,
          });
        });

      case shangYao === 4 && xiaYao === 1:
        chrome.storage.local.get("ZHONGFU61", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.ZHONGFU61,
          });
        });

      case shangYao === 4 && xiaYao === 2:
        chrome.storage.local.get("JIAREN37", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.JIAREN37,
          });
        });

      case shangYao === 4 && xiaYao === 3:
        chrome.storage.local.get("YI42", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.YI42,
          });
        });

      case shangYao === 4 && xiaYao === 4:
        chrome.storage.local.get("XUN57", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.XUN57,
          });
        });

      case shangYao === 4 && xiaYao === 5:
        chrome.storage.local.get("HUAN59", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.HUAN59,
          });
        });

      case shangYao === 4 && xiaYao === 6:
        chrome.storage.local.get("JIAN53", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.JIAN53,
          });
        });

      case shangYao === 4 && xiaYao === 7:
        chrome.storage.local.get("GUAN20", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.GUAN20,
          });
        });

      case shangYao === 5 && xiaYao === 0:
        chrome.storage.local.get("XU5", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.XU5,
          });
        });

      case shangYao === 5 && xiaYao === 1:
        chrome.storage.local.get("JIE60", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.JIE60,
          });
        });

      case shangYao === 5 && xiaYao === 2:
        chrome.storage.local.get("JIJI63", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.JIJI63,
          });
        });

      case shangYao === 5 && xiaYao === 3:
        chrome.storage.local.get("ZHUN3", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.ZHUN3,
          });
        });

      case shangYao === 5 && xiaYao === 4:
        chrome.storage.local.get("JING48", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.JING48,
          });
        });

      case shangYao === 5 && xiaYao === 5:
        chrome.storage.local.get("KAN29", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.KAN29,
          });
        });

      case shangYao === 5 && xiaYao === 6:
        chrome.storage.local.get("JIAN39", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.JIAN39,
          });
        });

      case shangYao === 5 && xiaYao === 7:
        chrome.storage.local.get("BI8", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.BI8,
          });
        });

      case shangYao === 6 && xiaYao === 0:
        chrome.storage.local.get("DAXU26", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.DAXU26,
          });
        });

      case shangYao === 6 && xiaYao === 1:
        chrome.storage.local.get("SUN41", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.SUN41,
          });
        });

      case shangYao === 6 && xiaYao === 2:
        chrome.storage.local.get("BI22", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.BI22,
          });
        });

      case shangYao === 6 && xiaYao === 3:
        chrome.storage.local.get("YI27", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.YI27,
          });
        });

      case shangYao === 6 && xiaYao === 4:
        chrome.storage.local.get("GU18", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.GU18,
          });
        });

      case shangYao === 6 && xiaYao === 5:
        chrome.storage.local.get("MENG4", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.MENG4,
          });
        });

      case shangYao === 6 && xiaYao === 6:
        chrome.storage.local.get("GEN52", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.GEN52,
          });
        });

      case shangYao === 6 && xiaYao === 7:
        chrome.storage.local.get("BO23", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.BO23,
          });
        });

      case shangYao === 7 && xiaYao === 0:
        chrome.storage.local.get("TAI11", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.TAI11,
          });
        });

      case shangYao === 7 && xiaYao === 1:
        chrome.storage.local.get("LIN19", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.LIN19,
          });
        });

      case shangYao === 7 && xiaYao === 2:
        chrome.storage.local.get("MINGYI36", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.MINGYI36,
          });
        });

      case shangYao === 7 && xiaYao === 3:
        chrome.storage.local.get("FU24", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.FU24,
          });
        });

      case shangYao === 7 && xiaYao === 4:
        chrome.storage.local.get("SHENG46", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.SHENG46,
          });
        });

      case shangYao === 7 && xiaYao === 5:
        chrome.storage.local.get("SHI7", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.SHI7,
          });
        });

      case shangYao === 7 && xiaYao === 6:
        chrome.storage.local.get("QIAN15", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.QIAN15,
          });
        });

      case shangYao === 7 && xiaYao === 7:
        chrome.storage.local.get("KUN2", (data) => {
          if (chrome.runtime.lastError) {
            sendResponse({
              message: "fail",
            });
            return;
          }

          sendResponse({
            message: "success",
            result: data.KUN2,
          });
        });

    }

    console.log("by date");

    return true;
  }
});
