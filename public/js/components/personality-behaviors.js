(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.PersonalityBehaviors = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

'use strict';

module.exports = require('./lib/personality-behaviors');

},{"./lib/personality-behaviors":9}],2:[function(require,module,exports){
module.exports=[
  {
    "id": "scenario.environmental_products",
    "industries": [
      "industry.retail"
    ],
    "categories": [
      "category.shopping"
    ],
    "persona": [
      "persona.greenie"
    ],
    "traits": [
      {
        "id": "big5.trait.conscientiousness",
        "target": "H"
      },
      {
        "id": "big5.trait.extraversion",
        "target": "H"
      },
      {
        "id": "big5.trait.agreeableness",
        "target": "H"
      }
    ]
  },
  {
    "id": "scenario.luxury_goods",
    "industries": [
      "industry.retail"
    ],
    "categories": [
      "category.shopping"
    ],
    "persona": [
      "persona.brand_lover"
    ],
    "traits": [
      {
        "id": "big5.trait.conscientiousness",
        "target": "H"
      },
      {
        "id": "big5.trait.agreeableness",
        "target": "H"
      },
      {
        "id": "values.trait.conservation",
        "target": "H"
      },
      {
        "id": "values.trait.self-enhancement",
        "target": "H"
      },
      {
        "id": "needs.trait.love",
        "target": "H"
      },
      {
        "id": "needs.trait.ideal",
        "target": "H"
      },
      {
        "id": "values.trait.hedonism",
        "target": "H"
      }
    ]
  },
  {
    "id": "scenario.coupon_redemption",
    "industries": [
      "industry.retail"
    ],
    "categories": [
      "category.shopping"
    ],
    "persona": [
      "persona.deal_seeker"
    ],
    "traits": [
      {
        "id": "big5.facet.conscientiousness.cautiousness",
        "target": "H"
      },
      {
        "id": "big5.facet.conscientiousness.orderliness",
        "target": "H"
      },
      {
        "id": "big5.facet.conscientiousness.self-discipline",
        "target": "H"
      },
      {
        "id": "big5.facet.neuroticism.immoderation",
        "target": "L"
      }
    ]
  },
  {
    "id": "scenario.healthy_food",
    "industries": [
      "industry.food"
    ],
    "categories": [
      "category.eating"
    ],
    "persona": [
      "persona.health_enthusiast"
    ],
    "traits": [
      {
        "id": "big5.trait.conscientiousness",
        "target": "H"
      },
      {
        "id": "big5.facet.conscientiousness.self-discipline",
        "target": "H"
      },
      {
        "id": "big5.facet.openness.artistic_interests",
        "target": "H"
      },
      {
        "id": "big5.facet.neuroticism.vulnerability",
        "target": "L"
      },
      {
        "id": "big5.facet.neuroticism.immoderation",
        "target": "L"
      },
      {
        "id": "big5.trait.neuroticism",
        "target": "L"
      }
    ]
  },
  {
    "id": "scenario.adventure_sports",
    "industries": [
      "industry.sports"
    ],
    "categories": [
      "category.sports_leisure"
    ],
    "persona": [
      "persona.risk_taker"
    ],
    "traits": [
      {
        "id": "big5.trait.openness",
        "target": "H"
      },
      {
        "id": "big5.facet.openness.adventurousness",
        "target": "H"
      },
      {
        "id": "big5.trait.conscientiousness",
        "target": "L"
      },
      {
        "id": "big5.trait.extraversion",
        "target": "H"
      },
      {
        "id": "big5.facet.extraversion.excitement-seeking",
        "target": "H"
      },
      {
        "id": "big5.trait.neuroticism",
        "target": "H"
      }
    ]
  },
  {
    "id": "scenario.financial_risk",
    "industries": [
      "industry.finance"
    ],
    "categories": [
      "category.investment"
    ],
    "persona": [
      "persona.risk_taker"
    ],
    "traits": [
      {
        "id": "big5.trait.conscientiousness",
        "target": "L"
      },
      {
        "id": "big5.trait.extraversion",
        "target": "H"
      },
      {
        "id": "big5.trait.agreeableness",
        "target": "L"
      },
      {
        "id": "big5.trait.neuroticism",
        "target": "L"
      }
    ]
  },
  {
    "id": "scenario.avoid_risk",
    "industries": [
      "industry.no_industry"
    ],
    "categories": [
      "category.risk"
    ],
    "persona": [
      "persona.risk_taker"
    ],
    "traits": [
      {
        "id": "big5.trait.conscientiousness",
        "target": "H"
      },
      {
        "id": "big5.trait.extraversion",
        "target": "L"
      },
      {
        "id": "big5.trait.agreeableness",
        "target": "H"
      },
      {
        "id": "big5.trait.neuroticism",
        "target": "H"
      }
    ]
  },
  {
    "id": "scenario.recreate_risk",
    "hidden": true,
    "industries": [
      "industry.healthcare"
    ],
    "categories": [
      "category.risk"
    ],
    "persona": [
      "persona.risk_taker"
    ],
    "traits": [
      {
        "id": "big5.trait.conscientiousness",
        "target": "L"
      },
      {
        "id": "big5.trait.extraversion",
        "target": "H"
      },
      {
        "id": "big5.trait.agreeableness",
        "target": "L"
      },
      {
        "id": "big5.trait.neuroticism",
        "target": "L"
      }
    ]
  },
  {
    "id": "scenario.health_risk",
    "industries": [
      "industry.healthcare"
    ],
    "categories": [
      "category.risk"
    ],
    "persona": [
      "persona.risk_taker"
    ],
    "traits": [
      {
        "id": "big5.trait.conscientiousness",
        "target": "L"
      },
      {
        "id": "big5.trait.extraversion",
        "target": "H"
      },
      {
        "id": "big5.trait.agreeableness",
        "target": "L"
      },
      {
        "id": "big5.trait.neuroticism",
        "target": "H"
      }
    ]
  },
  {
    "id": "scenario.career_risk",
    "industries": [
      "industry.no_industry"
    ],
    "categories": [
      "category.risk"
    ],
    "persona": [
      "persona.risk_taker"
    ],
    "traits": [
      {
        "id": "big5.trait.conscientiousness",
        "target": "L"
      },
      {
        "id": "big5.trait.agreeableness",
        "target": "L"
      },
      {
        "id": "big5.trait.neuroticism",
        "target": "L"
      }
    ]
  },
  {
    "id": "scenario.excercise",
    "industries": [
      "industry.fitness"
    ],
    "categories": [
      "category.living"
    ],
    "persona": [
      "persona.health_enthusiast"
    ],
    "traits": [
      {
        "id": "big5.trait.conscientiousness",
        "target": "H"
      },
      {
        "id": "big5.trait.extraversion",
        "target": "H"
      },
      {
        "id": "big5.trait.neuroticism",
        "target": "L"
      }
    ]
  },
  {
    "id": "scenario.adaptability",
    "hidden": true,
    "industries": [
      "industry.no_industry"
    ],
    "categories": [
      "category.work"
    ],
    "persona": [
      "persona.adapter"
    ],
    "traits": [
      {
        "id": "big5.trait.conscientiousness",
        "target": "H"
      },
      {
        "id": "big5.trait.extraversion",
        "target": "H"
      }
    ]
  },
  {
    "id": "scenario.respond_to_strangers",
    "industries": [
      "industry.media"
    ],
    "categories": [
      "category.social_media"
    ],
    "persona": [
      "persona.responder"
    ],
    "traits": [
      {
        "id": "big5.facet.extraversion.excitement-seeking",
        "target": "H"
      },
      {
        "id": "big5.facet.extraversion.friendliness",
        "target": "H"
      },
      {
        "id": "big5.facet.extraversion.activity_level",
        "target": "H"
      },
      {
        "id": "big5.facet.extraversion.gregariousness",
        "target": "H"
      },
      {
        "id": "big5.facet.agreeableness.trust",
        "target": "H"
      },
      {
        "id": "big5.facet.agreeableness.morality",
        "target": "H"
      },
      {
        "id": "big5.trait.extraversion",
        "target": "H"
      },
      {
        "id": "big5.trait.agreeableness",
        "target": "H"
      },
      {
        "id": "big5.facet.conscientiousness.cautiousness",
        "target": "L"
      },
      {
        "id": "big5.facet.neuroticism.anxiety",
        "target": "L"
      }
    ]
  },
  {
    "id": "scenario.retweet",
    "industries": [
      "industry.media"
    ],
    "categories": [
      "category.social_media"
    ],
    "persona": [
      "persona.broadcaster"
    ],
    "traits": [
      {
        "id": "big5.trait.openness",
        "target": "H"
      },
      {
        "id": "big5.facet.agreeableness.modesty",
        "target": "H"
      },
      {
        "id": "big5.facet.extraversion.friendliness",
        "target": "H"
      }
    ]
  },
  {
    "id": "scenario.click_ad",
    "industries": [
      "industry.travel"
    ],
    "categories": [
      "category.ad_targeting"
    ],
    "persona": [
      "persona.ad_clicker"
    ],
    "traits": [
      {
        "id": "big5.trait.neuroticism",
        "target": "L"
      },
      {
        "id": "big5.trait.openness",
        "target": "H"
      }
    ]
  },
  {
    "id": "scenario.follow_account",
    "industries": [
      "industry.travel"
    ],
    "categories": [
      "category.ad_targeting"
    ],
    "persona": [
      "persona.ad_clicker"
    ],
    "traits": [
      {
        "id": "big5.trait.neuroticism",
        "target": "L"
      },
      {
        "id": "big5.trait.openness",
        "target": "H"
      }
    ]
  }
]

},{}],3:[function(require,module,exports){
module.exports=[
  {
    "id": "H",
    "name": "High",
    "score": "p"
  },
  {
    "id": "L",
    "name": "Low",
    "score": "1 - p"
  }
]

},{}],4:[function(require,module,exports){


'use strict';

module.exports = {
  'en': require('./en'),
  'es': require('./es'),
  'ja': require('./ja')
};

},{"./en":5,"./es":6,"./ja":8}],5:[function(require,module,exports){
module.exports={
  "scenarios": [
    {
      "id": "scenario.environmental_products",
      "name": "Environmentally Conscious Products",
      "verb": "Buy eco-friendly",
      "tooltip": "People who exhibit more **agreeableness**, **extraversion**, and **conscientiousness** are more likely to purchase eco-friendly products. [How did we get this?](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/personality-insights/applied.shtml#otherEnvironment)"
    },
    {
      "id": "scenario.luxury_goods",
      "name": "Luxury Goods",
      "verb": "Treat Yourself",
      "tooltip": "People who exhibit more **conscientiousness**, **conservation**, **self-enhancement**, and **agreeableness**; a need for **love** and the **ideal**; and value **hedonism** are likely to prefer luxury brands. [How did we get this?](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/personality-insights/applied.shtml#IBMbrand)"
    },
    {
      "id": "scenario.coupon_redemption",
      "name": "Coupon Redemption",
      "verb": "Use a coupon",
      "tooltip" : "People who exhibit more **orderliness**, **self-discipline**, **cautiousness**, and **moderation** are likely to redeem coupons. [How did we get this?](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/personality-insights/applied.shtml#IBMcampaign)"
    },
    {
      "id": "scenario.healthy_food",
      "name": "Healthy Food",
      "verb": "Buy healthy foods",
      "tooltip": "People who exhibit more **conscientiousness**, **self-discipline**, and even **artistic interests** than others are more likely to eat health foods. However, more **susceptibility to stress**, **emotional range**, and **immoderation** decreases that likelihood. [How did we get this?](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/personality-insights/applied.shtml#otherHealth)"
    },
    {
      "id": "scenario.adventure_sports",
      "name": "Adventure Sports",
      "verb": "Do adventure sports",
      "tooltip": "People who exhibit more **extraversion**, **openness**, **excitement-seeking**, **adventurousness** and **emotional range** than others are likely to engage in adventure sports. Exhibiting more **conscientiousness** reduces the likelihood. [How did we get this?](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/personality-insights/applied.shtml#otherRisk)"
    },
    {
      "id": "scenario.financial_risk",
      "name": "Financial Risk",
      "verb": "Take financial risks",
      "tooltip": "People with more **openness to experiences** than others are likely to make risky investments. Showing more **emotional range** reduces that likelihood. [How did we get this?](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/personality-insights/applied.shtml#otherRisk)"
    },
    {
      "id": "scenario.recreate_risk",
      "name": "Recreate Risk",
      "verb": "Recreating risks",
      "tooltip": "No description available."
    },
    {
      "id": "scenario.avoid_risk",
      "name": "Avoid Risk",
      "verb": "Avoid taking risks",
      "tooltip": "People who exhibit more **agreeableness**, **emotional range** and **conscientiousness** than others are likely to avoid taking risks. Exhibiting more **extraversion** increases the likelihood of someone taking risks. [How did we get this?](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/personality-insights/applied.shtml#otherRisk)"
    },
    {
      "id": "scenario.health_risk",
      "name": "Health Risk",
      "verb": "Put health at risk",
      "tooltip": "People who exhibit more **extraversion**, **emotional range** and less **agreeableness** than others are likely to put their health at risk. Exhibiting more **conscientiousness** decreases this likelihood. [How did we get this?](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/personality-insights/applied.shtml#otherRisk)"
    },
    {
      "id": "scenario.career_risk",
      "name": "Career Risk",
      "verb": "Change careers",
      "tooltip": "People who exhibit more **conscientiousness**, **extraversion**, and **openness** than others are more likely to adapt to changes in career. [How did we get this?](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/personality-insights/applied.shtml#otherProfessional)"
    },
    {
      "id": "scenario.excercise",
      "name": "Exercise",
      "verb": "Spend on health and fitness",
      "tooltip": "People who exhibit more **extraversion** and **conscientiousness** than others are more likely to exercise often. More **emotional range** reduces that likelihood. [How did we get this?](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/personality-insights/applied.shtml#otherHealth)"
    },
    {
      "id": "scenario.adaptability",
      "name": "Adaptability",
      "verb": "Adapt to situations",
      "tooltip": "No description available."
    },
    {
      "id": "scenario.respond_to_strangers",
      "name": "Willingness to respond to strangers",
      "verb": "Reply on social media",
      "tooltip": "People who exhibit more **excitement-seeking**, **friendliness**, **activity levels**, **gregariousness**, **trust**, **morality**, **extraversion**, and **agreeableness** than others are likely to respond to social media posts. People who exhibit more **cautiousness** and **anxiety** are not. [How did we get this?](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/personality-insights/applied.shtml#IBMrespond)"
    },
    {
      "id": "scenario.retweet",
      "name": "Retweet",
      "verb": "Re-share on social media",
      "tooltip": "People who exhibit more **modesty**, **openness**, and **friendliness** traits than others are likely to spread information. [How did we get this?](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/personality-insights/applied.shtml#IBMretweet)"
    },
    {
      "id": "scenario.click_ad",
      "name": "Click an Ad",
      "verb": "Click on an ad",
      "tooltip": "People who exhibit more **openness**, but less **emotional range** than others are more likely to click on an ad. For the top 10% of these people, click rate increased from 6.8% to 11.3%. [How did we get this?](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/personality-insights/applied.shtml#IBMtarget)"
    },
    {
      "id": "scenario.follow_account",
      "name": "Follow account",
      "verb": "Follow on social media",
      "tooltip": "People who exhibit more **openness**, but less **emotional range** than others are more likely to follow a social media account. For the top 10% of these people, follow rate increased from 4.7% to 8.8% percent. [How did we get this?](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/personality-insights/applied.shtml#IBMtarget)"
    }
  ],
  "industries": [
    {
      "id": "industry.retail",
      "name": "Retail"
    },
    {
      "id": "industry.food",
      "name": "Food"
    },
    {
      "id": "industry.sports",
      "name": "Sports"
    },
    {
      "id": "industry.finance",
      "name": "Financial"
    },
    {
      "id": "industry.healthcare",
      "name": "Healthcare"
    },
    {
      "id": "industry.fitness",
      "name": "Fitness"
    },
    {
      "id": "industry.media",
      "name": "Media"
    },
    {
      "id": "industry.travel",
      "name": "Travel"
    },
    {
      "id": "industry.no_industry",
      "name": "No Industry"
    }
  ],
  "categories": [
    {
      "id": "category.shopping",
      "name": "Shopping"
    },
    {
      "id": "category.eating",
      "name": "Eating"
    },
    {
      "id": "category.sports_leisure",
      "name": "Sports and Leisure"
    },
    {
      "id": "category.investment",
      "name": "Investments"
    },
    {
      "id": "category.risk",
      "name": "Risk"
    },
    {
      "id": "category.living",
      "name": "Living"
    },
    {
      "id": "category.work",
      "name": "Work"
    },
    {
      "id": "category.social_media",
      "name": "Social Media"
    },
    {
      "id": "category.ad_targeting",
      "name": "Ad Targeting"
    }
  ],
  "personas": [
    {
      "id": "persona.greenie",
      "name": "Green Lover"
    },
    {
      "id": "persona.brand_lover",
      "name": "Brand Lover"
    },
    {
      "id": "persona.deal_seeker",
      "name": "Deal Seeker"
    },
    {
      "id": "persona.health_enthusiast",
      "name": "Health Enthusiast"
    },
    {
      "id": "persona.risk_taker",
      "name": "Risk Taker"
    },
    {
      "id": "persona.adapter",
      "name": "Adapter"
    },
    {
      "id": "persona.responder",
      "name": "Responder"
    },
    {
      "id": "persona.broadcaster",
      "name": "Broadcaster"
    },
    {
      "id": "persona.follower",
      "name" : "Follower"
    },
    {
      "id": "persona.ad_clicker",
      "name": "Ad Clicker"
    }
  ]
}

},{}],6:[function(require,module,exports){
module.exports={
  "scenarios": [
    {
      "id": "scenario.environmental_products",
      "name": "Productos Conscientes con el Medioambiente ",
      "verb": "Comprar ecológico",
      "tooltip": "Las personas que muestran más **amabilidad**, **extroversión**, y **responsabilidad** que otras, son más propensas a comprar productos ecológicos. [¿Cómo obtuvimos esto?](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/personality-insights/applied.shtml#otherEnvironment)"
    },
    {
      "id": "scenario.luxury_goods",
      "name": "Bienes Lujosos ",
      "verb": "Darse Gustos",
      "tooltip": "Las personas que muestran más **responsabilidad**, **conservación**, **superación personal**, y **amabilidad**; necesidades **amor** e **ideal**; y el valor **hedonismo** son más propensas que otras a preferir marcas lujosas. [¿Cómo obtuvimos esto?](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/personality-insights/applied.shtml#IBMbrand)"
    },
    {
      "id": "scenario.coupon_redemption",
      "name": "Uso de Cupones",
      "verb": "Usar un cupón",
      "tooltip" : " Las personas que muestran más **disciplina**, **autodisciplina**, **cautela**, y **moderación** que otras, son propensas a usar cupones. [¿Cómo obtuvimos esto?](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/personality-insights/applied.shtml#IBMcampaign)"
    },
    {
      "id": "scenario.healthy_food",
      "name": "Alimentos Saludables",
      "verb": "Comprar alimentos saludables",
      "tooltip": "Las personas que muestran más **responsabilidad**, **autodisciplina**, e incluso **intereses artísticos** que otras, son más propensas a comer alimentos saludables. Sin embargo, más **susceptibilidad al estrés**, **rango emocional**, y **desmesura** disminuyen esa probabilidad. [¿Cómo obtuvimos esto?](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/personality-insights/applied.shtml#otherHealth)"
    },
    {
      "id": "scenario.adventure_sports",
      "name": "Deportes de Aventura",
      "verb": "Practicar deportes de aventura",
      "tooltip": "Las personas que muestran más **extroversión**, **apertura a nuevas experiencias**, **búsqueda de emociones**, **audacia** y **rango emocional** que otras, son propensas a comprometerse con deportes de aventura. Mostrar más **responsabilidad** disminuye esa probabilidad. [¿Cómo obtuvimos esto?](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/personality-insights/applied.shtml#otherRisk)"
    },
    {
      "id": "scenario.financial_risk",
      "name": "Riesgo Financiero",
      "verb": "Correr riesgos financieros",
      "tooltip": "Las personas que muestran más **apertura a experiencias** que otras, raramente hacen inversiones de riesgo. Mostrar más **rango emocional** reduce esa probabilidad. [¿Cómo obtuvimos esto?](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/personality-insights/applied.shtml#otherRisk)"
    },
    {
      "id": "scenario.recreate_risk",
      "name": "Recrear Riesgo",
      "verb": "Recrear riesgos",
      "tooltip": "Descripción no disponible."
    },
    {
      "id": "scenario.avoid_risk",
      "name": "Evitar Riesgo",
      "verb": "Evitar correr riesgos",
      "tooltip": "Las personas que muestran más **amabilidad**, **rango emocional** y **responsabilidad** que otras, son más propensas a evitar correr riesgos. Mostrar más **extroversión** aumenta la probabilidad de correr riesgos. [¿Cómo obtuvimos esto?](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/personality-insights/applied.shtml#otherRisk)"
    },
    {
      "id": "scenario.health_risk",
      "name": "Riesgo de Salud ",
      "verb": "Poner la salud en riesgo",
      "tooltip": "Las personas que muestran más **extroversión**, **rango emocional** y menos **amabilidad** que otras, son propensas a poner su salud en riesgo. Mostrar más **responsabilidad** disminuye esta probabilidad. [¿Cómo obtuvimos esto?](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/personality-insights/applied.shtml#otherRisk)"
    },
    {
      "id": "scenario.career_risk",
      "name": "Riesgo de Carrera ",
      "verb": "Cambiar de carrera",
      "tooltip": "Las personas que muestran más **responsabilidad**, **extroversión**, and **apertura a experiencias** que otras, son más propensas a adaptarse a cambios en su carrera. [¿Cómo obtuvimos esto?](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/personality-insights/applied.shtml#otherProfessional)"
    },
    {
      "id": "scenario.excercise",
      "name": "Ejercicio",
      "verb": "Gastar en salud y actividad física",
      "tooltip": "Las personas que muestran más **extroversión** y **responsabilidad** que otras, son más propensas a ejercitar con frecuencia. Más **rango emocional** reduce esa probabilidad. [¿Cómo obtuvimos esto?](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/personality-insights/applied.shtml#otherHealth)"
    },
    {
      "id": "scenario.adaptability",
      "name": "Adaptabilidad",
      "verb": "Adaptarse a situaciones",
      "tooltip": "Descripción no disponible."
    },
    {
      "id": "scenario.respond_to_strangers",
      "name": "Deseo por Responder a Extraños",
      "verb": "Responder en redes sociales",
      "tooltip": "Las personas que muestran más **búsqueda de emociones**, **simpatía**, **nivel de actividad**, **sociabilidad**, **confianza**, **moral**, **extroversión**, y **amabilidad** que otras, son más propensas a responder publicaciones en redes sociales. Las personas que muestran más **cautela** y **ansiedad** no lo son. [¿Cómo obtuvimos esto?](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/personality-insights/applied.shtml#IBMrespond)"
    },
    {
      "id": "scenario.retweet",
      "name": "Retweet",
      "verb": "Compartir publicaciones de otros en redes sociales",
      "tooltip": "Las personas que muestran más **modestia**, **apertura a experiencias**, y **simpatía** que otras, son más propensas a divulgar información. [¿Cómo obtuvimos esto?](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/personality-insights/applied.shtml#IBMretweet)"
    },
    {
      "id": "scenario.click_ad",
      "name": "Clickear una Publicidad",
      "verb": "Clickear una publicidad",
      "tooltip": "Las personas que muestran más **apertura a experiencias**, pero menos **rango emocional** que otras, son más propensas a clickear en una publicidad. Para el 10% más alto de estas personas, la tasa de clicks aumenta de 6.8% a 11.3%. [¿Cómo obtuvimos esto?](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/personality-insights/applied.shtml#IBMtarget)"
    },
    {
      "id": "scenario.follow_account",
      "name": "Seguir una Cuenta",
      "verb": "Seguir en redes sociales",
      "tooltip": "Las personas que muestran más **apertura a experiencias** pero menos **rango emocional** que otras son más propensas a seguir una cuenta en redes. Para el 10% más alto de estas personas, la tasa de seguimiento aumenta de 4.7% a 8.8%. [¿Cómo obtuvimos esto?](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/personality-insights/applied.shtml#IBMtarget)"
    }
  ],
  "industries": [
    {
      "id": "industry.retail",
      "name": "Venta"
    },
    {
      "id": "industry.food",
      "name": "Comida"
    },
    {
      "id": "industry.sports",
      "name": "Deporte"
    },
    {
      "id": "industry.finance",
      "name": "Finanza"
    },
    {
      "id": "industry.healthcare",
      "name": "Salud"
    },
    {
      "id": "industry.fitness",
      "name": "Actividad física"
    },
    {
      "id": "industry.media",
      "name": "Medios"
    },
    {
      "id": "industry.travel",
      "name": "Viaje"
    },
    {
      "id": "industry.no_industry",
      "name": "Sin industria"
    }
  ],
  "categories": [
    {
      "id": "category.shopping",
      "name": "Compras"
    },
    {
      "id": "category.eating",
      "name": "Comida"
    },
    {
      "id": "category.sports_leisure",
      "name": "Deportes y Tiempo libre"
    },
    {
      "id": "category.investment",
      "name": "Inversiones"
    },
    {
      "id": "category.risk",
      "name": "Riesgo"
    },
    {
      "id": "category.living",
      "name": "Vida"
    },
    {
      "id": "category.work",
      "name": "Trabajo"
    },
    {
      "id": "category.social_media",
      "name": "Redes Sociales"
    },
    {
      "id": "category.ad_targeting",
      "name": "Segmentación de Anuncios"
    }
  ],
  "personas": [
    {
      "id": "persona.greenie",
      "name": "Amante Verde"
    },
    {
      "id": "persona.brand_lover",
      "name": "Amante de Marca"
    },
    {
      "id": "persona.deal_seeker",
      "name": "Buscador de Tratos"
    },
    {
      "id": "persona.health_enthusiast",
      "name": "Entusiasta de Salud"
    },
    {
      "id": "persona.risk_taker",
      "name": "Tomador de Riesgos"
    },
    {
      "id": "persona.adapter",
      "name": "Adaptador"
    },
    {
      "id": "persona.responder",
      "name": "Respondedor"
    },
    {
      "id": "persona.broadcaster",
      "name": "Anunciador"
    },
    {
      "id": "persona.follower",
      "name" : "Seguidor"
    },
    {
      "id": "persona.ad_clicker",
      "name": "Clickeador de Publicidades "
    }
  ]
}
},{}],7:[function(require,module,exports){


'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ = require('underscore'),
    contains = _.contains,
    keys = _.keys;

var byId = require('../utilities/list-of-objects').byId;

var dictionaries = require('./dictionaries');

var TypeData = function () {
  function TypeData(type, descriptions) {
    _classCallCheck(this, TypeData);

    this._descriptions = descriptions;
    this._type = type;
  }

  _createClass(TypeData, [{
    key: 'id',
    value: function id(_id) {
      return byId(this._descriptions, _id);
    }
  }]);

  return TypeData;
}();

var I18nData = function () {
  function I18nData(locale) {
    _classCallCheck(this, I18nData);

    this._locale = contains(keys(dictionaries), locale) ? locale : 'en';
    this._dictionary = dictionaries[this._locale];
  }

  _createClass(I18nData, [{
    key: 'type',
    value: function type(_type) {
      return new TypeData(_type, this._dictionary[_type]);
    }
  }]);

  return I18nData;
}();

module.exports = I18nData;

},{"../utilities/list-of-objects":12,"./dictionaries":4,"underscore":16}],8:[function(require,module,exports){
},{}],9:[function(require,module,exports){

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ = require('underscore'),
    union = _.union,
    extend = _.extend,
    pick = _.pick;

var log = console;
var formatText = require('./utilities/format-text');

var I18nData = require('./i18n');
var scoredScenarios = require('./scored-scenarios');

function buildData(scenarios, targets) {
  var data = {
    _scenarios: [],
    _scenariosById: {},
    _industries: [],
    _personas: [],
    _categories: []
  };
  scenarios.forEach(function (s) {
    data._categories = union(data._categories, s.categories);
    data._industries = union(data._industries, s.industries);
    data._personas = union(data._personas, s.persona);
    data._scenariosById[s.id] = s;
  });
  data._scenarios = [].concat(scenarios);
  data._targets = targets;
  return data;
}

var _data = buildData(require('./data/scenarios'), require('./data/targets'));

var PersonalityBehaviors = function () {
  function PersonalityBehaviors(options) {
    _classCallCheck(this, PersonalityBehaviors);

    this._options = extend(this.defaultOptions(), pick(options, 'locale', 'format'));
    this._i18n = new I18nData(this._options.locale);
    extend(this, _data);
  }

  _createClass(PersonalityBehaviors, [{
    key: 'defaultOptions',
    value: function defaultOptions() {
      return {
        locale: 'en',
        format: 'plain'
      };
    }
  }, {
    key: 'behaviors',
    value: function behaviors(profile, filterOptions) {
      var _this = this;

      return scoredScenarios(profile, this._scenarios, this._targets).map(function (s) {
        return extend(s, _this._description('scenarios', s.id));
      }).reduce(function (res, s) {
        return res.concat(_this._asBehaviors(s));
      }, []);
    }
  }, {
    key: '_asBehaviors',
    value: function _asBehaviors(scenario) {
      var _this2 = this;

      var formatOptions = this._options;
      var behaviors = scenario.persona.map(function (p) {
        return {
          id: p.replace('persona.', 'behavior.'),
          name: _this2._description('personas', p).name,
          verb: scenario.verb,
          description: formatText(scenario.tooltip, formatOptions),
          score: scenario.score
        };
      });

      return behaviors;
    }
  }, {
    key: 'categories',
    value: function categories() {
      return this._collection('categories');
    }
  }, {
    key: 'industries',
    value: function industries() {
      return this._collection('industries');
    }
  }, {
    key: '_collection',
    value: function _collection(type) {
      var _this3 = this;

      return this['_' + type].map(function (id) {
        return _this3._description(type, id);
      });
    }
  }, {
    key: '_description',
    value: function _description(type, id) {
      return this._i18n.type(type).id(id);
    }
  }]);

  return PersonalityBehaviors;
}();

module.exports = PersonalityBehaviors;

},{"./data/scenarios":2,"./data/targets":3,"./i18n":7,"./scored-scenarios":10,"./utilities/format-text":11,"underscore":16}],10:[function(require,module,exports){

'use strict';

var Profile = require('./utilities/profile');
var byId = require('./utilities/list-of-objects').byId;
var _ = require('underscore'),
    extend = _.extend;

var scoreTrait = function scoreTrait(p, target) {
  return eval(target.score);
};

var scenarioScore = function scenarioScore(profile, scenario, targets) {
  return scenario.traits.reduce(function (acc, trait) {
    return acc + scoreTrait(profile.getTrait(trait.id).percentage, byId(targets, trait.target));
  }, 0) / scenario.traits.length;
};

var scoredScenarios = function scoredScenarios(profile, scenarios, targets) {
  return scenarios.map(function (scenario) {
    return extend(scenario, {
      score: scenarioScore(new Profile(profile), scenario, targets)
    });
  });
};

module.exports = scoredScenarios;

},{"./utilities/list-of-objects":12,"./utilities/profile":13,"underscore":16}],11:[function(require,module,exports){

'use strict';

var marked = require('marked');
var unmarked = require('remove-markdown');

function formatText(text, options) {
  var formatters = {
    plain: function plain(text) {
      return unmarked(text).replace(' How did we get this?', '');
    },
    html: function html(text) {
      return marked(text);
    },
    markdown: function markdown(text) {
      return text;
    }
  };

  var format = formatters[options.format];
  return format(text);
}

module.exports = formatText;

},{"marked":14,"remove-markdown":15}],12:[function(require,module,exports){
'use strict';

var _ = require('underscore'),
    keys = _.keys;

function matches(query, o) {
  return keys(query).reduce(function (conclusion, k) {
    return conclusion && o[k] == query[k];
  }, true);
}

function filter(ls, query) {
  return ls.filter(function (o) {
    return matches(query, o);
  });
}

function byId(ls, id) {
  return filter(ls, { id: id })[0];
}

module.exports = {
  byId: byId,
  filter: filter,
  matches: matches
};

},{"underscore":16}],13:[function(require,module,exports){
(function (global){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

!function (e) {
  if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports))) module.exports = e();else if ("function" == typeof define && define.amd) define(e);else {
    var f;"undefined" != typeof window ? f = window : "undefined" != typeof global ? f = global : "undefined" != typeof self && (f = self), f.Profile = e();
  }
}(function () {
  var define, module, exports;return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);throw new Error("Cannot find module '" + o + "'");
        }var f = n[o] = { exports: {} };t[o][0].call(f.exports, function (e) {
          var n = t[o][1][e];return s(n ? n : e);
        }, f, f.exports, e, t, n, r);
      }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
      s(r[o]);
    }return s;
  }({ 1: [function (_dereq_, module, exports) {
      "use strict";

      var Profile;

      Profile = function () {
        function Profile(rawProfile) {
          this.rawProfile = rawProfile;
          this.mapped = this.mapProfile(rawProfile);
          this.aliases = {
            big5: "personality"
          };
        }

        Profile.prototype.toPathId = function (trait) {
          return trait.id.toLowerCase().replace(" ", "_");
        };

        Profile.prototype.getPaths = function (mapped, current) {
          var innerPaths, keys;
          mapped = mapped || this.mapped;
          keys = Object.keys(mapped).filter(function (key) {
            return key !== "self";
          });
          innerPaths = [];
          keys.forEach(function (_this) {
            return function (key) {
              return innerPaths = innerPaths.concat(_this.getPaths(mapped[key], key));
            };
          }(this));
          if (current != null) {
            innerPaths = [current].concat(innerPaths.map(function (path) {
              return current + "." + path;
            }));
          }
          return innerPaths;
        };

        Profile.prototype.mapFacets = function (trait) {
          var mapped;
          mapped = {};
          if (trait.children != null) {
            trait.children.forEach(function (_this) {
              return function (facet) {
                mapped[_this.toPathId(facet)] = _this.mapFacets(facet);
                return mapped[_this.toPathId(facet)].self = facet;
              };
            }(this));
          }
          return mapped;
        };

        Profile.prototype.mapTraits = function (category) {
          var mapped;
          mapped = {
            trait: {},
            facet: {}
          };
          category.children[0].children.forEach(function (_this) {
            return function (trait) {
              mapped.trait[_this.toPathId(trait)] = {
                self: trait
              };
              return mapped.facet[_this.toPathId(trait)] = _this.mapFacets(trait);
            };
          }(this));
          return mapped;
        };

        Profile.prototype.mapProfile = function (rawProfile) {
          var mapped;
          mapped = {};
          rawProfile.tree.children.forEach(function (_this) {
            return function (trait) {
              return mapped[_this.toPathId(trait)] = _this.mapTraits(trait);
            };
          }(this));
          return mapped;
        };

        Profile.prototype.processAliases = function (path) {
          Object.keys(this.aliases).forEach(function (_this) {
            return function (alias) {
              return path = path.replace(alias, _this.aliases[alias]);
            };
          }(this));
          return path;
        };

        Profile.prototype._getTrait = function (path, mapped) {
          var parts;
          mapped = mapped || this.mapped;
          parts = path.split(".")[0] !== "" ? path.split(".") : [];
          if (parts.length > 0) {
            return this._getTrait(parts.slice(1).join("."), mapped[parts[0]]);
          } else {
            return mapped.self;
          }
        };

        Profile.prototype.getTrait = function (path) {
          return this._getTrait(this.processAliases(path));
        };

        return Profile;
      }();

      module.exports = Profile;
    }, {}] }, {}, [1])(1);
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],14:[function(require,module,exports){
(function (global){

;(function() {

/**
 * Block-Level Grammar
 */

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: noop,
  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
  nptable: noop,
  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
  table: noop,
  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
  text: /^[^\n]+/
};

block.bullet = /(?:[*+-]|\d+\.)/;
block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
block.item = replace(block.item, 'gm')
  (/bull/g, block.bullet)
  ();

block.list = replace(block.list)
  (/bull/g, block.bullet)
  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
  ('def', '\\n+(?=' + block.def.source + ')')
  ();

block.blockquote = replace(block.blockquote)
  ('def', block.def)
  ();

block._tag = '(?!(?:'
  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

block.html = replace(block.html)
  ('comment', /<!--[\s\S]*?-->/)
  ('closed', /<(tag)[\s\S]+?<\/\1>/)
  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
  (/tag/g, block._tag)
  ();

block.paragraph = replace(block.paragraph)
  ('hr', block.hr)
  ('heading', block.heading)
  ('lheading', block.lheading)
  ('blockquote', block.blockquote)
  ('tag', '<' + block._tag)
  ('def', block.def)
  ();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
  paragraph: /^/,
  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
});

block.gfm.paragraph = replace(block.paragraph)
  ('(?!', '(?!'
    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
    + block.list.source.replace('\\1', '\\3') + '|')
  ();

/**
 * GFM + Tables Block Grammar
 */

block.tables = merge({}, block.gfm, {
  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
});

/**
 * Block Lexer
 */

function Lexer(options) {
  this.tokens = [];
  this.tokens.links = {};
  this.options = options || marked.defaults;
  this.rules = block.normal;

  if (this.options.gfm) {
    if (this.options.tables) {
      this.rules = block.tables;
    } else {
      this.rules = block.gfm;
    }
  }
}
Lexer.rules = block;
Lexer.lex = function(src, options) {
  var lexer = new Lexer(options);
  return lexer.lex(src);
};
Lexer.prototype.lex = function(src) {
  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ')
    .replace(/\u00a0/g, ' ')
    .replace(/\u2424/g, '\n');

  return this.token(src, true);
};

Lexer.prototype.token = function(src, top, bq) {
  var src = src.replace(/^ +$/gm, '')
    , next
    , loose
    , cap
    , bull
    , b
    , item
    , space
    , i
    , l;

  while (src) {
    // newline
    if (cap = this.rules.newline.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[0].length > 1) {
        this.tokens.push({
          type: 'space'
        });
      }
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      cap = cap[0].replace(/^ {4}/gm, '');
      this.tokens.push({
        type: 'code',
        text: !this.options.pedantic
          ? cap.replace(/\n+$/, '')
          : cap
      });
      continue;
    }

    // fences (gfm)
    if (cap = this.rules.fences.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'code',
        lang: cap[2],
        text: cap[3] || ''
      });
      continue;
    }

    // heading
    if (cap = this.rules.heading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    }

    // table no leading pipe (gfm)
    if (top && (cap = this.rules.nptable.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i].split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // lheading
    if (cap = this.rules.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[2] === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    }

    // hr
    if (cap = this.rules.hr.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'hr'
      });
      continue;
    }

    // blockquote
    if (cap = this.rules.blockquote.exec(src)) {
      src = src.substring(cap[0].length);

      this.tokens.push({
        type: 'blockquote_start'
      });

      cap = cap[0].replace(/^ *> ?/gm, '');

      // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.
      this.token(cap, top, true);

      this.tokens.push({
        type: 'blockquote_end'
      });

      continue;
    }

    // list
    if (cap = this.rules.list.exec(src)) {
      src = src.substring(cap[0].length);
      bull = cap[2];

      this.tokens.push({
        type: 'list_start',
        ordered: bull.length > 1
      });

      // Get each top-level item.
      cap = cap[0].match(this.rules.item);

      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i];

        // Remove the list item's bullet
        // so it is seen as the next token.
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

        // Outdent whatever the
        // list item contains. Hacky.
        if (~item.indexOf('\n ')) {
          space -= item.length;
          item = !this.options.pedantic
            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
            : item.replace(/^ {1,4}/gm, '');
        }

        // Determine whether the next list item belongs here.
        // Backpedal if it does not belong in this list.
        if (this.options.smartLists && i !== l - 1) {
          b = block.bullet.exec(cap[i + 1])[0];
          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
            src = cap.slice(i + 1).join('\n') + src;
            i = l - 1;
          }
        }

        // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i !== l - 1) {
          next = item.charAt(item.length - 1) === '\n';
          if (!loose) loose = next;
        }

        this.tokens.push({
          type: loose
            ? 'loose_item_start'
            : 'list_item_start'
        });

        // Recurse.
        this.token(item, false, bq);

        this.tokens.push({
          type: 'list_item_end'
        });
      }

      this.tokens.push({
        type: 'list_end'
      });

      continue;
    }

    // html
    if (cap = this.rules.html.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: this.options.sanitize
          ? 'paragraph'
          : 'html',
        pre: !this.options.sanitizer
          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      });
      continue;
    }

    // def
    if ((!bq && top) && (cap = this.rules.def.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.links[cap[1].toLowerCase()] = {
        href: cap[2],
        title: cap[3]
      };
      continue;
    }

    // table (gfm)
    if (top && (cap = this.rules.table.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i]
          .replace(/^ *\| *| *\| *$/g, '')
          .split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // top-level paragraph
    if (top && (cap = this.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'paragraph',
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1]
      });
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      // Top-level should never reach here.
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'text',
        text: cap[0]
      });
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return this.tokens;
};

/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
  url: noop,
  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
  link: /^!?\[(inside)\]\(href\)/,
  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
  em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  br: /^ {2,}\n(?!\s*$)/,
  del: noop,
  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
};

inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

inline.link = replace(inline.link)
  ('inside', inline._inside)
  ('href', inline._href)
  ();

inline.reflink = replace(inline.reflink)
  ('inside', inline._inside)
  ();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: replace(inline.escape)('])', '~|])')(),
  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  del: /^~~(?=\S)([\s\S]*?\S)~~/,
  text: replace(inline.text)
    (']|', '~]|')
    ('|', '|https?://|')
    ()
});

/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: replace(inline.br)('{2,}', '*')(),
  text: replace(inline.gfm.text)('{2,}', '*')()
});

/**
 * Inline Lexer & Compiler
 */

function InlineLexer(links, options) {
  this.options = options || marked.defaults;
  this.links = links;
  this.rules = inline.normal;
  this.renderer = this.options.renderer || new Renderer;
  this.renderer.options = this.options;

  if (!this.links) {
    throw new
      Error('Tokens array requires a `links` property.');
  }

  if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = inline.breaks;
    } else {
      this.rules = inline.gfm;
    }
  } else if (this.options.pedantic) {
    this.rules = inline.pedantic;
  }
}

/**
 * Expose Inline Rules
 */

InlineLexer.rules = inline;

/**
 * Static Lexing/Compiling Method
 */

InlineLexer.output = function(src, links, options) {
  var inline = new InlineLexer(links, options);
  return inline.output(src);
};

/**
 * Lexing/Compiling
 */

InlineLexer.prototype.output = function(src) {
  var out = ''
    , link
    , text
    , href
    , cap;

  while (src) {
    // escape
    if (cap = this.rules.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += cap[1];
      continue;
    }

    // autolink
    if (cap = this.rules.autolink.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = cap[1].charAt(6) === ':'
          ? this.mangle(cap[1].substring(7))
          : this.mangle(cap[1]);
        href = this.mangle('mailto:') + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      out += this.renderer.link(href, null, text);
      continue;
    }

    // url (gfm)
    if (!this.inLink && (cap = this.rules.url.exec(src))) {
      src = src.substring(cap[0].length);
      text = escape(cap[1]);
      href = text;
      out += this.renderer.link(href, null, text);
      continue;
    }

    // tag
    if (cap = this.rules.tag.exec(src)) {
      if (!this.inLink && /^<a /i.test(cap[0])) {
        this.inLink = true;
      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
        this.inLink = false;
      }
      src = src.substring(cap[0].length);
      out += this.options.sanitize
        ? this.options.sanitizer
          ? this.options.sanitizer(cap[0])
          : escape(cap[0])
        : cap[0]
      continue;
    }

    // link
    if (cap = this.rules.link.exec(src)) {
      src = src.substring(cap[0].length);
      this.inLink = true;
      out += this.outputLink(cap, {
        href: cap[2],
        title: cap[3]
      });
      this.inLink = false;
      continue;
    }

    // reflink, nolink
    if ((cap = this.rules.reflink.exec(src))
        || (cap = this.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this.links[link.toLowerCase()];
      if (!link || !link.href) {
        out += cap[0].charAt(0);
        src = cap[0].substring(1) + src;
        continue;
      }
      this.inLink = true;
      out += this.outputLink(cap, link);
      this.inLink = false;
      continue;
    }

    // strong
    if (cap = this.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.strong(this.output(cap[2] || cap[1]));
      continue;
    }

    // em
    if (cap = this.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.em(this.output(cap[2] || cap[1]));
      continue;
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.codespan(escape(cap[2], true));
      continue;
    }

    // br
    if (cap = this.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.br();
      continue;
    }

    // del (gfm)
    if (cap = this.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.del(this.output(cap[1]));
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.text(escape(this.smartypants(cap[0])));
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

/**
 * Compile Link
 */

InlineLexer.prototype.outputLink = function(cap, link) {
  var href = escape(link.href)
    , title = link.title ? escape(link.title) : null;

  return cap[0].charAt(0) !== '!'
    ? this.renderer.link(href, title, this.output(cap[1]))
    : this.renderer.image(href, title, escape(cap[1]));
};

/**
 * Smartypants Transformations
 */

InlineLexer.prototype.smartypants = function(text) {
  if (!this.options.smartypants) return text;
  return text
    // em-dashes
    .replace(/---/g, '\u2014')
    // en-dashes
    .replace(/--/g, '\u2013')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
};

/**
 * Mangle Links
 */

InlineLexer.prototype.mangle = function(text) {
  if (!this.options.mangle) return text;
  var out = ''
    , l = text.length
    , i = 0
    , ch;

  for (; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
};

/**
 * Renderer
 */

function Renderer(options) {
  this.options = options || {};
}

Renderer.prototype.code = function(code, lang, escaped) {
  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  if (!lang) {
    return '<pre><code>'
      + (escaped ? code : escape(code, true))
      + '\n</code></pre>';
  }

  return '<pre><code class="'
    + this.options.langPrefix
    + escape(lang, true)
    + '">'
    + (escaped ? code : escape(code, true))
    + '\n</code></pre>\n';
};

Renderer.prototype.blockquote = function(quote) {
  return '<blockquote>\n' + quote + '</blockquote>\n';
};

Renderer.prototype.html = function(html) {
  return html;
};

Renderer.prototype.heading = function(text, level, raw) {
  return '<h'
    + level
    + ' id="'
    + this.options.headerPrefix
    + raw.toLowerCase().replace(/[^\w]+/g, '-')
    + '">'
    + text
    + '</h'
    + level
    + '>\n';
};

Renderer.prototype.hr = function() {
  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
};

Renderer.prototype.list = function(body, ordered) {
  var type = ordered ? 'ol' : 'ul';
  return '<' + type + '>\n' + body + '</' + type + '>\n';
};

Renderer.prototype.listitem = function(text) {
  return '<li>' + text + '</li>\n';
};

Renderer.prototype.paragraph = function(text) {
  return '<p>' + text + '</p>\n';
};

Renderer.prototype.table = function(header, body) {
  return '<table>\n'
    + '<thead>\n'
    + header
    + '</thead>\n'
    + '<tbody>\n'
    + body
    + '</tbody>\n'
    + '</table>\n';
};

Renderer.prototype.tablerow = function(content) {
  return '<tr>\n' + content + '</tr>\n';
};

Renderer.prototype.tablecell = function(content, flags) {
  var type = flags.header ? 'th' : 'td';
  var tag = flags.align
    ? '<' + type + ' style="text-align:' + flags.align + '">'
    : '<' + type + '>';
  return tag + content + '</' + type + '>\n';
};

// span level renderer
Renderer.prototype.strong = function(text) {
  return '<strong>' + text + '</strong>';
};

Renderer.prototype.em = function(text) {
  return '<em>' + text + '</em>';
};

Renderer.prototype.codespan = function(text) {
  return '<code>' + text + '</code>';
};

Renderer.prototype.br = function() {
  return this.options.xhtml ? '<br/>' : '<br>';
};

Renderer.prototype.del = function(text) {
  return '<del>' + text + '</del>';
};

Renderer.prototype.link = function(href, title, text) {
  if (this.options.sanitize) {
    try {
      var prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase();
    } catch (e) {
      return '';
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
      return '';
    }
  }
  var out = '<a href="' + href + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += '>' + text + '</a>';
  return out;
};

Renderer.prototype.image = function(href, title, text) {
  var out = '<img src="' + href + '" alt="' + text + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += this.options.xhtml ? '/>' : '>';
  return out;
};

Renderer.prototype.text = function(text) {
  return text;
};

/**
 * Parsing & Compiling
 */

function Parser(options) {
  this.tokens = [];
  this.token = null;
  this.options = options || marked.defaults;
  this.options.renderer = this.options.renderer || new Renderer;
  this.renderer = this.options.renderer;
  this.renderer.options = this.options;
}

/**
 * Static Parse Method
 */

Parser.parse = function(src, options, renderer) {
  var parser = new Parser(options, renderer);
  return parser.parse(src);
};

/**
 * Parse Loop
 */

Parser.prototype.parse = function(src) {
  this.inline = new InlineLexer(src.links, this.options, this.renderer);
  this.tokens = src.reverse();

  var out = '';
  while (this.next()) {
    out += this.tok();
  }

  return out;
};

/**
 * Next Token
 */

Parser.prototype.next = function() {
  return this.token = this.tokens.pop();
};

/**
 * Preview Next Token
 */

Parser.prototype.peek = function() {
  return this.tokens[this.tokens.length - 1] || 0;
};

/**
 * Parse Text Tokens
 */

Parser.prototype.parseText = function() {
  var body = this.token.text;

  while (this.peek().type === 'text') {
    body += '\n' + this.next().text;
  }

  return this.inline.output(body);
};

/**
 * Parse Current Token
 */

Parser.prototype.tok = function() {
  switch (this.token.type) {
    case 'space': {
      return '';
    }
    case 'hr': {
      return this.renderer.hr();
    }
    case 'heading': {
      return this.renderer.heading(
        this.inline.output(this.token.text),
        this.token.depth,
        this.token.text);
    }
    case 'code': {
      return this.renderer.code(this.token.text,
        this.token.lang,
        this.token.escaped);
    }
    case 'table': {
      var header = ''
        , body = ''
        , i
        , row
        , cell
        , flags
        , j;

      // header
      cell = '';
      for (i = 0; i < this.token.header.length; i++) {
        flags = { header: true, align: this.token.align[i] };
        cell += this.renderer.tablecell(
          this.inline.output(this.token.header[i]),
          { header: true, align: this.token.align[i] }
        );
      }
      header += this.renderer.tablerow(cell);

      for (i = 0; i < this.token.cells.length; i++) {
        row = this.token.cells[i];

        cell = '';
        for (j = 0; j < row.length; j++) {
          cell += this.renderer.tablecell(
            this.inline.output(row[j]),
            { header: false, align: this.token.align[j] }
          );
        }

        body += this.renderer.tablerow(cell);
      }
      return this.renderer.table(header, body);
    }
    case 'blockquote_start': {
      var body = '';

      while (this.next().type !== 'blockquote_end') {
        body += this.tok();
      }

      return this.renderer.blockquote(body);
    }
    case 'list_start': {
      var body = ''
        , ordered = this.token.ordered;

      while (this.next().type !== 'list_end') {
        body += this.tok();
      }

      return this.renderer.list(body, ordered);
    }
    case 'list_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.token.type === 'text'
          ? this.parseText()
          : this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'loose_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'html': {
      var html = !this.token.pre && !this.options.pedantic
        ? this.inline.output(this.token.text)
        : this.token.text;
      return this.renderer.html(html);
    }
    case 'paragraph': {
      return this.renderer.paragraph(this.inline.output(this.token.text));
    }
    case 'text': {
      return this.renderer.paragraph(this.parseText());
    }
  }
};

/**
 * Helpers
 */

function escape(html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function unescape(html) {
  return html.replace(/&([#\w]+);/g, function(_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

function replace(regex, opt) {
  regex = regex.source;
  opt = opt || '';
  return function self(name, val) {
    if (!name) return new RegExp(regex, opt);
    val = val.source || val;
    val = val.replace(/(^|[^\[])\^/g, '$1');
    regex = regex.replace(name, val);
    return self;
  };
}

function noop() {}
noop.exec = noop;

function merge(obj) {
  var i = 1
    , target
    , key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}


/**
 * Marked
 */

function marked(src, opt, callback) {
  if (callback || typeof opt === 'function') {
    if (!callback) {
      callback = opt;
      opt = null;
    }

    opt = merge({}, marked.defaults, opt || {});

    var highlight = opt.highlight
      , tokens
      , pending
      , i = 0;

    try {
      tokens = Lexer.lex(src, opt)
    } catch (e) {
      return callback(e);
    }

    pending = tokens.length;

    var done = function(err) {
      if (err) {
        opt.highlight = highlight;
        return callback(err);
      }

      var out;

      try {
        out = Parser.parse(tokens, opt);
      } catch (e) {
        err = e;
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!pending) return done();

    for (; i < tokens.length; i++) {
      (function(token) {
        if (token.type !== 'code') {
          return --pending || done();
        }
        return highlight(token.text, token.lang, function(err, code) {
          if (err) return done(err);
          if (code == null || code === token.text) {
            return --pending || done();
          }
          token.text = code;
          token.escaped = true;
          --pending || done();
        });
      })(tokens[i]);
    }

    return;
  }
  try {
    if (opt) opt = merge({}, marked.defaults, opt);
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/chjj/marked.';
    if ((opt || marked.defaults).silent) {
      return '<p>An error occured:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  return marked;
};

marked.defaults = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  sanitizer: null,
  mangle: true,
  smartLists: false,
  silent: false,
  highlight: null,
  langPrefix: 'lang-',
  smartypants: false,
  headerPrefix: '',
  renderer: new Renderer,
  xhtml: false
};

/**
 * Expose
 */

marked.Parser = Parser;
marked.parser = Parser.parse;

marked.Renderer = Renderer;

marked.Lexer = Lexer;
marked.lexer = Lexer.lex;

marked.InlineLexer = InlineLexer;
marked.inlineLexer = InlineLexer.output;

marked.parse = marked;

if (typeof module !== 'undefined' && typeof exports === 'object') {
  module.exports = marked;
} else if (typeof define === 'function' && define.amd) {
  define(function() { return marked; });
} else {
  this.marked = marked;
}

}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
}());

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],15:[function(require,module,exports){
module.exports = function(md, options) {
  options = options || {};
  options.stripListLeaders = options.hasOwnProperty('stripListLeaders') ? options.stripListLeaders : true;
  options.gfm = options.hasOwnProperty('gfm') ? options.gfm : true;

  var output = md;
  try {
    if (options.stripListLeaders) {
      output = output.replace(/^([\s\t]*)([\*\-\+]|\d\.)\s+/gm, '$1');
    }
    if (options.gfm){
      output = output
        // Header
        .replace(/\n={2,}/g, '\n')
        // Strikethrough
        .replace(/~~/g, '')
        // Fenced codeblocks
        .replace(/`{3}.*\n/g, '');
    }
    output = output
      // Remove HTML tags
      .replace(/<(.*?)>/g, '$1')
      // Remove setext-style headers
      .replace(/^[=\-]{2,}\s*$/g, '')
      // Remove footnotes?
      .replace(/\[\^.+?\](\: .*?$)?/g, '')
      .replace(/\s{0,2}\[.*?\]: .*?$/g, '')
      // Remove images
      .replace(/\!\[.*?\][\[\(].*?[\]\)]/g, '')
      // Remove inline links
      .replace(/\[(.*?)\][\[\(].*?[\]\)]/g, '$1')
      // Remove Blockquotes
      .replace(/>/g, '')
      // Remove reference-style links?
      .replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g, '')
      // Remove atx-style headers
      .replace(/^\#{1,6}\s*([^#]*)\s*(\#{1,6})?/gm, '$1')
      .replace(/([\*_]{1,3})(\S.*?\S)\1/g, '$2')
      .replace(/(`{3,})(.*?)\1/gm, '$2')
      .replace(/^-{3,}\s*$/g, '')
      .replace(/`(.+?)`/g, '$1')
      .replace(/\n{2,}/g, '\n\n');
  } catch(e) {
    console.error(e);
    return md;
  }
  return output;
};

},{}],16:[function(require,module,exports){
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));

},{}]},{},[1])(1)
});