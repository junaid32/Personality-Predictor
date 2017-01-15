'use strict';
window.fbAsyncInit = function() {
    FB.init({
        appId      : '1398514223494875',
        xfbml      : true,
        status     : true,
        oauth      : true,
        cookie	   : true,
        version    : 'v2.8'
    });
};
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

var markdown = function (s) { return window.markdownit().render(s); };
var obj,profiledata,textdata,summarytext,likelydata;
var OUTPUT_LANG = 'en';
var globalState = {
    twitterUserId: undefined,
    selectedTwitterUser: undefined,
    selectedTwitterImage: undefined,
    selectedTwitterUserLang: undefined,
    selectedSample: undefined,
    languageSelected: undefined,
    currentProfile: undefined,
    userLocale: undefined
  };
function extend(target, source) {
  Object.keys(source).forEach(function (k) {
    target[k] = source[k];
  });
  return target;
}
function clone(o) {
  return extend({}, o);
}
$(document).ready(function () {
    var
    SAMPLE_TEXTS = [
        'sample1'
      ],
    textCache = {};
    globalState.selectedSample = SAMPLE_TEXTS[0];
    globalState.languageSelected = undefined;
  var $outputSummaryText = $('.output-summary--summary');
  //var $inputWordCount = $('.input--word-count-number');
  var $inputForm2 = $('#custom-from');
  var $loading = $('.loading');
  var $outputJSONCode = $('.output--json-code');
  var $error = $('.error');
  var $errorMessage = $('.error--message');
 function setTextSample(value, readonly) {
    $('#custom-text-area').val();
  }
    function setLoadingState() {
    resetOutputs();
    $loading.show();
  }


    $( document ).ready(function(e) {
      e.cancelBubble = true;
      if (e.stopPropagation)
        e.stopPropagation();

    });

    $inputForm2.submit(function(e) {
        e.cancelBubble = true;
        e.preventDefault();
        if (e.stopPropagation)
        e.stopPropagation();

      var lang = globalState.selectedSample == 'custom' ? globalState.selectedLanguage : $('input#text-'+ globalState.selectedSample).attr('data-lang');
      setLoadingState();
      jQuery.get('./data/text/sample1.txt', function(data) {
          document.getElementById('custom-text-area').innerHTML=data;

          localStorage.setItem('gameStorage2', JSON.stringify(data));
          textdata = JSON.parse(localStorage.getItem('gameStorage2'));

          $.getJSON('data/pdata.json', function(data1){
              localStorage.setItem('gameStorage1', JSON.stringify(data1));
              profiledata = JSON.parse(localStorage.getItem('gameStorage'));

          });
        getProfileForText(data, { language: lang });
    });
    });
      $('#fbcheck').click(function(e) {
          FB.login(function(myresponse) {
              if (myresponse.authResponse) {
                  var accessToken = myresponse.authResponse.accessToken;
                  var val ="";
                  setLoadingState();
                  FB.api('/me?fields=first_name,last_name,picture.height(128).width(128)','GET', function(myresponse1) {
                    //console.log(myresponse1);
                     // profiledata=myresponse1;
                      localStorage.setItem('gameStorage1', JSON.stringify(myresponse1));
                      profiledata = JSON.parse(localStorage.getItem('gameStorage1'));
                  });
                  FB.api('/me/posts?limit=1000','GET', function(myresponse) {
                      for (var i = 0; i < myresponse.data.length; i++){
                          if(myresponse.data[i].message==null){
                          }
                          else{
                              val = val +'\n'+myresponse.data[i].message;
                          }
                      }
                      localStorage.setItem('gameStorage2', JSON.stringify(val));
                      textdata = JSON.parse(localStorage.getItem('gameStorage2'));
                      e.cancelBubble = true;
                      e.preventDefault();
                      if (e.stopPropagation)
                          e.stopPropagation();
                      var lang = globalState.selectedSample == 'custom' ? globalState.selectedLanguage : $('input#text-'+ globalState.selectedSample).attr('data-lang');
                      //jQuery.get('./data/text/sample1.txt', function(data) {
                        //  document.getElementById('custom-text-area').innerHTML=data;
                          getProfileForText(val, { language: lang });
                      });
              } else {
                  alert('You are not logged into Facebook.');
              }
          }, {scope: 'user_status,user_posts,public_profile'});
      });

  //}

  function assembleTextSummary(text) {
    return '<h4 style="text-align: left" class="sumh4">Summary</h4><p class="base--p">' + text.split('\n').join('</p><p class="base--p">') + '</p>';
  }

  function setTextSummary(profile, locale) {
    var textSummary = new TextSummary(locale),
        summary = textSummary.getSummary(profile);
    $('#personalitySummary').empty();
    $('#personalitySummary').append(assembleTextSummary(summary));
    localStorage.setItem('gameStorage4', JSON.stringify(assembleTextSummary(summary)));
    summarytext = JSON.parse(localStorage.getItem('gameStorage4'));

  }


  $(document).on('click', '.output-big-5--trait-label', function() {
    $(this).closest('.percent-bar-and-score').toggleClass('toggled');
  });
  function getProfileForTwitterUser(userId, options) {
    getProfile(userId, extend(options || {}, { source_type: 'twitter'}));
  }

  function getProfileForText(text, options) {
    getProfile(text, extend(options || {}, { source_type: 'text'}));
  }

  function replacementsForLang(lang) {
    var replacements = {
      'en' : {
        'Extraversion' : 'Introversion/Extraversion',
        'Outgoing' : 'Warmth',
        'Uncompromising': 'Straightforwardness',
        'Immoderation': 'Impulsiveness',
        'Susceptible to stress': 'Sensitivity to stress',
        'Conservation': 'Tradition',
        'Openness to change': 'Stimulation',
        'Hedonism': 'Taking pleasure in life',
        'Self-enhancement': 'Achievement',
        'Self-transcendence': 'Helping others'
      }
    };

    return replacements[lang] || {};
  }

  function changeProfileLabels(data) {
    var clonned = JSON.parse(JSON.stringify(data)),
      replacements = replacementsForLang(globalState.userLocale || OUTPUT_LANG || 'en');

    function walkTree(f, tree) {
      f(tree);
      if (tree.children) {
        tree.children.forEach(walkTree.bind(this, f));
      }
    }

    walkTree(function (node) {
      if (node.id && replacements[node.id.replace('_parent', '')]) {
        node.name = replacements[node.id.replace('_parent', '')];
      }
    }, clonned.tree);

    return clonned;
  }

  function getErrorMessage(error) {
    var message = GENERIC_REQUEST_ERROR;
    if (error.responseJSON && error.responseJSON.error) {
      message = error.responseJSON.error.error;
    }
    return message;
  }

  function defaultProfileOptions(options) {
    var defaults = extend({
      source_type: 'text',
      accept_language: globalState.userLocale || OUTPUT_LANG || 'en',
      include_raw: false
    }, options || {});

//    var lang = globalState.userLocale || OUTPUT_LANG || 'en';

  //  if (defaults.source_type !== 'twitter') {
  //    defaults = extend({language: lang}, defaults);
  //  }

    return defaults;
  }

  function getProfile(data, options) {
    options = defaultProfileOptions(options);

    var
      payload = clone(options),
      url = '/api/profile/' + options.source_type;

    if (options.source_type === 'twitter')
      payload.userId = data;
    else
      payload.text = data;

    $.ajax({
      headers: {
        'csrf-token': $('meta[name="ct"]').attr('content')
      },
      type: 'POST',
      data: payload,
      url: url,
      dataType: 'json',
      success: function(data) {
        $loading.hide();
       // $output.show();
        //scrollTo($outputHeader);
        loadOutput(data);
        loadConsumptionPreferences(data);
      },
      error: function(err) {
        console.error(err);
        $loading.hide();
        $error.show();
        $errorMessage.text(getErrorMessage(err));
      }
    });
  }

  function cpIdSorting(cpid) {
    return ["consumption_preferences_music_rap",
      "consumption_preferences_music_country",
      "consumption_preferences_concerned_environment",
      "consumption_preferences_read_frequency",
      "consumption_preferences_music_r_b",
      "consumption_preferences_volunteer_learning",
      "consumption_preferences_automobile_ownership_cost",
      "consumption_preferences_automobile_safety",
      "consumption_preferences_volunteer",
      "consumption_preferences_movie_romance",
      "consumption_preferences_eat_out",
      "consumption_preferences_music_hip_hop",
      "consumption_preferences_movie_adventure",
      "consumption_preferences_movie_horror",
      "consumption_preferences_influence_brand_name",
      "consumption_preferences_music_live_event",
      "consumption_preferences_clothes_quality",
      "consumption_preferences_automobile_resale_value",
      "consumption_preferences_clothes_style",
      "consumption_preferences_read_motive_enjoyment",
      "consumption_preferences_music_christian_gospel",
      "consumption_preferences_read_motive_information",
      "consumption_preferences_books_entertainment_magazines",
      "consumption_preferences_books_non_fiction",
      "consumption_preferences_start_business",
      "consumption_preferences_read_motive_mandatory",
      "consumption_preferences_gym_membership",
      "consumption_preferences_influence_family_members",
      "consumption_preferences_adventurous_sports",
      "consumption_preferences_movie_musical",
      "consumption_preferences_movie_historical",
      "consumption_preferences_movie_science_fiction",
      "consumption_preferences_volunteering_time",
      "consumption_preferences_spur_of_moment",
      "consumption_preferences_movie_war",
      "consumption_preferences_credit_card_payment",
      "consumption_preferences_movie_drama",
      "consumption_preferences_read_motive_relaxation",
      "consumption_preferences_influence_utility",
      "consumption_preferences_music_playing",
      "consumption_preferences_books_financial_investing",
      "consumption_preferences_fast_food_frequency",
      "consumption_preferences_movie_action",
      "consumption_preferences_influence_online_ads",
      "consumption_preferences_books_autobiographies",
      "consumption_preferences_influence_social_media",
      "consumption_preferences_music_latin",
      "consumption_preferences_music_rock",
      "consumption_preferences_outdoor",
      "consumption_preferences_music_classical",
      "consumption_preferences_movie_documentary",
      "consumption_preferences_clothes_comfort" ].indexOf(cpid);
  }

  function getLikelyToLabel() {
    var lang = globalState.userLocale || OUTPUT_LANG || 'en';
      return "You are likely to______ ";
  }

  function getUnlikelyToLabel() {
    var lang = globalState.userLocale || OUTPUT_LANG || 'en';

      return "You are unlikely to______ ";
  }

  function cpIdMapping(cpid) {

    var lang = globalState.userLocale || OUTPUT_LANG || 'en';
      return {
          "consumption_preferences_automobile_ownership_cost": "be sensitive to ownership cost when buying automobiles",
          "consumption_preferences_automobile_safety": "prefer safety when buying automobiles",
          "consumption_preferences_automobile_resale_value": "prefer resale value when buying automobiles",
          "consumption_preferences_clothes_quality": "prefer quality when buying clothes",
          "consumption_preferences_clothes_style": "prefer style when buying clothes",
          "consumption_preferences_clothes_comfort": "prefer comfort when buying clothes",
          "consumption_preferences_influence_brand_name": "be influenced by brand name when making product purchases",
          "consumption_preferences_influence_utility": "be influenced by product utility when making product purchases",
          "consumption_preferences_influence_online_ads": "be influenced by online ads when making product purchases",
          "consumption_preferences_influence_social_media": "be influenced by social media during product purchases",
          "consumption_preferences_influence_family_members": "be influenced by family when making product purchases",
          "consumption_preferences_spur_of_moment": "indulge in spur of the moment purchases",
          "consumption_preferences_credit_card_payment": "prefer using credit cards for shopping",
          "consumption_preferences_eat_out": "eat out frequently",
          "consumption_preferences_fast_food_frequency": "eat fast food frequently",
          "consumption_preferences_gym_membership": "have a gym membership",
          "consumption_preferences_adventurous_sports": "like adventurous sports",
          "consumption_preferences_outdoor": "like outdoor activities",
          "consumption_preferences_concerned_environment": "be concerned about the environment",
          "consumption_preferences_start_business": "consider starting a business in next few years",
          "consumption_preferences_movie_romance": "like romance movies",
          "consumption_preferences_movie_adventure": "like adventure movies",
          "consumption_preferences_movie_horror": "like horror movies",
          "consumption_preferences_movie_musical": "like musical movies",
          "consumption_preferences_movie_historical": "like historical movies",
          "consumption_preferences_movie_science_fiction": "like science-fiction movies",
          "consumption_preferences_movie_war": "like war movies",
          "consumption_preferences_movie_drama": "like drama movies",
          "consumption_preferences_movie_action": "like action movies",
          "consumption_preferences_movie_documentary": "like documentary movies",
          "consumption_preferences_music_rap": "like rap music",
          "consumption_preferences_music_country": "like country music",
          "consumption_preferences_music_r_b": "like R&B music",
          "consumption_preferences_music_hip_hop": "like hip hop music",
          "consumption_preferences_music_live_event": "attend live musical events",
          "consumption_preferences_music_christian_gospel": "like Christian/gospel music",
          "consumption_preferences_music_playing": "have experience playing music",
          "consumption_preferences_music_latin": "like Latin music",
          "consumption_preferences_music_rock": "like rock music",
          "consumption_preferences_music_classical": "like classical music",
          "consumption_preferences_read_frequency": "read often",
          "consumption_preferences_read_motive_enjoyment": "read for enjoyment",
          "consumption_preferences_read_motive_information": "read for information",
          "consumption_preferences_books_entertainment_magazines": "read entertainment magazines",
          "consumption_preferences_books_non_fiction": "read non-fiction books",
          "consumption_preferences_read_motive_mandatory": "do mandatory reading only",
          "consumption_preferences_read_motive_relaxation": "read for relaxation",
          "consumption_preferences_books_financial_investing": "read financial investment books",
          "consumption_preferences_books_autobiographies": "read autobiographical books",
          "consumption_preferences_volunteer": "volunteer for social causes",
          "consumption_preferences_volunteering_time": "have spent time volunteering",
          "consumption_preferences_volunteer_learning": "volunteer to learn about social causes",
      }[cpid]
    }

  var consumptionPrefMusic = new Set(["consumption_preferences_music_rap",
    "consumption_preferences_music_country",
    "consumption_preferences_music_r_b",
    "consumption_preferences_music_hip_hop",
    "consumption_preferences_music_live_event",
    "consumption_preferences_music_playing",
    "consumption_preferences_music_latin",
    "consumption_preferences_music_rock",
    "consumption_preferences_music_classical" ]);

  var consumptionPrefMovie = new Set(["consumption_preferences_movie_romance",
    "consumption_preferences_movie_adventure",
    "consumption_preferences_movie_horror",
    "consumption_preferences_movie_musical",
    "consumption_preferences_movie_historical",
    "consumption_preferences_movie_science_fiction",
    "consumption_preferences_movie_war",
    "consumption_preferences_movie_drama",
    "consumption_preferences_movie_action",
    "consumption_preferences_movie_documentary"]);

  function addIfAllowedReducer(accumulator, toadd) {
    if (consumptionPrefMusic.has(toadd.cpid)) {
      if (accumulator.reduce(function(k,v) {
            return consumptionPrefMusic.has(v.cpid) ? k + 1 : k;
          },0) < 1) {
        accumulator.push(toadd);
      }
    } else if (consumptionPrefMovie.has(toadd.cpid)) {

      if(accumulator.reduce(function(k,v) {
          return consumptionPrefMovie.has(v.cpid) ? k + 1 : k;
        },0) < 1) {
        accumulator.push(toadd);
      }
    } else {
      accumulator.push(toadd);
    }
    return accumulator;
  }

  function sortIdxComparator(a, b) {
    if (a < b) {
      return -1;
    }

    if (a > b) {
      return 1;
    }

    if (a === b) {
      return 0;
    }
  }

  function loadConsumptionPreferences(data) {
      var likedata="";
    var cpsect = $(".output-summary--consumption-behaviors--section")
    var behaviors = $(".output-summary--consumption-behaviors--section")
    if (data.consumption_preferences) {
      var likelycps = data.consumption_preferences.reduce(function(k,v) {
        v.consumption_preferences.map(function(child_item) {
          if (child_item.score === 1) {
            k.push({ name: cpIdMapping(child_item.consumption_preference_id),
              idx: cpIdSorting(child_item.consumption_preference_id),
              cpid: child_item.consumption_preference_id
            });
          }
        });
        return k;
      },[]);

      var unlikelycps = data.consumption_preferences.reduce(function(k,v) {
        v.consumption_preferences.map(function(child_item) {
          if (child_item.score === 0) {
            k.push({ name: cpIdMapping(child_item.consumption_preference_id),
              idx: cpIdSorting(child_item.consumption_preference_id),
              cpid: child_item.consumption_preference_id
            });
          }
        });
        return k;
      },[]);
      behaviors.html("");
      behaviors.append("<h4 class=\"base--h4\">" + getLikelyToLabel() + "</h4>");
        likedata="<h4 class=\"base--h4\">" + getLikelyToLabel() + "</h4>";
      behaviors.append("<div class=\"output-summary--likely-behaviors\">");
        likedata=likedata + "<div class=\"output-summary--likely-behaviors\">";
      likelycps.sort(sortIdxComparator).reduce(addIfAllowedReducer,[]).slice(0,3).map(function(item) {
        behaviors.append("<div class=\"output-summary--behavior output-summary--behavior_POSITIVE\"><i class=\"icon icon-likely\"></i>" + item.name + "</div>\n");
        likedata=likedata + "<div class=\"output-summary--behavior output-summary--behavior_POSITIVE\"><i class=\"icon icon-likely\"></i>" + item.name + "</div>\n";
       });
      behaviors.append("</div>");
        likedata=likedata + "</div>";
      behaviors.append("<h4 class=\"base--h4\">" + getUnlikelyToLabel() + "</h4>");
        likedata=likedata + "<h4 class=\"base--h4\">" + getUnlikelyToLabel() + "</h4>";
      behaviors.append("<div class=\"output-summary--unlikely-behaviors\">");
        likedata=likedata + "<div class=\"output-summary--unlikely-behaviors\">";
      unlikelycps.sort(sortIdxComparator).reduce(addIfAllowedReducer,[]).slice(0,3).map(function(item) {
      behaviors.append("<div class=\"output-summary--behavior output-summary--behavior_NEGATIVE\"><i class=\"icon icon-not-likely\"></i>" + item.name + "</div>\n");
      likedata=likedata + "<div class=\"output-summary--behavior output-summary--behavior_NEGATIVE\"><i class=\"icon icon-not-likely\"></i>" + item.name + "</div>\n";
      });
      behaviors.append("</div>");
        likedata=likedata + "</div>";
        localStorage.setItem('gameStorage5', JSON.stringify(assembleTextSummary(likedata)));
        likelydata = JSON.parse(localStorage.getItem('gameStorage5'));
      cpsect.show();

    } else {
      cpsect.hide();
    }behaviors
  }

  function loadOutput(rawData) {
    var data = changeProfileLabels(rawData);
    setTextSummary(data, globalState.userLocale || OUTPUT_LANG || 'en');
    loadWordCount(data);
    var big5Data = data.tree.children[0].children[0].children;
    var needsData = data.tree.children[1].children[0].children;
    var valuesData = data.tree.children[2].children[0].children;
    var big5Data_curated = big5Data.map(function(obj) {
      var newObj = {};
      newObj.name = obj.name;
      newObj.id = obj.id;
      newObj.score = Math.round(obj.percentage * 100);
      newObj.children = obj.children.map(function(obj2) {
        var newObj2 = {};
        newObj2.name = obj2.name;
        newObj2.id = obj2.id;
        newObj2.score = Math.round(obj2.percentage * 100);
        return newObj2;
      }).sort(function(a, b) {
        return b.score - a.score;
      });
      return newObj;
    });

    var needsData_curated = needsData.map(function(obj) {
      var newObj = {};
      newObj.id = obj.id;
      newObj.name = obj.name;
      newObj.score = Math.round(obj.percentage * 100);
      return newObj;
    });

    var valuesData_curated = valuesData.map(function(obj) {
      var newObj = {};
      newObj.id = obj.id;
      newObj.name = obj.name;
      newObj.score = Math.round(obj.percentage * 100);
      return newObj;
    });

    function mapObject(o, f) {
      var u = {};
      Object.keys(o).forEach(function (key) {
        u[key] = f(key, o[key]);
      });
      return u;
    }

    function toHtml(markdownDict) {
      return mapObject(markdownDict, function(key, value) {
        return renderMarkdown(value);
      });
    }

    var descriptions = new PersonalityTraitDescriptions({
      format: 'markdown',
      locale: globalState.userLocale || OUTPUT_LANG || 'en'
    });

    var tooltips = function (traitId) {
      return renderMarkdown(descriptions.description(traitId));
    };

    updateJSON(rawData);

    globalState.currentProfile = rawData;

  }


  function loadWordCount(data) {
    $('.output--word-count-number').text(data.word_count);
    $('.output--word-count-message').removeClass('show');
    if(data.processed_lang === 'en') {
     if (data.word_count >= 3000)
       $('.output--word-count-message_VERY-STRONG_NEW_MODEL').addClass('show');
     else if (data.word_count < 3000 && data.word_count >= 1200)
       $('.output--word-count-message_STRONG_NEW_MODEL').addClass('show');
     else if (data.word_count < 1200 && data.word_count >= 600)
       $('.output--word-count-message_DECENT_NEW_MODEL').addClass('show');
     else
       $('.output--word-count-message_WEAK_NEW_MODEL').addClass('show');
    } else {
     if (data.word_count > 6000)
       $('.output--word-count-message_VERY-STRONG').addClass('show');
     else if (data.word_count <= 6000 && data.word_count >= 3500)
       $('.output--word-count-message_STRONG').addClass('show');
     else if (data.word_count < 3500 && data.word_count >= 1500)
       $('.output--word-count-message_DECENT').addClass('show');
     else
       $('.output--word-count-message_WEAK').addClass('show');
    }
  }
  function resetOutputs() {
    $error.hide();
    $loading.hide();
    selectDefaultLanguage();
  }

  function isPositive(behavior) {
    return behavior.score > 0.60;
  }

  function isNegative(behavior) {
    return behavior.score < 0.40;
  }

  function top3(behavior, index) {
    return index < 3;
  }

  function sortScores(obj1, obj2) {
    return obj2.score - obj1.score;
  }

  function sortScoresDESC(obj1, obj2) {
    return obj2.score - obj1.score;
  }

  function sortScoresASC(obj1, obj2) {
    return obj1.score - obj2.score;
  }

  function preloadSampleTexts(callback) {
    var shared = { done : 0 };
    SAMPLE_TEXTS.forEach(function(name) {
      $Q.get('data/text/' + name + '.txt')
        .then(function (text) {
          shared.done = shared.done + 1;
          textCache[name] = text;

          if (shared.done == SAMPLE_TEXTS.length && callback) {
            callback();
          }
        })
        .done();
    });
  }

  function loadSampleText(name) {
    if (textCache[name]) {
      setTextSample(textCache[name], true);
      updateWordCount();
    } else {
      $Q.get('data/text/' + name + '.txt')
        .then(function (text) {
          setTextSample(text, true);
          textCache[name] = text;
        })
        .then(function() {
          updateWordCount();
        })
        .done();
    }
  }

  function showHiddenLanguages() {
    var enableLang = {
      'ar' : function () {
        $('label[for="text-ar"]').show();
        $('label[for="lang-ar"]').show();
      }
    };

    Object.keys($.url().param())
      .filter(function(p) { return p.slice(0,5) === 'lang-'; })
      .map(function(p) { return p.slice(5,p.length); })
      .forEach(function(lang) {
        if (enableLang[lang]) {
          enableLang[lang]();
        }
      });
  }



  function initialize() {
    $('input[name="twitter"]:first').attr('checked', true);
    $('input[name="text-sample"]:first').attr('checked', true);

    globalState.selectedTwitterUser = $('input[name="twitter"]:first').val();
    showHiddenLanguages();
    preloadSampleTexts(function () {
      loadSampleText(globalState.selectedSample);
    });
    //registerHandlers();


    selectDefaultLanguage();
  }

  function selectDefaultLanguage(){
    if (['en', 'es', 'ja', 'ar'].indexOf(globalState.userLocale) >= 0) {
      $('#lang-' + globalState.userLocale).prop('checked', true).trigger('click');
    }
  }
  function countWords(str) {
    return str.split(' ').length;
  }

  function updateWordCount() {
    //$inputWordCount.text(countWords($inputTextArea.val()));
  }
  function updateJSON(results) {
    $outputJSONCode.html(JSON.stringify(results['raw_v3_response'], null, 2));
    $('.code--json').each(function (i,b) { hljs.highlightBlock(b);});

      localStorage.setItem('gameStorage', JSON.stringify(results['raw_v3_response']));
      obj = JSON.parse(localStorage.getItem('gameStorage'));
      window.location.href = './result';
  }
  initialize()

});
