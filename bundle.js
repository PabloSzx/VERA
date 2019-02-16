(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.module = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
    "surveys": [
        {
            "id" : "SurveyOne",
            "factors" : [
                {
                    "id" : "Emotional",
                    "high" : "Felicitaciones, tienes un alto nivel de autoconcepto emocional, sigue así y si tienes problemas o necesitas acompañamiento en el ámbito psicosocial durante el año, acércate a la Unidad de Apoyo al Aprendizaje  y aprovecha los talleres y psicorientación que tienen para ofrecerte.",
                    "low" : "Te invitamos a reforzar tu autoconcepto emocional, mediante los talleres socioafectivos realizados en la Unidad de Apoyo al Aprendizaje, en temáticas tales como; stress, ansiedad frente a las evaluaciones, autoconocimiento y autoexploración de emociones"
                },
                {
                    "id" : "Family",
                    "high" : "Felicitaciones, tienes un alto nivel de autoconcepto familiar, sigue así y si tienes problemas o necesitas acompañamiento en el ámbito psicosocial durante el año, acércate a la Unidad de Apoyo al Aprendizaje  y aprovecha los talleres y psicorientación que tienen para ofrecerte.",
                    "low" : "Te invitamos a reforzar tu autoconcepto familiar, puedes visitar a los profesionales de la Unidad de Apoyo, psicopedagoga o psicóloga que te orientarán y ayudarán a fortalecer tus herramientas personales para el manejo de situaciones complejas que puedan afectarte en el ámbito académico"
                },
                {
                    "id" : "Academic",
                    "high" : "Felicitaciones, tienes un alto nivel de autoconcepto académico sigue así y si tienes problemas o necesitas acompañamiento en el ámbito educativo durante el año, acércate a la Unidad de Apoyo al Aprendizaje  y aprovecha los talleres de habilidades académicos y acompañamiento integral psicopedagógico que tienen para ofrecerte.",
                    "low" : "Te invitamos a reforzar tu autoconcepto académico, mediante los talleres de habilidades académicos realizados en la Unidad de Apoyo al Aprendizaje, en temáticas tales como;  hábitos de estudio, gestión del tiempo, metacognición, entre otros. Además puedes asistir a un acompañamiento integral psicopedagógico ofrecido por las educadoras diferenciales."
                },
                {
                    "id" : "Physical",
                    "high" : "Felicitaciones, tienes un alto nivel de autoconcepto físico, sigue así y si tienes problemas o necesitas acompañamiento en el ámbito psicosocial y/o educativo durante el año, acércate a la Unidad de Apoyo al Aprendizaje  y aprovecha los talleres que tienen para ofrecerte.",
                    "low" : "Te invitamos a reforzar tu autoconcepto físico, puedes visitar a los profesionales de la Unidad de Apoyo, psicopedagoga o psicóloga que te orientarán y ayudarán a fortalecer tus herramientas personales para el manejo de situaciones complejas que puedan afectarte en el ámbito académico"
                },
                {
                    "id" : "Social",
                    "high" : "Felicitaciones, tienes un alto nivel de autoconcepto social, sigue así y te invitamos durante el año a que potencies tus habilidades en los talleres socioafectivos que ofrece la Unidad de Apoyo al Aprendizaje.",
                    "low" : "Te invitamos a reforzar tu autoconcepto social, mediante los talleres y jornadas ofrecidas por la Unidad de Apoyo al Aprendizaje donde podrás conocer compañeros de otras carreras, hacer amigos y abrir tu red de contactos y amigos."
                }
            ]
        },
        {
            "id" : "SurveyTwo",
            "factors" : [ 
                {
                    "id" : "Methodical",
                    "low" : "Te invitamos a mejorar tu nivel de estudio metódico, mediante los talleres de habilidades académicas que ofrece la Unidad de Apoyo al Aprendizaje y el acompañamiento integral psicopedagógico, además de complementarlo con los talleres socioafectivos que te permitan reforzar tus herramientas personales para el óptimo desempeño en el ámbito académico.",
                    "high" : "Felicitaciones, tienes un nivel de estudio metódico alto, el que está referido a cómo estudias: horarios, apuntes, métodos. Te invitamos a seguir reforzando tus habilidades y si quieres mejorar, te invitamos a los talleres de habilidades académicas que ofrece la Unidad de Apoyo al Aprendizaje"
                },
                {
                    "id" : "Prosecution",
                    "components": [
                        {
                            "id" : "Deep",
                            "low" : "Te invitamos a reforzar  tu nivel de procesamiento profundo, mejorar tu aprendizaje mediante el entrenamiento de tu atención a los rasgos semánticos y para que seas capaz de clasificar, comparar, contrastar, analizar y sintetizar. Te invitamos a participar de los talleres de habilidades académicas que ofrece la Unidad de Apoyo.",
                            "high" : "Tienes un nivel de procesamiento profundo alto, por lo que basas tu aprendizaje en las asociaciones que te sugiere el concepto, más que al concepto mismo, es decir, tomas más tiempo en pensar que en repetir, pones atención a los rasgos semánticos y eres capaz de clasificar, comparar, contrastar, analizar y sintetizar, si necesitas fortalecer tus habilidades te invitamos a participar de los talleres de habilidades académicas que ofrece la Unidad de Apoyo."
                        },
                        {
                            "id" : "Elavorative",
                            "low" : "Te invitamos a reforzar tu nivel de procesamiento elaborativo, a elaborar pensando en ejemplos personales y lograr expresarlo con tus propias palabra. si necesitas fortalecer tus habilidades Te invitamos a participar de los talleres de habilidades académicas que ofrece la Unidad de Apoyo.",
                            "high" : "Tienes un nivel de procesamiento elaborativo alto, por lo que basas tu aprendizaje  en la información, elaboras pensando en ejemplos personales y logra expresarlo con tus propias palabra. si necesitas fortalecer tus habilidades te invitamos a participar de los talleres de habilidades académicas que ofrece la Unidad de Apoyo."
                        },
                        {
                            "id" : "Superficial",
                            "low" : "Te invitamos a reforzar  tu nivel de procesamiento superficial. para mejorar tu aprendizaje mediante el entrenamiento de tu atención a los rasgos semánticos y para que seas capaz de clasificar, comparar, contrastar, analizar y sintetizar. Te invitamos a participar de los talleres de habilidades académicas que ofrece la Unidad de Apoyo y a asistir a un acompañamiento psicopedagógico con las profesionales de la Unidad.",
                            "high" : "Tienes un nivel de procesamiento superficial alto, por lo que prefieres asimilar la información tal como la recibes; te cuesta reexpresar, replantear o repensar los contenidos que recibes. En tu estudio atiendes más a los aspectos fonológicos y estructurales de la información, invirtiendo mucho tiempo en repetir y memorizar información en su forma original. Te invitamos a participar de los talleres de habilidades académicas que ofrece la Unidad de Apoyo, para que fortalezcas aquellos aspectos necesarios para el aprendizaje en la enseñanza Universitaria."
                        }
                    ]
                }
            ]
        }
    ]    
}
},{}],2:[function(require,module,exports){
module.exports={
    "result" : [
        {
            "studentId" : "IDALU48",
            "startYear" : 2018,
            "studentResponses" : [
                {
                    "surveyId": "SurveyOne", 
                    "factorId": "Academic", 
                    "studentId": "IDALU48", 
                    "componentId": "", 
                    "levelId": "Improve"
                }, 
                {
                    "surveyId": "SurveyOne", 
                    "factorId": "Emotional", 
                    "studentId": "IDALU48", 
                    "componentId": "", 
                    "levelId": "Persist"
                }, 
                {
                    "surveyId": "SurveyOne", 
                    "factorId": "Social", 
                    "studentId": "IDALU48", 
                    "componentId": "", 
                    "levelId": "Improve"
                }, 
                {
                    "surveyId": "SurveyOne", 
                    "factorId": "Family", 
                    "studentId": "IDALU48", 
                    "componentId": "", 
                    "levelId": "Improve"
                }, 
                {
                    "surveyId": "SurveyOne", 
                    "factorId": "Physical", 
                    "studentId": "IDALU48", 
                    "componentId": "", 
                    "levelId": "Improve"
                }, 
                {
                    "factorId": "Methodical", 
                    "studentId": "IDALU48", 
                    "predominantId": " ", 
                    "levelId": "Medio", 
                    "surveyId": "SurveyTwo", 
                    "componentId": ""
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU48", 
                    "predominantId": " ", 
                    "levelId": "Bajo", 
                    "surveyId": "SurveyTwo", 
                    "componentId": "Deep"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU48", 
                    "predominantId": " ", 
                    "levelId": "Medio", 
                    "surveyId": "SurveyTwo", 
                    "componentId": "Elavorative"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU48", 
                    "predominantId": " ", 
                    "levelId": "Bajo", 
                    "surveyId": "SurveyTwo", 
                    "componentId": "Superficial"
                }
                    
            ],
            "groupData" : [
                {
                    "factorId": "Academic", 
                    "studentId": "IDALU48", 
                    "levelId": "Improve", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        45.23809523809524, 
                        22.61904761904762, 
                        32.142857142857146
                    ], 
                    "cohortCount": 25, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Academic", 
                    "studentId": "IDALU48", 
                    "levelId": "Enrich", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        69.23076923076923, 
                        17.307692307692307, 
                        13.461538461538462
                    ], 
                    "cohortCount": 34, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Academic", 
                    "studentId": "IDALU48", 
                    "levelId": "Persist", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        51.55555555555556, 
                        14.222222222222221, 
                        34.22222222222222
                    ], 
                    "cohortCount": 73, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Emotional", 
                    "studentId": "IDALU48", 
                    "levelId": "Improve", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        53.191489361702125, 
                        18.43971631205674, 
                        28.368794326241133
                    ], 
                    "cohortCount": 65, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Emotional", 
                    "studentId": "IDALU48", 
                    "levelId": "Enrich", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        52.94117647058823, 
                        14.705882352941176, 
                        32.35294117647059
                    ], 
                    "cohortCount": 19, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Emotional", 
                    "studentId": "IDALU48", 
                    "levelId": "Persist", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        52.1505376344086, 
                        15.591397849462366, 
                        32.25806451612903
                    ], 
                    "cohortCount": 48, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Social", 
                    "studentId": "IDALU48", 
                    "levelId": "Improve", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        55.072463768115945, 
                        17.391304347826086, 
                        27.536231884057973
                    ], 
                    "cohortCount": 97, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Social", 
                    "studentId": "IDALU48", 
                    "levelId": "Enrich", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        38.297872340425535, 
                        14.893617021276595, 
                        46.808510638297875
                    ], 
                    "cohortCount": 9, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Social", 
                    "studentId": "IDALU48", 
                    "levelId": "Persist", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        54.205607476635514, 
                        15.88785046728972, 
                        29.906542056074766
                    ], 
                    "cohortCount": 26, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Family", 
                    "studentId": "IDALU48", 
                    "levelId": "Improve", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        53.65853658536585, 
                        17.88617886178862, 
                        28.45528455284553
                    ], 
                    "cohortCount": 65, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Family", 
                    "studentId": "IDALU48", 
                    "levelId": "Enrich", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        68.0, 
                        18.0, 
                        14.0
                    ], 
                    "cohortCount": 22, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Family", 
                    "studentId": "IDALU48", 
                    "levelId": "Persist", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        49.45054945054945, 
                        18.13186813186813, 
                        32.417582417582416
                    ], 
                    "cohortCount": 45, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Physical", 
                    "studentId": "IDALU48", 
                    "levelId": "Improve", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        56.88622754491018, 
                        20.35928143712575, 
                        22.75449101796407
                    ], 
                    "cohortCount": 75, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Physical", 
                    "studentId": "IDALU48", 
                    "levelId": "Enrich", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        34.09090909090909, 
                        9.090909090909092, 
                        56.81818181818182
                    ], 
                    "cohortCount": 17, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Physical", 
                    "studentId": "IDALU48", 
                    "levelId": "Persist", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        53.333333333333336, 
                        14.666666666666666, 
                        32.0
                    ], 
                    "cohortCount": 40, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Methodical", 
                    "studentId": "IDALU48", 
                    "levelId": "VeryLow", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        41.46341463414634, 
                        19.51219512195122, 
                        39.02439024390244
                    ], 
                    "cohortCount": 11, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Methodical", 
                    "studentId": "IDALU48", 
                    "levelId": "Low", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        55.55555555555556, 
                        14.814814814814815, 
                        29.62962962962963
                    ], 
                    "cohortCount": 23, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Methodical", 
                    "studentId": "IDALU48", 
                    "levelId": "Medium", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        54.0, 
                        14.0, 
                        32.0
                    ], 
                    "cohortCount": 62, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Methodical", 
                    "studentId": "IDALU48", 
                    "levelId": "High", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        57.69230769230769, 
                        13.461538461538462, 
                        28.846153846153847
                    ], 
                    "cohortCount": 22, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Methodical", 
                    "studentId": "IDALU48", 
                    "levelId": "VeryHigh", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        45.945945945945944, 
                        32.432432432432435, 
                        21.62162162162162
                    ], 
                    "cohortCount": 14, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU48", 
                    "levelId": "VeryLow", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        43.956043956043956, 
                        26.373626373626372, 
                        29.67032967032967
                    ], 
                    "cohortCount": 10, 
                    "componentId": "Deep"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU48", 
                    "levelId": "Low", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        73.17073170731707, 
                        9.75609756097561, 
                        17.073170731707318
                    ], 
                    "cohortCount": 21, 
                    "componentId": "Deep"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU48", 
                    "levelId": "Medium", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        61.702127659574465, 
                        13.829787234042554, 
                        24.46808510638298
                    ], 
                    "cohortCount": 63, 
                    "componentId": "Deep"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU48", 
                    "levelId": "High", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        58.333333333333336, 
                        8.333333333333334, 
                        33.333333333333336
                    ], 
                    "cohortCount": 17, 
                    "componentId": "Deep"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU48", 
                    "levelId": "VeryHigh", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        50.0, 
                        25.0, 
                        25.0
                    ], 
                    "cohortCount": 21, 
                    "componentId": "Deep"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU48", 
                    "levelId": "VeryLow", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        44.44444444444444, 
                        25.0, 
                        30.555555555555557
                    ], 
                    "cohortCount": 41, 
                    "componentId": "Superficial"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU48", 
                    "levelId": "Low", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        69.38775510204081, 
                        14.285714285714286, 
                        16.3265306122449
                    ], 
                    "cohortCount": 30, 
                    "componentId": "Superficial"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU48", 
                    "levelId": "Medium", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        47.10144927536232, 
                        16.666666666666668, 
                        36.231884057971016
                    ], 
                    "cohortCount": 45, 
                    "componentId": "Superficial"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU48", 
                    "levelId": "High", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        50.0, 
                        19.047619047619047, 
                        30.952380952380953
                    ], 
                    "cohortCount": 13, 
                    "componentId": "Superficial"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU48", 
                    "levelId": "VeryHigh", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        55.55555555555556, 
                        5.555555555555555, 
                        38.888888888888886
                    ], 
                    "cohortCount": 3, 
                    "componentId": "Superficial"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU48", 
                    "levelId": "VeryLow", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        46.666666666666664, 
                        23.333333333333332, 
                        30.0
                    ], 
                    "cohortCount": 15, 
                    "componentId": "Elavorative"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU48", 
                    "levelId": "Low", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        51.42857142857143, 
                        18.571428571428573, 
                        30.0
                    ], 
                    "cohortCount": 31, 
                    "componentId": "Elavorative"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU48", 
                    "levelId": "Medium", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        51.53846153846154, 
                        13.846153846153847, 
                        34.61538461538461
                    ], 
                    "cohortCount": 46, 
                    "componentId": "Elavorative"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU48", 
                    "levelId": "High", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        52.38095238095238, 
                        19.047619047619047, 
                        28.571428571428573
                    ], 
                    "cohortCount": 27, 
                    "componentId": "Elavorative"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU48", 
                    "levelId": "VeryHigh", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        76.47058823529412, 
                        5.882352941176471, 
                        17.647058823529413
                    ], 
                    "cohortCount": 13, 
                    "componentId": "Elavorative"
                }
            ]
        },
        {
            "studentId" : "IDALU1602",
            "startYear" : 2018,
            "studentResponses" : [        
                {
                    "surveyId": "SurveyOne", 
                    "factorId": "Academic", 
                    "studentId": "IDALU1602", 
                    "componentId": "", 
                    "levelId": "Enrich"
                }, 
                {
                    "surveyId": "SurveyOne", 
                    "factorId": "Emotional", 
                    "studentId": "IDALU1602", 
                    "componentId": "", 
                    "levelId": "Improve"
                }, 
                {
                    "surveyId": "SurveyOne", 
                    "factorId": "Social", 
                    "studentId": "IDALU1602", 
                    "componentId": "", 
                    "levelId": "Improve"
                }, 
                {
                    "surveyId": "SurveyOne", 
                    "factorId": "Family", 
                    "studentId": "IDALU1602", 
                    "componentId": "", 
                    "levelId": "Improve"
                }, 
                {
                    "surveyId": "SurveyOne", 
                    "factorId": "Physical", 
                    "studentId": "IDALU1602", 
                    "componentId": "", 
                    "levelId": "Improve"
                },
                {
                    "factorId": "Methodical", 
                    "studentId": "IDALU1602", 
                    "predominantId": " ", 
                    "levelId": "Medio", 
                    "surveyId": "SurveyTwo", 
                    "componentId": ""
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU1602", 
                    "predominantId": " ", 
                    "levelId": "Medio", 
                    "surveyId": "SurveyTwo", 
                    "componentId": "Deep"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU1602", 
                    "predominantId": " ", 
                    "levelId": "Alto", 
                    "surveyId": "SurveyTwo", 
                    "componentId": "Elavorative"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU1602", 
                    "predominantId": " ", 
                    "levelId": "Bajo", 
                    "surveyId": "SurveyTwo", 
                    "componentId": "Superficial"
                }
            ],
            "groupData" : [
                {
                    "factorId": "Academic", 
                    "studentId": "IDALU1602", 
                    "levelId": "Improve", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        45.23809523809524, 
                        22.61904761904762, 
                        32.142857142857146
                    ], 
                    "cohortCount": 25, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Academic", 
                    "studentId": "IDALU1602", 
                    "levelId": "Enrich", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        69.23076923076923, 
                        17.307692307692307, 
                        13.461538461538462
                    ], 
                    "cohortCount": 34, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Academic", 
                    "studentId": "IDALU1602", 
                    "levelId": "Persist", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        51.55555555555556, 
                        14.222222222222221, 
                        34.22222222222222
                    ], 
                    "cohortCount": 73, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Emotional", 
                    "studentId": "IDALU1602", 
                    "levelId": "Improve", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        53.191489361702125, 
                        18.43971631205674, 
                        28.368794326241133
                    ], 
                    "cohortCount": 65, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Emotional", 
                    "studentId": "IDALU1602", 
                    "levelId": "Enrich", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        52.94117647058823, 
                        14.705882352941176, 
                        32.35294117647059
                    ], 
                    "cohortCount": 19, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Emotional", 
                    "studentId": "IDALU1602", 
                    "levelId": "Persist", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        52.1505376344086, 
                        15.591397849462366, 
                        32.25806451612903
                    ], 
                    "cohortCount": 48, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Social", 
                    "studentId": "IDALU1602", 
                    "levelId": "Improve", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        55.072463768115945, 
                        17.391304347826086, 
                        27.536231884057973
                    ], 
                    "cohortCount": 97, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Social", 
                    "studentId": "IDALU1602", 
                    "levelId": "Enrich", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        38.297872340425535, 
                        14.893617021276595, 
                        46.808510638297875
                    ], 
                    "cohortCount": 9, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Social", 
                    "studentId": "IDALU1602", 
                    "levelId": "Persist", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        54.205607476635514, 
                        15.88785046728972, 
                        29.906542056074766
                    ], 
                    "cohortCount": 26, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Family", 
                    "studentId": "IDALU1602", 
                    "levelId": "Improve", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        53.65853658536585, 
                        17.88617886178862, 
                        28.45528455284553
                    ], 
                    "cohortCount": 65, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Family", 
                    "studentId": "IDALU1602", 
                    "levelId": "Enrich", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        68.0, 
                        18.0, 
                        14.0
                    ], 
                    "cohortCount": 22, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Family", 
                    "studentId": "IDALU1602", 
                    "levelId": "Persist", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        49.45054945054945, 
                        18.13186813186813, 
                        32.417582417582416
                    ], 
                    "cohortCount": 45, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Physical", 
                    "studentId": "IDALU1602", 
                    "levelId": "Improve", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        56.88622754491018, 
                        20.35928143712575, 
                        22.75449101796407
                    ], 
                    "cohortCount": 75, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Physical", 
                    "studentId": "IDALU1602", 
                    "levelId": "Enrich", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        34.09090909090909, 
                        9.090909090909092, 
                        56.81818181818182
                    ], 
                    "cohortCount": 17, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Physical", 
                    "studentId": "IDALU1602", 
                    "levelId": "Persist", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        53.333333333333336, 
                        14.666666666666666, 
                        32.0
                    ], 
                    "cohortCount": 40, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Methodical", 
                    "studentId": "IDALU1602", 
                    "levelId": "VeryLow", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        41.46341463414634, 
                        19.51219512195122, 
                        39.02439024390244
                    ], 
                    "cohortCount": 11, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Methodical", 
                    "studentId": "IDALU1602", 
                    "levelId": "Low", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        55.55555555555556, 
                        14.814814814814815, 
                        29.62962962962963
                    ], 
                    "cohortCount": 23, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Methodical", 
                    "studentId": "IDALU1602", 
                    "levelId": "Medium", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        54.0, 
                        14.0, 
                        32.0
                    ], 
                    "cohortCount": 62, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Methodical", 
                    "studentId": "IDALU1602", 
                    "levelId": "High", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        57.69230769230769, 
                        13.461538461538462, 
                        28.846153846153847
                    ], 
                    "cohortCount": 22, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Methodical", 
                    "studentId": "IDALU1602", 
                    "levelId": "VeryHigh", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        45.945945945945944, 
                        32.432432432432435, 
                        21.62162162162162
                    ], 
                    "cohortCount": 14, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU1602", 
                    "levelId": "VeryLow", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        43.956043956043956, 
                        26.373626373626372, 
                        29.67032967032967
                    ], 
                    "cohortCount": 10, 
                    "componentId": "Deep"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU1602", 
                    "levelId": "Low", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        73.17073170731707, 
                        9.75609756097561, 
                        17.073170731707318
                    ], 
                    "cohortCount": 21, 
                    "componentId": "Deep"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU1602", 
                    "levelId": "Medium", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        61.702127659574465, 
                        13.829787234042554, 
                        24.46808510638298
                    ], 
                    "cohortCount": 63, 
                    "componentId": "Deep"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU1602", 
                    "levelId": "High", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        58.333333333333336, 
                        8.333333333333334, 
                        33.333333333333336
                    ], 
                    "cohortCount": 17, 
                    "componentId": "Deep"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU1602", 
                    "levelId": "VeryHigh", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        50.0, 
                        25.0, 
                        25.0
                    ], 
                    "cohortCount": 21, 
                    "componentId": "Deep"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU1602", 
                    "levelId": "VeryLow", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        44.44444444444444, 
                        25.0, 
                        30.555555555555557
                    ], 
                    "cohortCount": 41, 
                    "componentId": "Superficial"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU1602", 
                    "levelId": "Low", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        69.38775510204081, 
                        14.285714285714286, 
                        16.3265306122449
                    ], 
                    "cohortCount": 30, 
                    "componentId": "Superficial"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU1602", 
                    "levelId": "Medium", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        47.10144927536232, 
                        16.666666666666668, 
                        36.231884057971016
                    ], 
                    "cohortCount": 45, 
                    "componentId": "Superficial"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU1602", 
                    "levelId": "High", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        50.0, 
                        19.047619047619047, 
                        30.952380952380953
                    ], 
                    "cohortCount": 13, 
                    "componentId": "Superficial"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU1602", 
                    "levelId": "VeryHigh", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        55.55555555555556, 
                        5.555555555555555, 
                        38.888888888888886
                    ], 
                    "cohortCount": 3, 
                    "componentId": "Superficial"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU1602", 
                    "levelId": "VeryLow", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        46.666666666666664, 
                        23.333333333333332, 
                        30.0
                    ], 
                    "cohortCount": 15, 
                    "componentId": "Elavorative"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU1602", 
                    "levelId": "Low", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        51.42857142857143, 
                        18.571428571428573, 
                        30.0
                    ], 
                    "cohortCount": 31, 
                    "componentId": "Elavorative"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU1602", 
                    "levelId": "Medium", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        51.53846153846154, 
                        13.846153846153847, 
                        34.61538461538461
                    ], 
                    "cohortCount": 46, 
                    "componentId": "Elavorative"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU1602", 
                    "levelId": "High", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        52.38095238095238, 
                        19.047619047619047, 
                        28.571428571428573
                    ], 
                    "cohortCount": 27, 
                    "componentId": "Elavorative"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU1602", 
                    "levelId": "VeryHigh", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        76.47058823529412, 
                        5.882352941176471, 
                        17.647058823529413
                    ], 
                    "cohortCount": 13, 
                    "componentId": "Elavorative"
                }
            ]
        },
        {
            "studentId" : "IDALU2205",
            "startYear" : 2018,
            "studentResponses" : [
                {
                    "surveyId": "SurveyOne", 
                    "factorId": "Academic", 
                    "studentId": "IDALU2205", 
                    "componentId": "", 
                    "levelId": "Persist"
                }, 
                {
                    "surveyId": "SurveyOne", 
                    "factorId": "Emotional", 
                    "studentId": "IDALU2205", 
                    "componentId": "", 
                    "levelId": "Enrich"
                }, 
                {
                    "surveyId": "SurveyOne", 
                    "factorId": "Social", 
                    "studentId": "IDALU2205", 
                    "componentId": "", 
                    "levelId": "Improve"
                }, 
                {
                    "surveyId": "SurveyOne", 
                    "factorId": "Family", 
                    "studentId": "IDALU2205", 
                    "componentId": "", 
                    "levelId": "Persist"
                }, 
                {
                    "surveyId": "SurveyOne", 
                    "factorId": "Physical", 
                    "studentId": "IDALU2205", 
                    "componentId": "", 
                    "levelId": "Improve"
                },
                {
                    "factorId": "Methodical", 
                    "studentId": "IDALU2205", 
                    "predominantId": " ", 
                    "levelId": "Alto", 
                    "surveyId": "SurveyTwo", 
                    "componentId": ""
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU2205", 
                    "predominantId": " ", 
                    "levelId": "Alto", 
                    "surveyId": "SurveyTwo", 
                    "componentId": "Deep"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU2205", 
                    "predominantId": " ", 
                    "levelId": "Muy Alto", 
                    "surveyId": "SurveyTwo", 
                    "componentId": "Elavorative"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU2205", 
                    "predominantId": " ", 
                    "levelId": "Bajo", 
                    "surveyId": "SurveyTwo", 
                    "componentId": "Superficial"
                }
            ],
            "groupData" : [
                {
                    "factorId": "Academic", 
                    "studentId": "IDALU2205", 
                    "levelId": "Improve", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        51.851851851851855, 
                        18.51851851851852, 
                        29.62962962962963
                    ], 
                    "cohortCount": 25, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Academic", 
                    "studentId": "IDALU2205", 
                    "levelId": "Enrich", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        66.66666666666667, 
                        20.512820512820515, 
                        12.820512820512821
                    ], 
                    "cohortCount": 34, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Academic", 
                    "studentId": "IDALU2205", 
                    "levelId": "Persist", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        62.5, 
                        14.0625, 
                        23.4375
                    ], 
                    "cohortCount": 73, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Emotional", 
                    "studentId": "IDALU2205", 
                    "levelId": "Improve", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        62.745098039215684, 
                        21.568627450980394, 
                        15.686274509803921
                    ], 
                    "cohortCount": 65, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Emotional", 
                    "studentId": "IDALU2205", 
                    "levelId": "Enrich", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        52.17391304347826, 
                        13.043478260869565, 
                        34.78260869565217
                    ], 
                    "cohortCount": 19, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Emotional", 
                    "studentId": "IDALU2205", 
                    "levelId": "Persist", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        64.28571428571429, 
                        14.285714285714286, 
                        21.428571428571427
                    ], 
                    "cohortCount": 48, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Social", 
                    "studentId": "IDALU2205", 
                    "levelId": "Improve", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        63.95348837209303, 
                        15.116279069767442, 
                        20.930232558139537
                    ], 
                    "cohortCount": 97, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Social", 
                    "studentId": "IDALU2205", 
                    "levelId": "Enrich", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        55.55555555555556, 
                        16.666666666666668, 
                        27.77777777777778
                    ], 
                    "cohortCount": 9, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Social", 
                    "studentId": "IDALU2205", 
                    "levelId": "Persist", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        57.69230769230769, 
                        23.076923076923077, 
                        19.23076923076923
                    ], 
                    "cohortCount": 26, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Family", 
                    "studentId": "IDALU2205", 
                    "levelId": "Improve", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        60.3448275862069, 
                        18.96551724137931, 
                        20.689655172413794
                    ], 
                    "cohortCount": 65, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Family", 
                    "studentId": "IDALU2205", 
                    "levelId": "Enrich", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        75.0, 
                        0.0, 
                        25.0
                    ], 
                    "cohortCount": 22, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Family", 
                    "studentId": "IDALU2205", 
                    "levelId": "Persist", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        56.25, 
                        22.916666666666668, 
                        20.833333333333332
                    ], 
                    "cohortCount": 45, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Physical", 
                    "studentId": "IDALU2205", 
                    "levelId": "Improve", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        61.42857142857143, 
                        18.571428571428573, 
                        20.0
                    ], 
                    "cohortCount": 75, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Physical", 
                    "studentId": "IDALU2205", 
                    "levelId": "Enrich", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        37.5, 
                        12.5, 
                        50.0
                    ], 
                    "cohortCount": 17, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Physical", 
                    "studentId": "IDALU2205", 
                    "levelId": "Persist", 
                    "surveyId": "SurveyOne", 
                    "historic": [
                        70.45454545454545, 
                        15.909090909090908, 
                        13.636363636363637
                    ], 
                    "cohortCount": 40, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Methodical", 
                    "studentId": "IDALU2205", 
                    "levelId": "VeryLow", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        80.0, 
                        0.0, 
                        20.0
                    ], 
                    "cohortCount": 11, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Methodical", 
                    "studentId": "IDALU2205", 
                    "levelId": "Low", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        55.55555555555556, 
                        5.555555555555555, 
                        38.888888888888886
                    ], 
                    "cohortCount": 23, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Methodical", 
                    "studentId": "IDALU2205", 
                    "levelId": "Medium", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        63.793103448275865, 
                        17.24137931034483, 
                        18.96551724137931
                    ], 
                    "cohortCount": 62, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Methodical", 
                    "studentId": "IDALU2205", 
                    "levelId": "High", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        64.28571428571429, 
                        14.285714285714286, 
                        21.428571428571427
                    ], 
                    "cohortCount": 22, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Methodical", 
                    "studentId": "IDALU2205", 
                    "levelId": "VeryHigh", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        52.38095238095238, 
                        33.333333333333336, 
                        14.285714285714286
                    ], 
                    "cohortCount": 14, 
                    "componentId": ""
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU2205", 
                    "levelId": "VeryLow", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        60.0, 
                        30.0, 
                        10.0
                    ], 
                    "cohortCount": 10, 
                    "componentId": "Deep"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU2205", 
                    "levelId": "Low", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        84.61538461538461, 
                        3.8461538461538463, 
                        11.538461538461538
                    ], 
                    "cohortCount": 21, 
                    "componentId": "Deep"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU2205", 
                    "levelId": "Medium", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        56.0, 
                        22.0, 
                        22.0
                    ], 
                    "cohortCount": 63, 
                    "componentId": "Deep"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU2205", 
                    "levelId": "High", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        63.63636363636363, 
                        9.090909090909092, 
                        27.272727272727273
                    ], 
                    "cohortCount": 17, 
                    "componentId": "Deep"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU2205", 
                    "levelId": "VeryHigh", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        50.0, 
                        25.0, 
                        25.0
                    ], 
                    "cohortCount": 21, 
                    "componentId": "Deep"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU2205", 
                    "levelId": "VeryLow", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        44.11764705882353, 
                        26.470588235294116, 
                        29.41176470588235
                    ], 
                    "cohortCount": 41, 
                    "componentId": "Superficial"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU2205", 
                    "levelId": "Low", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        75.0, 
                        12.5, 
                        12.5
                    ], 
                    "cohortCount": 30, 
                    "componentId": "Superficial"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU2205", 
                    "levelId": "Medium", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        60.46511627906977, 
                        16.27906976744186, 
                        23.25581395348837
                    ], 
                    "cohortCount": 45, 
                    "componentId": "Superficial"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU2205", 
                    "levelId": "High", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        73.33333333333333, 
                        13.333333333333334, 
                        13.333333333333334
                    ], 
                    "cohortCount": 13, 
                    "componentId": "Superficial"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU2205", 
                    "levelId": "VeryHigh", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        66.66666666666667, 
                        0.0, 
                        33.333333333333336
                    ], 
                    "cohortCount": 3, 
                    "componentId": "Superficial"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU2205", 
                    "levelId": "VeryLow", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        60.0, 
                        20.0, 
                        20.0
                    ], 
                    "cohortCount": 15, 
                    "componentId": "Elavorative"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU2205", 
                    "levelId": "Low", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        68.0, 
                        12.0, 
                        20.0
                    ], 
                    "cohortCount": 31, 
                    "componentId": "Elavorative"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU2205", 
                    "levelId": "Medium", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        50.0, 
                        21.153846153846153, 
                        28.846153846153847
                    ], 
                    "cohortCount": 46, 
                    "componentId": "Elavorative"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU2205", 
                    "levelId": "High", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        71.42857142857143, 
                        19.047619047619047, 
                        9.523809523809524
                    ], 
                    "cohortCount": 27, 
                    "componentId": "Elavorative"
                }, 
                {
                    "factorId": "Prosecution", 
                    "studentId": "IDALU2205", 
                    "levelId": "VeryHigh", 
                    "surveyId": "SurveyTwo", 
                    "historic": [
                        76.47058823529412, 
                        5.882352941176471, 
                        17.647058823529413
                    ], 
                    "cohortCount": 13, 
                    "componentId": "Elavorative"
                }
            ]
        },
                {
                    "studentId" : "IDALU1987",
                    "startYear" : 2018,
                    "studentResponses" : [
                        {
                            "surveyId": "SurveyOne", 
                            "factorId": "Academic", 
                            "studentId": "IDALU1987", 
                            "componentId": "", 
                            "levelId": "Persist"
                        }, 
                        {
                            "surveyId": "SurveyOne", 
                            "factorId": "Emotional", 
                            "studentId": "IDALU1987", 
                            "componentId": "", 
                            "levelId": "Improve"
                        }, 
                        {
                            "surveyId": "SurveyOne", 
                            "factorId": "Social", 
                            "studentId": "IDALU1987", 
                            "componentId": "", 
                            "levelId": "Persist"
                        }, 
                        {
                            "surveyId": "SurveyOne", 
                            "factorId": "Family", 
                            "studentId": "IDALU1987", 
                            "componentId": "", 
                            "levelId": "Improve"
                        }, 
                        {
                            "surveyId": "SurveyOne", 
                            "factorId": "Physical", 
                            "studentId": "IDALU1987", 
                            "componentId": "", 
                            "levelId": "Persist"
                        },
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1987", 
                            "predominantId": " ", 
                            "levelId": "Medio", 
                            "surveyId": "SurveyTwo", 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1987", 
                            "predominantId": " ", 
                            "levelId": "Muy Alto", 
                            "surveyId": "SurveyTwo", 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1987", 
                            "predominantId": " ", 
                            "levelId": "Muy Alto", 
                            "surveyId": "SurveyTwo", 
                            "componentId": "Elavorative"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1987", 
                            "predominantId": " ", 
                            "levelId": "Bajo", 
                            "surveyId": "SurveyTwo", 
                            "componentId": "Superficial"
                        }
                    ],
                    "groupData" : [
                        {
                        "factorId": "Academic", 
                        "studentId": "IDALU1987", 
                        "levelId": "Improve", 
                        "surveyId": "SurveyOne", 
                        "historic": [
                            51.851851851851855, 
                            18.51851851851852, 
                            29.62962962962963
                        ], 
                        "cohortCount": 25, 
                        "componentId": ""
                    }, 
                    {
                        "factorId": "Academic", 
                        "studentId": "IDALU1987", 
                        "levelId": "Enrich", 
                        "surveyId": "SurveyOne", 
                        "historic": [
                            66.66666666666667, 
                            20.512820512820515, 
                            12.820512820512821
                        ], 
                        "cohortCount": 34, 
                        "componentId": ""
                    }, 
                    {
                        "factorId": "Academic", 
                        "studentId": "IDALU1987", 
                        "levelId": "Persist", 
                        "surveyId": "SurveyOne", 
                        "historic": [
                            62.5, 
                            14.0625, 
                            23.4375
                        ], 
                        "cohortCount": 73, 
                        "componentId": ""
                    }, 
                    {
                        "factorId": "Emotional", 
                        "studentId": "IDALU1987", 
                        "levelId": "Improve", 
                        "surveyId": "SurveyOne", 
                        "historic": [
                            62.745098039215684, 
                            21.568627450980394, 
                            15.686274509803921
                        ], 
                        "cohortCount": 65, 
                        "componentId": ""
                    }, 
                    {
                        "factorId": "Emotional", 
                        "studentId": "IDALU1987", 
                        "levelId": "Enrich", 
                        "surveyId": "SurveyOne", 
                        "historic": [
                            52.17391304347826, 
                            13.043478260869565, 
                            34.78260869565217
                        ], 
                        "cohortCount": 19, 
                        "componentId": ""
                    }, 
                    {
                        "factorId": "Emotional", 
                        "studentId": "IDALU1987", 
                        "levelId": "Persist", 
                        "surveyId": "SurveyOne", 
                        "historic": [
                            64.28571428571429, 
                            14.285714285714286, 
                            21.428571428571427
                        ], 
                        "cohortCount": 48, 
                        "componentId": ""
                    }, 
                    {
                        "factorId": "Social", 
                        "studentId": "IDALU1987", 
                        "levelId": "Improve", 
                        "surveyId": "SurveyOne", 
                        "historic": [
                            63.95348837209303, 
                            15.116279069767442, 
                            20.930232558139537
                        ], 
                        "cohortCount": 97, 
                        "componentId": ""
                    }, 
                    {
                        "factorId": "Social", 
                        "studentId": "IDALU1987", 
                        "levelId": "Enrich", 
                        "surveyId": "SurveyOne", 
                        "historic": [
                            55.55555555555556, 
                            16.666666666666668, 
                            27.77777777777778
                        ], 
                        "cohortCount": 9, 
                        "componentId": ""
                    }, 
                    {
                        "factorId": "Social", 
                        "studentId": "IDALU1987", 
                        "levelId": "Persist", 
                        "surveyId": "SurveyOne", 
                        "historic": [
                            57.69230769230769, 
                            23.076923076923077, 
                            19.23076923076923
                        ], 
                        "cohortCount": 26, 
                        "componentId": ""
                    }, 
                    {
                        "factorId": "Family", 
                        "studentId": "IDALU1987", 
                        "levelId": "Improve", 
                        "surveyId": "SurveyOne", 
                        "historic": [
                            60.3448275862069, 
                            18.96551724137931, 
                            20.689655172413794
                        ], 
                        "cohortCount": 65, 
                        "componentId": ""
                    }, 
                    {
                        "factorId": "Family", 
                        "studentId": "IDALU1987", 
                        "levelId": "Enrich", 
                        "surveyId": "SurveyOne", 
                        "historic": [
                            75.0, 
                            0.0, 
                            25.0
                        ], 
                        "cohortCount": 22, 
                        "componentId": ""
                    }, 
                    {
                        "factorId": "Family", 
                        "studentId": "IDALU1987", 
                        "levelId": "Persist", 
                        "surveyId": "SurveyOne", 
                        "historic": [
                            56.25, 
                            22.916666666666668, 
                            20.833333333333332
                        ], 
                        "cohortCount": 45, 
                        "componentId": ""
                    }, 
                    {
                        "factorId": "Physical", 
                        "studentId": "IDALU1987", 
                        "levelId": "Improve", 
                        "surveyId": "SurveyOne", 
                        "historic": [
                            61.42857142857143, 
                            18.571428571428573, 
                            20.0
                        ], 
                        "cohortCount": 75, 
                        "componentId": ""
                    }, 
                    {
                        "factorId": "Physical", 
                        "studentId": "IDALU1987", 
                        "levelId": "Enrich", 
                        "surveyId": "SurveyOne", 
                        "historic": [
                            37.5, 
                            12.5, 
                            50.0
                        ], 
                        "cohortCount": 17, 
                        "componentId": ""
                    }, 
                    {
                        "factorId": "Physical", 
                        "studentId": "IDALU1987", 
                        "levelId": "Persist", 
                        "surveyId": "SurveyOne", 
                        "historic": [
                            70.45454545454545, 
                            15.909090909090908, 
                            13.636363636363637
                        ], 
                        "cohortCount": 40, 
                        "componentId": ""
                    }, 
                    {
                        "factorId": "Methodical", 
                        "studentId": "IDALU1987", 
                        "levelId": "VeryLow", 
                        "surveyId": "SurveyTwo", 
                        "historic": [
                            80.0, 
                            0.0, 
                            20.0
                        ], 
                        "cohortCount": 11, 
                        "componentId": ""
                    }, 
                    {
                        "factorId": "Methodical", 
                        "studentId": "IDALU1987", 
                        "levelId": "Low", 
                        "surveyId": "SurveyTwo", 
                        "historic": [
                            55.55555555555556, 
                            5.555555555555555, 
                            38.888888888888886
                        ], 
                        "cohortCount": 23, 
                        "componentId": ""
                    }, 
                    {
                        "factorId": "Methodical", 
                        "studentId": "IDALU1987", 
                        "levelId": "Medium", 
                        "surveyId": "SurveyTwo", 
                        "historic": [
                            63.793103448275865, 
                            17.24137931034483, 
                            18.96551724137931
                        ], 
                        "cohortCount": 62, 
                        "componentId": ""
                    }, 
                    {
                        "factorId": "Methodical", 
                        "studentId": "IDALU1987", 
                        "levelId": "High", 
                        "surveyId": "SurveyTwo", 
                        "historic": [
                            64.28571428571429, 
                            14.285714285714286, 
                            21.428571428571427
                        ], 
                        "cohortCount": 22, 
                        "componentId": ""
                    }, 
                    {
                        "factorId": "Methodical", 
                        "studentId": "IDALU1987", 
                        "levelId": "VeryHigh", 
                        "surveyId": "SurveyTwo", 
                        "historic": [
                            52.38095238095238, 
                            33.333333333333336, 
                            14.285714285714286
                        ], 
                        "cohortCount": 14, 
                        "componentId": ""
                    }, 
                    {
                        "factorId": "Prosecution", 
                        "studentId": "IDALU1987", 
                        "levelId": "VeryLow", 
                        "surveyId": "SurveyTwo", 
                        "historic": [
                            60.0, 
                            30.0, 
                            10.0
                        ], 
                        "cohortCount": 10, 
                        "componentId": "Deep"
                    }, 
                    {
                        "factorId": "Prosecution", 
                        "studentId": "IDALU1987", 
                        "levelId": "Low", 
                        "surveyId": "SurveyTwo", 
                        "historic": [
                            84.61538461538461, 
                            3.8461538461538463, 
                            11.538461538461538
                        ], 
                        "cohortCount": 21, 
                        "componentId": "Deep"
                    }, 
                    {
                        "factorId": "Prosecution", 
                        "studentId": "IDALU1987", 
                        "levelId": "Medium", 
                        "surveyId": "SurveyTwo", 
                        "historic": [
                            56.0, 
                            22.0, 
                            22.0
                        ], 
                        "cohortCount": 63, 
                        "componentId": "Deep"
                    }, 
                    {
                        "factorId": "Prosecution", 
                        "studentId": "IDALU1987", 
                        "levelId": "High", 
                        "surveyId": "SurveyTwo", 
                        "historic": [
                            63.63636363636363, 
                            9.090909090909092, 
                            27.272727272727273
                        ], 
                        "cohortCount": 17, 
                        "componentId": "Deep"
                    }, 
                    {
                        "factorId": "Prosecution", 
                        "studentId": "IDALU1987", 
                        "levelId": "VeryHigh", 
                        "surveyId": "SurveyTwo", 
                        "historic": [
                            50.0, 
                            25.0, 
                            25.0
                        ], 
                        "cohortCount": 21, 
                        "componentId": "Deep"
                    }, 
                    {
                        "factorId": "Prosecution", 
                        "studentId": "IDALU1987", 
                        "levelId": "VeryLow", 
                        "surveyId": "SurveyTwo", 
                        "historic": [
                            44.11764705882353, 
                            26.470588235294116, 
                            29.41176470588235
                        ], 
                        "cohortCount": 41, 
                        "componentId": "Superficial"
                    }, 
                    {
                        "factorId": "Prosecution", 
                        "studentId": "IDALU1987", 
                        "levelId": "Low", 
                        "surveyId": "SurveyTwo", 
                        "historic": [
                            75.0, 
                            12.5, 
                            12.5
                        ], 
                        "cohortCount": 30, 
                        "componentId": "Superficial"
                    }, 
                    {
                        "factorId": "Prosecution", 
                        "studentId": "IDALU1987", 
                        "levelId": "Medium", 
                        "surveyId": "SurveyTwo", 
                        "historic": [
                            60.46511627906977, 
                            16.27906976744186, 
                            23.25581395348837
                        ], 
                        "cohortCount": 45, 
                        "componentId": "Superficial"
                    }, 
                    {
                        "factorId": "Prosecution", 
                        "studentId": "IDALU1987", 
                        "levelId": "High", 
                        "surveyId": "SurveyTwo", 
                        "historic": [
                            73.33333333333333, 
                            13.333333333333334, 
                            13.333333333333334
                        ], 
                        "cohortCount": 13, 
                        "componentId": "Superficial"
                    }, 
                    {
                        "factorId": "Prosecution", 
                        "studentId": "IDALU1987", 
                        "levelId": "VeryHigh", 
                        "surveyId": "SurveyTwo", 
                        "historic": [
                            66.66666666666667, 
                            0.0, 
                            33.333333333333336
                        ], 
                        "cohortCount": 3, 
                        "componentId": "Superficial"
                    }, 
                    {
                        "factorId": "Prosecution", 
                        "studentId": "IDALU1987", 
                        "levelId": "VeryLow", 
                        "surveyId": "SurveyTwo", 
                        "historic": [
                            60.0, 
                            20.0, 
                            20.0
                        ], 
                        "cohortCount": 15, 
                        "componentId": "Elavorative"
                    }, 
                    {
                        "factorId": "Prosecution", 
                        "studentId": "IDALU1987", 
                        "levelId": "Low", 
                        "surveyId": "SurveyTwo", 
                        "historic": [
                            68.0, 
                            12.0, 
                            20.0
                        ], 
                        "cohortCount": 31, 
                        "componentId": "Elavorative"
                    }, 
                    {
                        "factorId": "Prosecution", 
                        "studentId": "IDALU1987", 
                        "levelId": "Medium", 
                        "surveyId": "SurveyTwo", 
                        "historic": [
                            50.0, 
                            21.153846153846153, 
                            28.846153846153847
                        ], 
                        "cohortCount": 46, 
                        "componentId": "Elavorative"
                    }, 
                    {
                        "factorId": "Prosecution", 
                        "studentId": "IDALU1987", 
                        "levelId": "High", 
                        "surveyId": "SurveyTwo", 
                        "historic": [
                            71.42857142857143, 
                            19.047619047619047, 
                            9.523809523809524
                        ], 
                        "cohortCount": 27, 
                        "componentId": "Elavorative"
                    }, 
                    {
                        "factorId": "Prosecution", 
                        "studentId": "IDALU1987", 
                        "levelId": "VeryHigh", 
                        "surveyId": "SurveyTwo", 
                        "historic": [
                            76.47058823529412, 
                            5.882352941176471, 
                            17.647058823529413
                        ], 
                        "cohortCount": 13, 
                        "componentId": "Elavorative"
                    }
                ]
                },
                {
                    "studentId" : "IDALU1373",
                    "startYear" : 2018,
                    "studentResponses" : [       
                    {
                        "surveyId": "SurveyOne", 
                        "factorId": "Academic", 
                        "studentId": "IDALU1373", 
                        "componentId": "", 
                        "levelId": "Persist"
                    }, 
                    {
                        "surveyId": "SurveyOne", 
                        "factorId": "Emotional", 
                        "studentId": "IDALU1373", 
                        "componentId": "", 
                        "levelId": "Improve"
                    }, 
                    {
                        "surveyId": "SurveyOne", 
                        "factorId": "Social", 
                        "studentId": "IDALU1373", 
                        "componentId": "", 
                        "levelId": "Improve"
                    }, 
                    {
                        "surveyId": "SurveyOne", 
                        "factorId": "Family", 
                        "studentId": "IDALU1373", 
                        "componentId": "", 
                        "levelId": "Improve"
                    }, 
                    {
                        "surveyId": "SurveyOne", 
                        "factorId": "Physical", 
                        "studentId": "IDALU1373", 
                        "componentId": "", 
                        "levelId": "Improve"
                    }, 
                    {
                        "factorId": "Methodical", 
                        "studentId": "IDALU1373", 
                        "predominantId": " ", 
                        "levelId": "Medio", 
                        "surveyId": "SurveyTwo", 
                        "componentId": ""
                    }, 
                    {
                        "factorId": "Prosecution", 
                        "studentId": "IDALU1373", 
                        "predominantId": " ", 
                        "levelId": "Muy Alto", 
                        "surveyId": "SurveyTwo", 
                        "componentId": "Deep"
                    }, 
                    {
                        "factorId": "Prosecution", 
                        "studentId": "IDALU1373", 
                        "predominantId": " ", 
                        "levelId": "Medio", 
                        "surveyId": "SurveyTwo", 
                        "componentId": "Elavorative"
                    }, 
                    {
                        "factorId": "Prosecution", 
                        "studentId": "IDALU1373", 
                        "predominantId": " ", 
                        "levelId": "Muy Bajo", 
                        "surveyId": "SurveyTwo", 
                        "componentId": "Superficial"
                    }
                ],
                    "groupData" : [
                        {
                            "factorId": "Academic", 
                            "studentId": "IDALU1373", 
                            "levelId": "Improve", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                51.851851851851855, 
                                18.51851851851852, 
                                29.62962962962963
                            ], 
                            "cohortCount": 25, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Academic", 
                            "studentId": "IDALU1373", 
                            "levelId": "Enrich", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                66.66666666666667, 
                                20.512820512820515, 
                                12.820512820512821
                            ], 
                            "cohortCount": 34, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Academic", 
                            "studentId": "IDALU1373", 
                            "levelId": "Persist", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                62.5, 
                                14.0625, 
                                23.4375
                            ], 
                            "cohortCount": 73, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Emotional", 
                            "studentId": "IDALU1373", 
                            "levelId": "Improve", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                62.745098039215684, 
                                21.568627450980394, 
                                15.686274509803921
                            ], 
                            "cohortCount": 65, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Emotional", 
                            "studentId": "IDALU1373", 
                            "levelId": "Enrich", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                52.17391304347826, 
                                13.043478260869565, 
                                34.78260869565217
                            ], 
                            "cohortCount": 19, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Emotional", 
                            "studentId": "IDALU1373", 
                            "levelId": "Persist", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                64.28571428571429, 
                                14.285714285714286, 
                                21.428571428571427
                            ], 
                            "cohortCount": 48, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Social", 
                            "studentId": "IDALU1373", 
                            "levelId": "Improve", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                63.95348837209303, 
                                15.116279069767442, 
                                20.930232558139537
                            ], 
                            "cohortCount": 97, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Social", 
                            "studentId": "IDALU1373", 
                            "levelId": "Enrich", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                55.55555555555556, 
                                16.666666666666668, 
                                27.77777777777778
                            ], 
                            "cohortCount": 9, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Social", 
                            "studentId": "IDALU1373", 
                            "levelId": "Persist", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                57.69230769230769, 
                                23.076923076923077, 
                                19.23076923076923
                            ], 
                            "cohortCount": 26, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Family", 
                            "studentId": "IDALU1373", 
                            "levelId": "Improve", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                60.3448275862069, 
                                18.96551724137931, 
                                20.689655172413794
                            ], 
                            "cohortCount": 65, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Family", 
                            "studentId": "IDALU1373", 
                            "levelId": "Enrich", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                75.0, 
                                0.0, 
                                25.0
                            ], 
                            "cohortCount": 22, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Family", 
                            "studentId": "IDALU1373", 
                            "levelId": "Persist", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                56.25, 
                                22.916666666666668, 
                                20.833333333333332
                            ], 
                            "cohortCount": 45, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Physical", 
                            "studentId": "IDALU1373", 
                            "levelId": "Improve", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                61.42857142857143, 
                                18.571428571428573, 
                                20.0
                            ], 
                            "cohortCount": 75, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Physical", 
                            "studentId": "IDALU1373", 
                            "levelId": "Enrich", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                37.5, 
                                12.5, 
                                50.0
                            ], 
                            "cohortCount": 17, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Physical", 
                            "studentId": "IDALU1373", 
                            "levelId": "Persist", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                70.45454545454545, 
                                15.909090909090908, 
                                13.636363636363637
                            ], 
                            "cohortCount": 40, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1373", 
                            "levelId": "VeryLow", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                80.0, 
                                0.0, 
                                20.0
                            ], 
                            "cohortCount": 11, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1373", 
                            "levelId": "Low", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                55.55555555555556, 
                                5.555555555555555, 
                                38.888888888888886
                            ], 
                            "cohortCount": 23, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1373", 
                            "levelId": "Medium", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                63.793103448275865, 
                                17.24137931034483, 
                                18.96551724137931
                            ], 
                            "cohortCount": 62, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1373", 
                            "levelId": "High", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                64.28571428571429, 
                                14.285714285714286, 
                                21.428571428571427
                            ], 
                            "cohortCount": 22, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1373", 
                            "levelId": "VeryHigh", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                52.38095238095238, 
                                33.333333333333336, 
                                14.285714285714286
                            ], 
                            "cohortCount": 14, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1373", 
                            "levelId": "VeryLow", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                60.0, 
                                30.0, 
                                10.0
                            ], 
                            "cohortCount": 10, 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1373", 
                            "levelId": "Low", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                84.61538461538461, 
                                3.8461538461538463, 
                                11.538461538461538
                            ], 
                            "cohortCount": 21, 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1373", 
                            "levelId": "Medium", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                56.0, 
                                22.0, 
                                22.0
                            ], 
                            "cohortCount": 63, 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1373", 
                            "levelId": "High", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                63.63636363636363, 
                                9.090909090909092, 
                                27.272727272727273
                            ], 
                            "cohortCount": 17, 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1373", 
                            "levelId": "VeryHigh", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                50.0, 
                                25.0, 
                                25.0
                            ], 
                            "cohortCount": 21, 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1373", 
                            "levelId": "VeryLow", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                44.11764705882353, 
                                26.470588235294116, 
                                29.41176470588235
                            ], 
                            "cohortCount": 41, 
                            "componentId": "Superficial"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1373", 
                            "levelId": "Low", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                75.0, 
                                12.5, 
                                12.5
                            ], 
                            "cohortCount": 30, 
                            "componentId": "Superficial"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1373", 
                            "levelId": "Medium", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                60.46511627906977, 
                                16.27906976744186, 
                                23.25581395348837
                            ], 
                            "cohortCount": 45, 
                            "componentId": "Superficial"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1373", 
                            "levelId": "High", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                73.33333333333333, 
                                13.333333333333334, 
                                13.333333333333334
                            ], 
                            "cohortCount": 13, 
                            "componentId": "Superficial"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1373", 
                            "levelId": "VeryHigh", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                66.66666666666667, 
                                0.0, 
                                33.333333333333336
                            ], 
                            "cohortCount": 3, 
                            "componentId": "Superficial"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1373", 
                            "levelId": "VeryLow", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                60.0, 
                                20.0, 
                                20.0
                            ], 
                            "cohortCount": 15, 
                            "componentId": "Elavorative"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1373", 
                            "levelId": "Low", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                68.0, 
                                12.0, 
                                20.0
                            ], 
                            "cohortCount": 31, 
                            "componentId": "Elavorative"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1373", 
                            "levelId": "Medium", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                50.0, 
                                21.153846153846153, 
                                28.846153846153847
                            ], 
                            "cohortCount": 46, 
                            "componentId": "Elavorative"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1373", 
                            "levelId": "High", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                71.42857142857143, 
                                19.047619047619047, 
                                9.523809523809524
                            ], 
                            "cohortCount": 27, 
                            "componentId": "Elavorative"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1373", 
                            "levelId": "VeryHigh", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                76.47058823529412, 
                                5.882352941176471, 
                                17.647058823529413
                            ], 
                            "cohortCount": 13, 
                            "componentId": "Elavorative"
                        }
                    ]
                },
                {
                    "studentId" : "IDALU1263",
                    "startYear" : 2018,
                    "studentResponses" : [
                        {
                            "surveyId": "SurveyOne", 
                            "factorId": "Academic", 
                            "studentId": "IDALU1263", 
                            "componentId": "", 
                            "levelId": "Persist"
                        }, 
                        {
                            "surveyId": "SurveyOne", 
                            "factorId": "Emotional", 
                            "studentId": "IDALU1263", 
                            "componentId": "", 
                            "levelId": "Enrich"
                        }, 
                        {
                            "surveyId": "SurveyOne", 
                            "factorId": "Social", 
                            "studentId": "IDALU1263", 
                            "componentId": "", 
                            "levelId": "Improve"
                        }, 
                        {
                            "surveyId": "SurveyOne", 
                            "factorId": "Family", 
                            "studentId": "IDALU1263", 
                            "componentId": "", 
                            "levelId": "Improve"
                        }, 
                        {
                            "surveyId": "SurveyOne", 
                            "factorId": "Physical", 
                            "studentId": "IDALU1263", 
                            "componentId": "", 
                            "levelId": "Improve"
                        },
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1263", 
                            "predominantId": " ", 
                            "levelId": "Medio", 
                            "surveyId": "SurveyTwo", 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1263", 
                            "predominantId": " ", 
                            "levelId": "Medio", 
                            "surveyId": "SurveyTwo", 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1263", 
                            "predominantId": " ", 
                            "levelId": "Alto", 
                            "surveyId": "SurveyTwo", 
                            "componentId": "Elavorative"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1263", 
                            "predominantId": " ", 
                            "levelId": "Muy Bajo", 
                            "surveyId": "SurveyTwo", 
                            "componentId": "Superficial"
                        }
                    ],
                    "groupData" : [
                        {
                            "factorId": "Academic", 
                            "studentId": "IDALU1263", 
                            "levelId": "Improve", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                51.851851851851855, 
                                18.51851851851852, 
                                29.62962962962963
                            ], 
                            "cohortCount": 25, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Academic", 
                            "studentId": "IDALU1263", 
                            "levelId": "Enrich", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                66.66666666666667, 
                                20.512820512820515, 
                                12.820512820512821
                            ], 
                            "cohortCount": 34, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Academic", 
                            "studentId": "IDALU1263", 
                            "levelId": "Persist", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                62.5, 
                                14.0625, 
                                23.4375
                            ], 
                            "cohortCount": 73, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Emotional", 
                            "studentId": "IDALU1263", 
                            "levelId": "Improve", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                62.745098039215684, 
                                21.568627450980394, 
                                15.686274509803921
                            ], 
                            "cohortCount": 65, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Emotional", 
                            "studentId": "IDALU1263", 
                            "levelId": "Enrich", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                52.17391304347826, 
                                13.043478260869565, 
                                34.78260869565217
                            ], 
                            "cohortCount": 19, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Emotional", 
                            "studentId": "IDALU1263", 
                            "levelId": "Persist", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                64.28571428571429, 
                                14.285714285714286, 
                                21.428571428571427
                            ], 
                            "cohortCount": 48, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Social", 
                            "studentId": "IDALU1263", 
                            "levelId": "Improve", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                63.95348837209303, 
                                15.116279069767442, 
                                20.930232558139537
                            ], 
                            "cohortCount": 97, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Social", 
                            "studentId": "IDALU1263", 
                            "levelId": "Enrich", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                55.55555555555556, 
                                16.666666666666668, 
                                27.77777777777778
                            ], 
                            "cohortCount": 9, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Social", 
                            "studentId": "IDALU1263", 
                            "levelId": "Persist", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                57.69230769230769, 
                                23.076923076923077, 
                                19.23076923076923
                            ], 
                            "cohortCount": 26, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Family", 
                            "studentId": "IDALU1263", 
                            "levelId": "Improve", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                60.3448275862069, 
                                18.96551724137931, 
                                20.689655172413794
                            ], 
                            "cohortCount": 65, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Family", 
                            "studentId": "IDALU1263", 
                            "levelId": "Enrich", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                75.0, 
                                0.0, 
                                25.0
                            ], 
                            "cohortCount": 22, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Family", 
                            "studentId": "IDALU1263", 
                            "levelId": "Persist", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                56.25, 
                                22.916666666666668, 
                                20.833333333333332
                            ], 
                            "cohortCount": 45, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Physical", 
                            "studentId": "IDALU1263", 
                            "levelId": "Improve", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                61.42857142857143, 
                                18.571428571428573, 
                                20.0
                            ], 
                            "cohortCount": 75, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Physical", 
                            "studentId": "IDALU1263", 
                            "levelId": "Enrich", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                37.5, 
                                12.5, 
                                50.0
                            ], 
                            "cohortCount": 17, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Physical", 
                            "studentId": "IDALU1263", 
                            "levelId": "Persist", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                70.45454545454545, 
                                15.909090909090908, 
                                13.636363636363637
                            ], 
                            "cohortCount": 40, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1263", 
                            "levelId": "VeryLow", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                80.0, 
                                0.0, 
                                20.0
                            ], 
                            "cohortCount": 11, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1263", 
                            "levelId": "Low", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                55.55555555555556, 
                                5.555555555555555, 
                                38.888888888888886
                            ], 
                            "cohortCount": 23, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1263", 
                            "levelId": "Medium", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                63.793103448275865, 
                                17.24137931034483, 
                                18.96551724137931
                            ], 
                            "cohortCount": 62, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1263", 
                            "levelId": "High", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                64.28571428571429, 
                                14.285714285714286, 
                                21.428571428571427
                            ], 
                            "cohortCount": 22, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1263", 
                            "levelId": "VeryHigh", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                52.38095238095238, 
                                33.333333333333336, 
                                14.285714285714286
                            ], 
                            "cohortCount": 14, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1263", 
                            "levelId": "VeryLow", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                60.0, 
                                30.0, 
                                10.0
                            ], 
                            "cohortCount": 10, 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1263", 
                            "levelId": "Low", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                84.61538461538461, 
                                3.8461538461538463, 
                                11.538461538461538
                            ], 
                            "cohortCount": 21, 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1263", 
                            "levelId": "Medium", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                56.0, 
                                22.0, 
                                22.0
                            ], 
                            "cohortCount": 63, 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1263", 
                            "levelId": "High", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                63.63636363636363, 
                                9.090909090909092, 
                                27.272727272727273
                            ], 
                            "cohortCount": 17, 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1263", 
                            "levelId": "VeryHigh", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                50.0, 
                                25.0, 
                                25.0
                            ], 
                            "cohortCount": 21, 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1263", 
                            "levelId": "VeryLow", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                44.11764705882353, 
                                26.470588235294116, 
                                29.41176470588235
                            ], 
                            "cohortCount": 41, 
                            "componentId": "Superficial"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1263", 
                            "levelId": "Low", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                75.0, 
                                12.5, 
                                12.5
                            ], 
                            "cohortCount": 30, 
                            "componentId": "Superficial"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1263", 
                            "levelId": "Medium", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                60.46511627906977, 
                                16.27906976744186, 
                                23.25581395348837
                            ], 
                            "cohortCount": 45, 
                            "componentId": "Superficial"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1263", 
                            "levelId": "High", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                73.33333333333333, 
                                13.333333333333334, 
                                13.333333333333334
                            ], 
                            "cohortCount": 13, 
                            "componentId": "Superficial"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1263", 
                            "levelId": "VeryHigh", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                66.66666666666667, 
                                0.0, 
                                33.333333333333336
                            ], 
                            "cohortCount": 3, 
                            "componentId": "Superficial"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1263", 
                            "levelId": "VeryLow", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                60.0, 
                                20.0, 
                                20.0
                            ], 
                            "cohortCount": 15, 
                            "componentId": "Elavorative"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1263", 
                            "levelId": "Low", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                68.0, 
                                12.0, 
                                20.0
                            ], 
                            "cohortCount": 31, 
                            "componentId": "Elavorative"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1263", 
                            "levelId": "Medium", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                50.0, 
                                21.153846153846153, 
                                28.846153846153847
                            ], 
                            "cohortCount": 46, 
                            "componentId": "Elavorative"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1263", 
                            "levelId": "High", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                71.42857142857143, 
                                19.047619047619047, 
                                9.523809523809524
                            ], 
                            "cohortCount": 27, 
                            "componentId": "Elavorative"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1263", 
                            "levelId": "VeryHigh", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                76.47058823529412, 
                                5.882352941176471, 
                                17.647058823529413
                            ], 
                            "cohortCount": 13, 
                            "componentId": "Elavorative"
                        }
                    ]
                },
                {
                    "studentId" : "IDALU1677",
                    "startYear" : 2018,
                    "studentResponses" : [
                        {
                            "surveyId": "SurveyOne", 
                            "factorId": "Academic", 
                            "studentId": "IDALU1677", 
                            "componentId": "", 
                            "levelId": "Persist"
                        }, 
                        {
                            "surveyId": "SurveyOne", 
                            "factorId": "Emotional", 
                            "studentId": "IDALU1677", 
                            "componentId": "", 
                            "levelId": "Enrich"
                        }, 
                        {
                            "surveyId": "SurveyOne", 
                            "factorId": "Social", 
                            "studentId": "IDALU1677", 
                            "componentId": "", 
                            "levelId": "Improve"
                        }, 
                        {
                            "surveyId": "SurveyOne", 
                            "factorId": "Family", 
                            "studentId": "IDALU1677", 
                            "componentId": "", 
                            "levelId": "Persist"
                        }, 
                        {
                            "surveyId": "SurveyOne", 
                            "factorId": "Physical", 
                            "studentId": "IDALU1677", 
                            "componentId": "", 
                            "levelId": "Improve"
                        }, 
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1677", 
                            "predominantId": " ", 
                            "levelId": "Medio", 
                            "surveyId": "SurveyTwo", 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1677", 
                            "predominantId": " ", 
                            "levelId": "Alto", 
                            "surveyId": "SurveyTwo", 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1677", 
                            "predominantId": " ", 
                            "levelId": "Medio", 
                            "surveyId": "SurveyTwo", 
                            "componentId": "Elavorative"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1677", 
                            "predominantId": " ", 
                            "levelId": "Bajo", 
                            "surveyId": "SurveyTwo", 
                            "componentId": "Superficial"
                        }
                    ],
                    "groupData" : [
                        {
                            "factorId": "Academic", 
                            "studentId": "IDALU1677", 
                            "levelId": "Improve", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                45.23809523809524, 
                                22.61904761904762, 
                                32.142857142857146
                            ], 
                            "cohortCount": 25, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Academic", 
                            "studentId": "IDALU1677", 
                            "levelId": "Enrich", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                69.23076923076923, 
                                17.307692307692307, 
                                13.461538461538462
                            ], 
                            "cohortCount": 34, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Academic", 
                            "studentId": "IDALU1677", 
                            "levelId": "Persist", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                51.55555555555556, 
                                14.222222222222221, 
                                34.22222222222222
                            ], 
                            "cohortCount": 73, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Emotional", 
                            "studentId": "IDALU1677", 
                            "levelId": "Improve", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                53.191489361702125, 
                                18.43971631205674, 
                                28.368794326241133
                            ], 
                            "cohortCount": 65, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Emotional", 
                            "studentId": "IDALU1677", 
                            "levelId": "Enrich", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                52.94117647058823, 
                                14.705882352941176, 
                                32.35294117647059
                            ], 
                            "cohortCount": 19, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Emotional", 
                            "studentId": "IDALU1677", 
                            "levelId": "Persist", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                52.1505376344086, 
                                15.591397849462366, 
                                32.25806451612903
                            ], 
                            "cohortCount": 48, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Social", 
                            "studentId": "IDALU1677", 
                            "levelId": "Improve", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                55.072463768115945, 
                                17.391304347826086, 
                                27.536231884057973
                            ], 
                            "cohortCount": 97, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Social", 
                            "studentId": "IDALU1677", 
                            "levelId": "Enrich", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                38.297872340425535, 
                                14.893617021276595, 
                                46.808510638297875
                            ], 
                            "cohortCount": 9, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Social", 
                            "studentId": "IDALU1677", 
                            "levelId": "Persist", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                54.205607476635514, 
                                15.88785046728972, 
                                29.906542056074766
                            ], 
                            "cohortCount": 26, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Family", 
                            "studentId": "IDALU1677", 
                            "levelId": "Improve", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                53.65853658536585, 
                                17.88617886178862, 
                                28.45528455284553
                            ], 
                            "cohortCount": 65, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Family", 
                            "studentId": "IDALU1677", 
                            "levelId": "Enrich", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                68.0, 
                                18.0, 
                                14.0
                            ], 
                            "cohortCount": 22, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Family", 
                            "studentId": "IDALU1677", 
                            "levelId": "Persist", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                49.45054945054945, 
                                18.13186813186813, 
                                32.417582417582416
                            ], 
                            "cohortCount": 45, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Physical", 
                            "studentId": "IDALU1677", 
                            "levelId": "Improve", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                56.88622754491018, 
                                20.35928143712575, 
                                22.75449101796407
                            ], 
                            "cohortCount": 75, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Physical", 
                            "studentId": "IDALU1677", 
                            "levelId": "Enrich", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                34.09090909090909, 
                                9.090909090909092, 
                                56.81818181818182
                            ], 
                            "cohortCount": 17, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Physical", 
                            "studentId": "IDALU1677", 
                            "levelId": "Persist", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                53.333333333333336, 
                                14.666666666666666, 
                                32.0
                            ], 
                            "cohortCount": 40, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1677", 
                            "levelId": "VeryLow", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                41.46341463414634, 
                                19.51219512195122, 
                                39.02439024390244
                            ], 
                            "cohortCount": 11, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1677", 
                            "levelId": "Low", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                55.55555555555556, 
                                14.814814814814815, 
                                29.62962962962963
                            ], 
                            "cohortCount": 23, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1677", 
                            "levelId": "Medium", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                54.0, 
                                14.0, 
                                32.0
                            ], 
                            "cohortCount": 62, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1677", 
                            "levelId": "High", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                57.69230769230769, 
                                13.461538461538462, 
                                28.846153846153847
                            ], 
                            "cohortCount": 22, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1677", 
                            "levelId": "VeryHigh", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                45.945945945945944, 
                                32.432432432432435, 
                                21.62162162162162
                            ], 
                            "cohortCount": 14, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1677", 
                            "levelId": "VeryLow", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                43.956043956043956, 
                                26.373626373626372, 
                                29.67032967032967
                            ], 
                            "cohortCount": 10, 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1677", 
                            "levelId": "Low", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                73.17073170731707, 
                                9.75609756097561, 
                                17.073170731707318
                            ], 
                            "cohortCount": 21, 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1677", 
                            "levelId": "Medium", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                61.702127659574465, 
                                13.829787234042554, 
                                24.46808510638298
                            ], 
                            "cohortCount": 63, 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1677", 
                            "levelId": "High", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                58.333333333333336, 
                                8.333333333333334, 
                                33.333333333333336
                            ], 
                            "cohortCount": 17, 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1677", 
                            "levelId": "VeryHigh", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                50.0, 
                                25.0, 
                                25.0
                            ], 
                            "cohortCount": 21, 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1677", 
                            "levelId": "VeryLow", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                44.44444444444444, 
                                25.0, 
                                30.555555555555557
                            ], 
                            "cohortCount": 41, 
                            "componentId": "Superficial"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1677", 
                            "levelId": "Low", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                69.38775510204081, 
                                14.285714285714286, 
                                16.3265306122449
                            ], 
                            "cohortCount": 30, 
                            "componentId": "Superficial"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1677", 
                            "levelId": "Medium", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                47.10144927536232, 
                                16.666666666666668, 
                                36.231884057971016
                            ], 
                            "cohortCount": 45, 
                            "componentId": "Superficial"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1677", 
                            "levelId": "High", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                50.0, 
                                19.047619047619047, 
                                30.952380952380953
                            ], 
                            "cohortCount": 13, 
                            "componentId": "Superficial"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1677", 
                            "levelId": "VeryHigh", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                55.55555555555556, 
                                5.555555555555555, 
                                38.888888888888886
                            ], 
                            "cohortCount": 3, 
                            "componentId": "Superficial"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1677", 
                            "levelId": "VeryLow", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                46.666666666666664, 
                                23.333333333333332, 
                                30.0
                            ], 
                            "cohortCount": 15, 
                            "componentId": "Elavorative"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1677", 
                            "levelId": "Low", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                51.42857142857143, 
                                18.571428571428573, 
                                30.0
                            ], 
                            "cohortCount": 31, 
                            "componentId": "Elavorative"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1677", 
                            "levelId": "Medium", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                51.53846153846154, 
                                13.846153846153847, 
                                34.61538461538461
                            ], 
                            "cohortCount": 46, 
                            "componentId": "Elavorative"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1677", 
                            "levelId": "High", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                52.38095238095238, 
                                19.047619047619047, 
                                28.571428571428573
                            ], 
                            "cohortCount": 27, 
                            "componentId": "Elavorative"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1677", 
                            "levelId": "VeryHigh", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                76.47058823529412, 
                                5.882352941176471, 
                                17.647058823529413
                            ], 
                            "cohortCount": 13, 
                            "componentId": "Elavorative"
                        }
                    ]
                },
                {
                    "studentId" : "IDALU1888",
                    "startYear" : 2018,
                    "studentResponses" : [
                        {
                            "surveyId": "SurveyOne", 
                            "factorId": "Academic", 
                            "studentId": "IDALU1888", 
                            "componentId": "", 
                            "levelId": "Persist"
                        }, 
                        {
                            "surveyId": "SurveyOne", 
                            "factorId": "Emotional", 
                            "studentId": "IDALU1888", 
                            "componentId": "", 
                            "levelId": "Improve"
                        }, 
                        {
                            "surveyId": "SurveyOne", 
                            "factorId": "Social", 
                            "studentId": "IDALU1888", 
                            "componentId": "", 
                            "levelId": "Improve"
                        }, 
                        {
                            "surveyId": "SurveyOne", 
                            "factorId": "Family", 
                            "studentId": "IDALU1888", 
                            "componentId": "", 
                            "levelId": "Persist"
                        }, 
                        {
                            "surveyId": "SurveyOne", 
                            "factorId": "Physical", 
                            "studentId": "IDALU1888", 
                            "componentId": "", 
                            "levelId": "Persist"
                        }, 
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1888", 
                            "predominantId": " ", 
                            "levelId": "Medio", 
                            "surveyId": "SurveyTwo", 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1888", 
                            "predominantId": " ", 
                            "levelId": "Medio", 
                            "surveyId": "SurveyTwo", 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1888", 
                            "predominantId": " ", 
                            "levelId": "Medio", 
                            "surveyId": "SurveyTwo", 
                            "componentId": "Elavorative"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1888", 
                            "predominantId": " ", 
                            "levelId": "Bajo", 
                            "surveyId": "SurveyTwo", 
                            "componentId": "Superficial"
                        }
                    ],
                    "groupData" : [
                        {
                            "factorId": "Academic", 
                            "studentId": "IDALU1888", 
                            "levelId": "Improve", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                51.851851851851855, 
                                18.51851851851852, 
                                29.62962962962963
                            ], 
                            "cohortCount": 25, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Academic", 
                            "studentId": "IDALU1888", 
                            "levelId": "Enrich", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                66.66666666666667, 
                                20.512820512820515, 
                                12.820512820512821
                            ], 
                            "cohortCount": 34, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Academic", 
                            "studentId": "IDALU1888", 
                            "levelId": "Persist", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                62.5, 
                                14.0625, 
                                23.4375
                            ], 
                            "cohortCount": 73, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Emotional", 
                            "studentId": "IDALU1888", 
                            "levelId": "Improve", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                62.745098039215684, 
                                21.568627450980394, 
                                15.686274509803921
                            ], 
                            "cohortCount": 65, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Emotional", 
                            "studentId": "IDALU1888", 
                            "levelId": "Enrich", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                52.17391304347826, 
                                13.043478260869565, 
                                34.78260869565217
                            ], 
                            "cohortCount": 19, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Emotional", 
                            "studentId": "IDALU1888", 
                            "levelId": "Persist", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                64.28571428571429, 
                                14.285714285714286, 
                                21.428571428571427
                            ], 
                            "cohortCount": 48, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Social", 
                            "studentId": "IDALU1888", 
                            "levelId": "Improve", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                63.95348837209303, 
                                15.116279069767442, 
                                20.930232558139537
                            ], 
                            "cohortCount": 97, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Social", 
                            "studentId": "IDALU1888", 
                            "levelId": "Enrich", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                55.55555555555556, 
                                16.666666666666668, 
                                27.77777777777778
                            ], 
                            "cohortCount": 9, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Social", 
                            "studentId": "IDALU1888", 
                            "levelId": "Persist", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                57.69230769230769, 
                                23.076923076923077, 
                                19.23076923076923
                            ], 
                            "cohortCount": 26, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Family", 
                            "studentId": "IDALU1888", 
                            "levelId": "Improve", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                60.3448275862069, 
                                18.96551724137931, 
                                20.689655172413794
                            ], 
                            "cohortCount": 65, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Family", 
                            "studentId": "IDALU1888", 
                            "levelId": "Enrich", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                75.0, 
                                0.0, 
                                25.0
                            ], 
                            "cohortCount": 22, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Family", 
                            "studentId": "IDALU1888", 
                            "levelId": "Persist", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                56.25, 
                                22.916666666666668, 
                                20.833333333333332
                            ], 
                            "cohortCount": 45, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Physical", 
                            "studentId": "IDALU1888", 
                            "levelId": "Improve", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                61.42857142857143, 
                                18.571428571428573, 
                                20.0
                            ], 
                            "cohortCount": 75, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Physical", 
                            "studentId": "IDALU1888", 
                            "levelId": "Enrich", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                37.5, 
                                12.5, 
                                50.0
                            ], 
                            "cohortCount": 17, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Physical", 
                            "studentId": "IDALU1888", 
                            "levelId": "Persist", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                70.45454545454545, 
                                15.909090909090908, 
                                13.636363636363637
                            ], 
                            "cohortCount": 40, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1888", 
                            "levelId": "VeryLow", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                80.0, 
                                0.0, 
                                20.0
                            ], 
                            "cohortCount": 11, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1888", 
                            "levelId": "Low", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                55.55555555555556, 
                                5.555555555555555, 
                                38.888888888888886
                            ], 
                            "cohortCount": 23, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1888", 
                            "levelId": "Medium", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                63.793103448275865, 
                                17.24137931034483, 
                                18.96551724137931
                            ], 
                            "cohortCount": 62, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1888", 
                            "levelId": "High", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                64.28571428571429, 
                                14.285714285714286, 
                                21.428571428571427
                            ], 
                            "cohortCount": 22, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1888", 
                            "levelId": "VeryHigh", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                52.38095238095238, 
                                33.333333333333336, 
                                14.285714285714286
                            ], 
                            "cohortCount": 14, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1888", 
                            "levelId": "VeryLow", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                60.0, 
                                30.0, 
                                10.0
                            ], 
                            "cohortCount": 10, 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1888", 
                            "levelId": "Low", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                84.61538461538461, 
                                3.8461538461538463, 
                                11.538461538461538
                            ], 
                            "cohortCount": 21, 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1888", 
                            "levelId": "Medium", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                56.0, 
                                22.0, 
                                22.0
                            ], 
                            "cohortCount": 63, 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1888", 
                            "levelId": "High", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                63.63636363636363, 
                                9.090909090909092, 
                                27.272727272727273
                            ], 
                            "cohortCount": 17, 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1888", 
                            "levelId": "VeryHigh", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                50.0, 
                                25.0, 
                                25.0
                            ], 
                            "cohortCount": 21, 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1888", 
                            "levelId": "VeryLow", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                44.11764705882353, 
                                26.470588235294116, 
                                29.41176470588235
                            ], 
                            "cohortCount": 41, 
                            "componentId": "Superficial"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1888", 
                            "levelId": "Low", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                75.0, 
                                12.5, 
                                12.5
                            ], 
                            "cohortCount": 30, 
                            "componentId": "Superficial"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1888", 
                            "levelId": "Medium", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                60.46511627906977, 
                                16.27906976744186, 
                                23.25581395348837
                            ], 
                            "cohortCount": 45, 
                            "componentId": "Superficial"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1888", 
                            "levelId": "High", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                73.33333333333333, 
                                13.333333333333334, 
                                13.333333333333334
                            ], 
                            "cohortCount": 13, 
                            "componentId": "Superficial"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1888", 
                            "levelId": "VeryHigh", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                66.66666666666667, 
                                0.0, 
                                33.333333333333336
                            ], 
                            "cohortCount": 3, 
                            "componentId": "Superficial"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1888", 
                            "levelId": "VeryLow", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                60.0, 
                                20.0, 
                                20.0
                            ], 
                            "cohortCount": 15, 
                            "componentId": "Elavorative"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1888", 
                            "levelId": "Low", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                68.0, 
                                12.0, 
                                20.0
                            ], 
                            "cohortCount": 31, 
                            "componentId": "Elavorative"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1888", 
                            "levelId": "Medium", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                50.0, 
                                21.153846153846153, 
                                28.846153846153847
                            ], 
                            "cohortCount": 46, 
                            "componentId": "Elavorative"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1888", 
                            "levelId": "High", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                71.42857142857143, 
                                19.047619047619047, 
                                9.523809523809524
                            ], 
                            "cohortCount": 27, 
                            "componentId": "Elavorative"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1888", 
                            "levelId": "VeryHigh", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                76.47058823529412, 
                                5.882352941176471, 
                                17.647058823529413
                            ], 
                            "cohortCount": 13, 
                            "componentId": "Elavorative"
                        }
                    ]
                },
                {
                    "studentId" : "IDALU1552",
                    "startYear" : 2018,
                    "studentResponses" : [
                        {
                            "surveyId": "SurveyOne", 
                            "factorId": "Academic", 
                            "studentId": "IDALU1552", 
                            "componentId": "", 
                            "levelId": "Persist"
                        }, 
                        {
                            "surveyId": "SurveyOne", 
                            "factorId": "Emotional", 
                            "studentId": "IDALU1552", 
                            "componentId": "", 
                            "levelId": "Improve"
                        }, 
                        {
                            "surveyId": "SurveyOne", 
                            "factorId": "Social", 
                            "studentId": "IDALU1552", 
                            "componentId": "", 
                            "levelId": "Enrich"
                        }, 
                        {
                            "surveyId": "SurveyOne", 
                            "factorId": "Family", 
                            "studentId": "IDALU1552", 
                            "componentId": "", 
                            "levelId": "Improve"
                        }, 
                        {
                            "surveyId": "SurveyOne", 
                            "factorId": "Physical", 
                            "studentId": "IDALU1552", 
                            "componentId": "", 
                            "levelId": "Improve"
                        },
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1552", 
                            "predominantId": " ", 
                            "levelId": "Medio", 
                            "surveyId": "SurveyTwo", 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1552", 
                            "predominantId": " ", 
                            "levelId": "Medio", 
                            "surveyId": "SurveyTwo", 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1552", 
                            "predominantId": " ", 
                            "levelId": "Medio", 
                            "surveyId": "SurveyTwo", 
                            "componentId": "Elavorative"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1552", 
                            "predominantId": " ", 
                            "levelId": "Medio", 
                            "surveyId": "SurveyTwo", 
                            "componentId": "Superficial"
                        }
                    ],
                    "groupData" : [
                        {
                            "factorId": "Academic", 
                            "studentId": "IDALU1552", 
                            "levelId": "Improve", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                45.23809523809524, 
                                22.61904761904762, 
                                32.142857142857146
                            ], 
                            "cohortCount": 25, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Academic", 
                            "studentId": "IDALU1552", 
                            "levelId": "Enrich", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                69.23076923076923, 
                                17.307692307692307, 
                                13.461538461538462
                            ], 
                            "cohortCount": 34, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Academic", 
                            "studentId": "IDALU1552", 
                            "levelId": "Persist", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                51.55555555555556, 
                                14.222222222222221, 
                                34.22222222222222
                            ], 
                            "cohortCount": 73, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Emotional", 
                            "studentId": "IDALU1552", 
                            "levelId": "Improve", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                53.191489361702125, 
                                18.43971631205674, 
                                28.368794326241133
                            ], 
                            "cohortCount": 65, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Emotional", 
                            "studentId": "IDALU1552", 
                            "levelId": "Enrich", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                52.94117647058823, 
                                14.705882352941176, 
                                32.35294117647059
                            ], 
                            "cohortCount": 19, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Emotional", 
                            "studentId": "IDALU1552", 
                            "levelId": "Persist", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                52.1505376344086, 
                                15.591397849462366, 
                                32.25806451612903
                            ], 
                            "cohortCount": 48, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Social", 
                            "studentId": "IDALU1552", 
                            "levelId": "Improve", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                55.072463768115945, 
                                17.391304347826086, 
                                27.536231884057973
                            ], 
                            "cohortCount": 97, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Social", 
                            "studentId": "IDALU1552", 
                            "levelId": "Enrich", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                38.297872340425535, 
                                14.893617021276595, 
                                46.808510638297875
                            ], 
                            "cohortCount": 9, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Social", 
                            "studentId": "IDALU1552", 
                            "levelId": "Persist", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                54.205607476635514, 
                                15.88785046728972, 
                                29.906542056074766
                            ], 
                            "cohortCount": 26, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Family", 
                            "studentId": "IDALU1552", 
                            "levelId": "Improve", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                53.65853658536585, 
                                17.88617886178862, 
                                28.45528455284553
                            ], 
                            "cohortCount": 65, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Family", 
                            "studentId": "IDALU1552", 
                            "levelId": "Enrich", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                68.0, 
                                18.0, 
                                14.0
                            ], 
                            "cohortCount": 22, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Family", 
                            "studentId": "IDALU1552", 
                            "levelId": "Persist", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                49.45054945054945, 
                                18.13186813186813, 
                                32.417582417582416
                            ], 
                            "cohortCount": 45, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Physical", 
                            "studentId": "IDALU1552", 
                            "levelId": "Improve", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                56.88622754491018, 
                                20.35928143712575, 
                                22.75449101796407
                            ], 
                            "cohortCount": 75, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Physical", 
                            "studentId": "IDALU1552", 
                            "levelId": "Enrich", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                34.09090909090909, 
                                9.090909090909092, 
                                56.81818181818182
                            ], 
                            "cohortCount": 17, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Physical", 
                            "studentId": "IDALU1552", 
                            "levelId": "Persist", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                53.333333333333336, 
                                14.666666666666666, 
                                32.0
                            ], 
                            "cohortCount": 40, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1552", 
                            "levelId": "VeryLow", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                41.46341463414634, 
                                19.51219512195122, 
                                39.02439024390244
                            ], 
                            "cohortCount": 11, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1552", 
                            "levelId": "Low", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                55.55555555555556, 
                                14.814814814814815, 
                                29.62962962962963
                            ], 
                            "cohortCount": 23, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1552", 
                            "levelId": "Medium", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                54.0, 
                                14.0, 
                                32.0
                            ], 
                            "cohortCount": 62, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1552", 
                            "levelId": "High", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                57.69230769230769, 
                                13.461538461538462, 
                                28.846153846153847
                            ], 
                            "cohortCount": 22, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1552", 
                            "levelId": "VeryHigh", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                45.945945945945944, 
                                32.432432432432435, 
                                21.62162162162162
                            ], 
                            "cohortCount": 14, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1552", 
                            "levelId": "VeryLow", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                43.956043956043956, 
                                26.373626373626372, 
                                29.67032967032967
                            ], 
                            "cohortCount": 10, 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1552", 
                            "levelId": "Low", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                73.17073170731707, 
                                9.75609756097561, 
                                17.073170731707318
                            ], 
                            "cohortCount": 21, 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1552", 
                            "levelId": "Medium", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                61.702127659574465, 
                                13.829787234042554, 
                                24.46808510638298
                            ], 
                            "cohortCount": 63, 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1552", 
                            "levelId": "High", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                58.333333333333336, 
                                8.333333333333334, 
                                33.333333333333336
                            ], 
                            "cohortCount": 17, 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1552", 
                            "levelId": "VeryHigh", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                50.0, 
                                25.0, 
                                25.0
                            ], 
                            "cohortCount": 21, 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1552", 
                            "levelId": "VeryLow", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                44.44444444444444, 
                                25.0, 
                                30.555555555555557
                            ], 
                            "cohortCount": 41, 
                            "componentId": "Superficial"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1552", 
                            "levelId": "Low", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                69.38775510204081, 
                                14.285714285714286, 
                                16.3265306122449
                            ], 
                            "cohortCount": 30, 
                            "componentId": "Superficial"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1552", 
                            "levelId": "Medium", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                47.10144927536232, 
                                16.666666666666668, 
                                36.231884057971016
                            ], 
                            "cohortCount": 45, 
                            "componentId": "Superficial"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1552", 
                            "levelId": "High", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                50.0, 
                                19.047619047619047, 
                                30.952380952380953
                            ], 
                            "cohortCount": 13, 
                            "componentId": "Superficial"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1552", 
                            "levelId": "VeryHigh", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                55.55555555555556, 
                                5.555555555555555, 
                                38.888888888888886
                            ], 
                            "cohortCount": 3, 
                            "componentId": "Superficial"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1552", 
                            "levelId": "VeryLow", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                46.666666666666664, 
                                23.333333333333332, 
                                30.0
                            ], 
                            "cohortCount": 15, 
                            "componentId": "Elavorative"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1552", 
                            "levelId": "Low", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                51.42857142857143, 
                                18.571428571428573, 
                                30.0
                            ], 
                            "cohortCount": 31, 
                            "componentId": "Elavorative"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1552", 
                            "levelId": "Medium", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                51.53846153846154, 
                                13.846153846153847, 
                                34.61538461538461
                            ], 
                            "cohortCount": 46, 
                            "componentId": "Elavorative"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1552", 
                            "levelId": "High", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                52.38095238095238, 
                                19.047619047619047, 
                                28.571428571428573
                            ], 
                            "cohortCount": 27, 
                            "componentId": "Elavorative"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1552", 
                            "levelId": "VeryHigh", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                76.47058823529412, 
                                5.882352941176471, 
                                17.647058823529413
                            ], 
                            "cohortCount": 13, 
                            "componentId": "Elavorative"
                        }
                    ]
                },
                {
                    "studentId" : "IDALU1246",
                    "startYear" : 2018,
                    "studentResponses" : [
                        {
                            "surveyId": "SurveyOne", 
                            "factorId": "Academic", 
                            "studentId": "IDALU1246", 
                            "componentId": "", 
                            "levelId": "Persist"
                        }, 
                        {
                            "surveyId": "SurveyOne", 
                            "factorId": "Emotional", 
                            "studentId": "IDALU1246", 
                            "componentId": "", 
                            "levelId": "Enrich"
                        }, 
                        {
                            "surveyId": "SurveyOne", 
                            "factorId": "Social", 
                            "studentId": "IDALU1246", 
                            "componentId": "", 
                            "levelId": "Persist"
                        }, 
                        {
                            "surveyId": "SurveyOne", 
                            "factorId": "Family", 
                            "studentId": "IDALU1246", 
                            "componentId": "", 
                            "levelId": "Enrich"
                        }, 
                        {
                            "surveyId": "SurveyOne", 
                            "factorId": "Physical", 
                            "studentId": "IDALU1246", 
                            "componentId": "", 
                            "levelId": "Improve"
                        },
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1246", 
                            "predominantId": " ", 
                            "levelId": "Medio", 
                            "surveyId": "SurveyTwo", 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1246", 
                            "predominantId": " ", 
                            "levelId": "Medio", 
                            "surveyId": "SurveyTwo", 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1246", 
                            "predominantId": " ", 
                            "levelId": "Muy Alto", 
                            "surveyId": "SurveyTwo", 
                            "componentId": "Elavorative"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1246", 
                            "predominantId": " ", 
                            "levelId": "Bajo", 
                            "surveyId": "SurveyTwo", 
                            "componentId": "Superficial"
                        }
                    ],
                    "groupData" : [
                        {
                            "factorId": "Academic", 
                            "studentId": "IDALU1246", 
                            "levelId": "Improve", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                45.23809523809524, 
                                22.61904761904762, 
                                32.142857142857146
                            ], 
                            "cohortCount": 25, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Academic", 
                            "studentId": "IDALU1246", 
                            "levelId": "Enrich", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                69.23076923076923, 
                                17.307692307692307, 
                                13.461538461538462
                            ], 
                            "cohortCount": 34, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Academic", 
                            "studentId": "IDALU1246", 
                            "levelId": "Persist", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                51.55555555555556, 
                                14.222222222222221, 
                                34.22222222222222
                            ], 
                            "cohortCount": 73, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Emotional", 
                            "studentId": "IDALU1246", 
                            "levelId": "Improve", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                53.191489361702125, 
                                18.43971631205674, 
                                28.368794326241133
                            ], 
                            "cohortCount": 65, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Emotional", 
                            "studentId": "IDALU1246", 
                            "levelId": "Enrich", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                52.94117647058823, 
                                14.705882352941176, 
                                32.35294117647059
                            ], 
                            "cohortCount": 19, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Emotional", 
                            "studentId": "IDALU1246", 
                            "levelId": "Persist", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                52.1505376344086, 
                                15.591397849462366, 
                                32.25806451612903
                            ], 
                            "cohortCount": 48, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Social", 
                            "studentId": "IDALU1246", 
                            "levelId": "Improve", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                55.072463768115945, 
                                17.391304347826086, 
                                27.536231884057973
                            ], 
                            "cohortCount": 97, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Social", 
                            "studentId": "IDALU1246", 
                            "levelId": "Enrich", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                38.297872340425535, 
                                14.893617021276595, 
                                46.808510638297875
                            ], 
                            "cohortCount": 9, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Social", 
                            "studentId": "IDALU1246", 
                            "levelId": "Persist", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                54.205607476635514, 
                                15.88785046728972, 
                                29.906542056074766
                            ], 
                            "cohortCount": 26, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Family", 
                            "studentId": "IDALU1246", 
                            "levelId": "Improve", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                53.65853658536585, 
                                17.88617886178862, 
                                28.45528455284553
                            ], 
                            "cohortCount": 65, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Family", 
                            "studentId": "IDALU1246", 
                            "levelId": "Enrich", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                68.0, 
                                18.0, 
                                14.0
                            ], 
                            "cohortCount": 22, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Family", 
                            "studentId": "IDALU1246", 
                            "levelId": "Persist", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                49.45054945054945, 
                                18.13186813186813, 
                                32.417582417582416
                            ], 
                            "cohortCount": 45, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Physical", 
                            "studentId": "IDALU1246", 
                            "levelId": "Improve", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                56.88622754491018, 
                                20.35928143712575, 
                                22.75449101796407
                            ], 
                            "cohortCount": 75, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Physical", 
                            "studentId": "IDALU1246", 
                            "levelId": "Enrich", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                34.09090909090909, 
                                9.090909090909092, 
                                56.81818181818182
                            ], 
                            "cohortCount": 17, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Physical", 
                            "studentId": "IDALU1246", 
                            "levelId": "Persist", 
                            "surveyId": "SurveyOne", 
                            "historic": [
                                53.333333333333336, 
                                14.666666666666666, 
                                32.0
                            ], 
                            "cohortCount": 40, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1246", 
                            "levelId": "VeryLow", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                41.46341463414634, 
                                19.51219512195122, 
                                39.02439024390244
                            ], 
                            "cohortCount": 11, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1246", 
                            "levelId": "Low", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                55.55555555555556, 
                                14.814814814814815, 
                                29.62962962962963
                            ], 
                            "cohortCount": 23, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1246", 
                            "levelId": "Medium", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                54.0, 
                                14.0, 
                                32.0
                            ], 
                            "cohortCount": 62, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1246", 
                            "levelId": "High", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                57.69230769230769, 
                                13.461538461538462, 
                                28.846153846153847
                            ], 
                            "cohortCount": 22, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Methodical", 
                            "studentId": "IDALU1246", 
                            "levelId": "VeryHigh", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                45.945945945945944, 
                                32.432432432432435, 
                                21.62162162162162
                            ], 
                            "cohortCount": 14, 
                            "componentId": ""
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1246", 
                            "levelId": "VeryLow", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                43.956043956043956, 
                                26.373626373626372, 
                                29.67032967032967
                            ], 
                            "cohortCount": 10, 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1246", 
                            "levelId": "Low", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                73.17073170731707, 
                                9.75609756097561, 
                                17.073170731707318
                            ], 
                            "cohortCount": 21, 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1246", 
                            "levelId": "Medium", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                61.702127659574465, 
                                13.829787234042554, 
                                24.46808510638298
                            ], 
                            "cohortCount": 63, 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1246", 
                            "levelId": "High", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                58.333333333333336, 
                                8.333333333333334, 
                                33.333333333333336
                            ], 
                            "cohortCount": 17, 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1246", 
                            "levelId": "VeryHigh", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                50.0, 
                                25.0, 
                                25.0
                            ], 
                            "cohortCount": 21, 
                            "componentId": "Deep"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1246", 
                            "levelId": "VeryLow", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                44.44444444444444, 
                                25.0, 
                                30.555555555555557
                            ], 
                            "cohortCount": 41, 
                            "componentId": "Superficial"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1246", 
                            "levelId": "Low", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                69.38775510204081, 
                                14.285714285714286, 
                                16.3265306122449
                            ], 
                            "cohortCount": 30, 
                            "componentId": "Superficial"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1246", 
                            "levelId": "Medium", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                47.10144927536232, 
                                16.666666666666668, 
                                36.231884057971016
                            ], 
                            "cohortCount": 45, 
                            "componentId": "Superficial"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1246", 
                            "levelId": "High", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                50.0, 
                                19.047619047619047, 
                                30.952380952380953
                            ], 
                            "cohortCount": 13, 
                            "componentId": "Superficial"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1246", 
                            "levelId": "VeryHigh", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                55.55555555555556, 
                                5.555555555555555, 
                                38.888888888888886
                            ], 
                            "cohortCount": 3, 
                            "componentId": "Superficial"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1246", 
                            "levelId": "VeryLow", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                46.666666666666664, 
                                23.333333333333332, 
                                30.0
                            ], 
                            "cohortCount": 15, 
                            "componentId": "Elavorative"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1246", 
                            "levelId": "Low", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                51.42857142857143, 
                                18.571428571428573, 
                                30.0
                            ], 
                            "cohortCount": 31, 
                            "componentId": "Elavorative"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1246", 
                            "levelId": "Medium", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                51.53846153846154, 
                                13.846153846153847, 
                                34.61538461538461
                            ], 
                            "cohortCount": 46, 
                            "componentId": "Elavorative"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1246", 
                            "levelId": "High", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                52.38095238095238, 
                                19.047619047619047, 
                                28.571428571428573
                            ], 
                            "cohortCount": 27, 
                            "componentId": "Elavorative"
                        }, 
                        {
                            "factorId": "Prosecution", 
                            "studentId": "IDALU1246", 
                            "levelId": "VeryHigh", 
                            "surveyId": "SurveyTwo", 
                            "historic": [
                                76.47058823529412, 
                                5.882352941176471, 
                                17.647058823529413
                            ], 
                            "cohortCount": 13, 
                            "componentId": "Elavorative"
                        }
                    ]
                },
                {
                    "studentId" : "",
                    "startYear" : 2018,
                    "studentResponses" : [],
                    "groupData" : []
                }
            ]
       
}
},{}],3:[function(require,module,exports){
module.exports={
    "home" : {
        "introduction" : "La Unidad de Apoyo al Aprendizaje de los Estudiantes de Pregrado (UAAEP) se ha encargado de aplicar un conjunto de instrumentos de tipo encuesta a los jóvenes que ingresan cada año a la universidad.<br/><br/>Con el resultado de las encuestas, más la información adquirida por el Departamento de Evaluación, Medición y Registro Educacional (DEMRE), se elabora el informe del Perfil Psicoeducativo que permite caracterizar a las nuevas cohortes.<br/><br/>A través de esta herramienta con la colaboración de la UAAEP, queremos entregar retroalimentación acerca de tus habilidades. Para esto, utilizaremos las secciones de  <b>Autoconcepto</b> y <b>Estrategias de Aprendizajes</b> del perfil psicoeducativo, con las que apoyaremos a los estudiante en su camino hacia el éxito académico. <br/><br/> Para las secciones evaluadas hay una pestaña disponible que contiene la siguiente información:<br/> <font color='#a1d99b'> &#10003; </font> Sus distintas dimensiones, con un resumen preciso y una explicación de su puntaje<br/> <font color='#a1d99b'> &#10003; </font> Su puntaje comparado con los estudiantes de la generación anterior<br/> <font color='#a1d99b'> &#10003; </font> Consejos y recomendaciones para mejorar una habilidad específica. <br/><br/> <a style='float:right;' href='https://www.lalaproject.org/es/inicio/' target='_blank'><img src='images/lalalink.png' style='width: 250px; height: 60px;'></a> Cabe destacar que esta herramienta está realizada en el marco del Proyecto LALA, el cual puedes conocer haciendo click en la imagen que aparece en la parte inferior derecha."
    },
    "surveys" : [ 
        {
            "id" : "SurveyOne",
            "label" : "Autoconcepto",
            "introduction" : "El Autoconcepto es la imagen que uno tiene de sí mismo, respecto al aspecto físico, habilidades y capacidades (García y Musitu 2014, P.10)." ,
            "details" : "String",
            "factors" : [ 
                {
                    "id" : "Emotional",
                    "label" : "Emocional",
                    "text1" : "El Autoconcepto Emocional es tu percepción personal sobre tu estado emocional y cómo te desempeñas emocionalmente frente a situaciones importantes (García y Musitu 2014, P.10).",
                    "textGraphic1" : "Este es tu resultado en la encuesta frente a otros estudiantes de tu misma promoción. Cada círculo representa a un estudiante.",
                    "textGraphic2" : "A continuación, podrás ver el Rendimiento Académico de generaciones anteriores, en función al nivel obtenido en la encuesta y la cantidad de asignaturas aprobadas y reprobadas durante su primer semestre cursado.<br/><br/>Cada uno de los cuadros representa al 1% de los estudiantes. El color asociado al cuadro evidenciará si los estudiantes aprobaron o no todas sus asignaturas. <br/>",
                    "levels" : [
                        {
                            "id" : "Improve", 
                            "label" : "Mejorar"
                        },
                        {
                            "id" : "Enrich",
                            "label" : "Enriquecer"
                        },
                        {
                            "id" : "Persist",
                            "label" : "Persistir"
                        }
                    ]
                },
                {
                    "id" : "Family",
                    "label" : "Familiar",
                    "text1" : "El Autoconcepto Familiar es tu percepción de cómo te insertas e integras en tu familia y cómo se dan tus relaciones familiares (García y Musitu 2014, P.10).",
                    "textGraphic1" : "Este es tu resultado en la encuesta frente a otros estudiantes de tu misma promoción. Cada círculo representa a un estudiante.",                   
                    "textGraphic2" : "A continuación, podrás ver el Rendimiento Académico de generaciones anteriores, en función al nivel obtenido en la encuesta y la cantidad de asignaturas aprobadas y reprobadas durante su primer semestre cursado.<br/><br/>Cada uno de los cuadros representa al 1% de los estudiantes. El color asociado al cuadro evidenciará si los estudiantes aprobaron o no todas sus asignaturas. <br/>",
                    "levels" : [
                        {
                            "id" : "Improve", 
                            "label" : "Mejorar"
                        },
                        {
                            "id" : "Enrich",
                            "label" : "Enriquecer"
                        },
                        {
                            "id" : "Persist",
                            "label" : "Persistir"
                        }
                    ]
                },
                {
                    "id" : "Academic",
                    "label" : "Académico",
                    "text1" : "El Autoconcepto Académico es tu percepción de tu rol y desempeño como estudiante y cómo crees que te ven los profesores (García y Musitu 2014, P.10).",
                    "textGraphic1" : "Este es tu resultado en la encuesta frente a otros estudiantes de tu misma promoción. Cada círculo representa a un estudiante.",
                    "textGraphic2" : "A continuación, podrás ver el Rendimiento Académico de generaciones anteriores, en función al nivel obtenido en la encuesta y la cantidad de asignaturas aprobadas y reprobadas durante su primer semestre cursado.<br/><br/>Cada uno de los cuadros representa al 1% de los estudiantes. El color asociado al cuadro evidenciará si los estudiantes aprobaron o no todas sus asignaturas. <br/>",
                    "levels" : [
                        {
                            "id" : "Improve", 
                            "label" : "Mejorar"
                        },
                        {
                            "id" : "Enrich",
                            "label" : "Enriquecer"
                        },
                        {
                            "id" : "Persist",
                            "label" : "Persistir"
                        }
                    ]
                },
                {
                    "id" : "Physical",
                    "label" : "Físico",
                    "text1" : "El Autoconcepto Físico es tu percepción de tu propio aspecto físico y de tu capacidad física para practicar deportes (García y Musitu 2014, P.10).",
                    "textGraphic1" : "Este es tu resultado en la encuesta frente a otros estudiantes de tu misma promoción. Cada círculo representa a un estudiante.",                    
                    "textGraphic2" : "A continuación, podrás ver el Rendimiento Académico de generaciones anteriores, en función al nivel obtenido en la encuesta y la cantidad de asignaturas aprobadas y reprobadas durante su primer semestre cursado.<br/><br/>Cada uno de los cuadros representa al 1% de los estudiantes. El color asociado al cuadro evidenciará si los estudiantes aprobaron o no todas sus asignaturas. <br/>",
                    "levels" : [
                        {
                            "id" : "Improve", 
                            "label" : "Mejorar"
                        },
                        {
                            "id" : "Enrich",
                            "label" : "Enriquecer"
                        },
                        {
                            "id" : "Persist",
                            "label" : "Persistir"
                        }
                    ]
                },
                {
                    "id" : "Social",
                    "label" : "Social",
                    "text1" : "El Autoconcepto Social es tu percepción propia de cómo te desenvuelves con otros y cómo mantienes tus relaciones sociales (García y Musitu 2014, P.10).",
                    "textGraphic1" : "Este es tu resultado en la encuesta frente a otros estudiantes de tu misma promoción. Cada círculo representa a un estudiante.",                    
                    "textGraphic2" : "A continuación, podrás ver el Rendimiento Académico de generaciones anteriores, en función al nivel obtenido en la encuesta y la cantidad de asignaturas aprobadas y reprobadas durante su primer semestre cursado.<br/><br/>Cada uno de los cuadros representa al 1% de los estudiantes. El color asociado al cuadro evidenciará si los estudiantes aprobaron o no todas sus asignaturas. <br/>",
                    "levels" : [
                        {
                            "id" : "Improve", 
                            "label" : "Mejorar"
                        },
                        {
                            "id" : "Enrich",
                            "label" : "Enriquecer"
                        },
                        {
                            "id" : "Persist",
                            "label" : "Persistir"
                        }
                    ]
                }
            ]
        },
        {
            "id" : "SurveyTwo",
            "label" : "Estrategias de aprendizaje",
            "introduction" : "Las Estrategias de Aprendizaje reflejan tus conductas y pensamientos que facilitan el aprendizaje (Truffelo y Perez 1995, P.2).",
            "details" : "String",
            "factors" : [
                {
                    "id" : "Methodical",
                    "label" : "Nivel de estudio metódico",
                    "text1" : "El Nivel de Estudio metódico evidencia la cantidad y calidad de tiempo que tu empleas para estudiar (Truffelo y Perez 1995, P.2).",
                    "textGraphic1" : "Este es tu resultado en la encuesta frente a otros estudiantes de tu misma promoción. Cada círculo representa a un estudiante.",
                    "textGraphic2" : "A continuación, podrás ver el Rendimiento Académico de generaciones anteriores, en función al nivel obtenido en la encuesta y la cantidad de asignaturas aprobadas y reprobadas durante su primer semestre cursado.<br/><br/>Cada uno de los cuadros representa al 1% de los estudiantes. El color asociado al cuadro evidenciará si los estudiantes aprobaron o no todas sus asignaturas. <br/>",
                    "levels" : []
                },
                {
                    "id" : "Prosecution", 
                    "label" : "Nivel de procesamiento de la información",
                    "text1" : "Los niveles de procesamiento de la información representan tu forma específica de recopilar, interpretar y organizar la información (Truffelo y Perez 1995, P.2).",
                    "components": [
                        {
                            "id" : "Deep",
                            "label" : "Profundo",
                            "text1" : "El Procesamiento Profundo es predominante cuando posees la habilidad de evaluar críticamente, reflexionar, organizar y comparar la información (Truffelo y Perez 1995, P.3).",
                            "textGraphic1" : "Este es tu resultado en la encuesta frente a otros estudiantes de tu misma promoción. Cada círculo representa a un estudiante.",
                            "textGraphic2" : "A continuación, podrás ver el Rendimiento Académico de generaciones anteriores, en función al nivel obtenido en la encuesta y la cantidad de asignaturas aprobadas y reprobadas durante su primer semestre cursado.<br/><br/>Cada uno de los cuadros representa al 1% de los estudiantes. El color asociado al cuadro evidenciará si los estudiantes aprobaron o no todas sus asignaturas. <br/>",
                            "levels" : []
                        },
                        {
                            "id" : "Elavorative",
                            "label" : "Elaborativo",
                            "text1" : "El Procesamiento Elaborativo es predominante cuando elaboras información pensando en experiencias personales y logras expresarlas en tus propias palabras (Truffelo y Perez 1995, P.2).",
                            "textGraphic1" : "Este es tu resultado en la encuesta frente a otros estudiantes de tu misma promoción. Cada círculo representa a un estudiante.",
                            "textGraphic2" : "A continuación, podrás ver el Rendimiento Académico de generaciones anteriores, en función al nivel obtenido en la encuesta y la cantidad de asignaturas aprobadas y reprobadas durante su primer semestre cursado.<br/><br/>Cada uno de los cuadros representa al 1% de los estudiantes. El color asociado al cuadro evidenciará si los estudiantes aprobaron o no todas sus asignaturas. <br/>",
                            "levels" : []
                        },
                        {
                            "id" : "Superficial",
                            "label" : "Superficial",
                            "text1" : "El Procesamiento Superficial es predominante cuando memorizas la información como hechos aislados, con el objetivo central de retener datos para aprobar una evaluación (Truffelo y Perez 1995, P.3).",
                            "textGraphic1" : "Este es tu resultado en la encuesta frente a otros estudiantes de tu misma promoción. Cada círculo representa a un estudiante.",
                            "textGraphic2" : "A continuación, podrás ver el Rendimiento Académico de generaciones anteriores, en función al nivel obtenido en la encuesta y la cantidad de asignaturas aprobadas y reprobadas durante su primer semestre cursado.<br/><br/>Cada uno de los cuadros representa al 1% de los estudiantes. El color asociado al cuadro evidenciará si los estudiantes aprobaron o no todas sus asignaturas. <br/>",
                            "levels" : []
                        }
                    ]
                }
            ]
        }
    ],
    
    "references" : [
        {
            "reference" : "<i>Truffello, Irene; Pérez, Fernando. Las Estrategias de Aprendizaje: una teoría y su aplicación en terreno, Revista Pensamiento Educativo, Facultad de Educación, Pontificia Universidad Católica de Chile, ISSN 0717 - 1013, Volumen 16, 115-130, 1995.</i>"
        },
        {   
            "reference" : "<i>F, G. & Musitu, G. (2014). Manual AF-5 Autoconcepto Forma 5. Madrid, España: Tea ediciones.</i>"
        } 
    ]
}

},{}],4:[function(require,module,exports){
const generateAdvice = require("./script/generateAdvice");
const {
  startConstructionAdvice,
  generateAdviceSurveyOne,
  generateAdviceSurveyTwo,
} = generateAdvice;

const generateGraph = require("./script/generateGraph")({
  startConstructionAdvice,
  generateAdviceSurveyOne,
  generateAdviceSurveyTwo,
});
const {
  generateGraphOneSurveyOne,
  generateGraphTwoSurveyOne,
  generateGraphTwoSurveyTwo,
  startConstructionGraphicOne,
  startConstructionGraphicTwo,
  generateGraphOneSurveyTwo,
} = generateGraph;
const generateButtons = require("./script/generateButtons")({
  startConstructionGraphicOne,
  startConstructionGraphicTwo,
});
const {
  createButtonFactors,
  createButtonFactorsComponent,
  generateBtnSectionTwo,
} = generateButtons;
const generateMainTextView = require("./script/generateMainTextView")({
  createButtonFactors,
});
const {
  createTextIntroSectionOne,
  getIntroductionText,
  reference,
} = generateMainTextView;
const generateExtension = require("./script/generateExtension")({
  createTextIntroSectionOne,
  generateGraphOneSurveyOne,
  generateGraphTwoSurveyOne,
  generateGraphTwoSurveyTwo,
  generateBtnSectionTwo,
  generateGraphOneSurveyTwo,
  generateAdviceSurveyTwo,
});
const { containerSectionOne } = generateExtension;
const generateTextFactorSurvey = require("./script/generateTextFactorSurvey")({
  containerSectionOne,
  createButtonFactorsComponent,
});

const eventOnmouseover = require("./script/eventOnmouseover");

const startDashboard = require("./tabs/startDashboard")({
  getIntroductionText,
  reference,
});

module.exports = {
  ...eventOnmouseover,
  ...generateAdvice,
  ...generateButtons,
  ...generateExtension,
  ...generateGraph,
  ...generateMainTextView,
  ...generateTextFactorSurvey,
  ...startDashboard,
};

window.onload = startDashboard.startDashboard(startDashboard.mainContainer);

},{"./script/eventOnmouseover":5,"./script/generateAdvice":6,"./script/generateButtons":7,"./script/generateExtension":8,"./script/generateGraph":9,"./script/generateMainTextView":10,"./script/generateTextFactorSurvey":11,"./tabs/startDashboard":12}],5:[function(require,module,exports){
"use strict";

module.exports = (asd, asd2, asd3) => {
  function teston() {
    tooltip.pop(this, "Lorem ipsum dolor...mauris");
  }
  function testout() {
    console.log("JEJ2212132E");
  }
};

},{}],6:[function(require,module,exports){
"use strict";
const surveyText = require("../data/surveyText.json");
const surveyResult = require("../data/surveyResult.json");
const recommendation = require("../data/recommendation.json");

function startConstructionAdvice(
  containerSection,
  survey,
  factor,
  component,
  generateAdvice
) {
  var response = surveyText;
  if (survey === "SurveyOne" || factor === "Methodical") {
    for (var i = 0; i < Object.keys(response.surveys).length; i++) {
      if (response.surveys[i].id === survey) {
        for (
          var j = 0;
          j < Object.keys(response.surveys[i].factors).length;
          j++
        ) {
          if (response.surveys[i].factors[j].id === factor) {
            var id = "containerAdvice" + response.surveys[i].factors[j].id; // containerAdviceEmotional //
            var containerAdvice = document.createElement("div");
            var className = "ContainerAdvice";
            containerAdvice.setAttribute("id", id);
            containerAdvice.setAttribute("class", className);
            document
              .getElementById(containerSection)
              .appendChild(containerAdvice);
          }
        }
      }
    }
    generateAdvice(id, factor, survey, component, showAdvice);
  } else {
    for (var i = 0; i < Object.keys(response.surveys).length; i++) {
      if (response.surveys[i].id === survey) {
        for (
          var j = 0;
          j < Object.keys(response.surveys[i].factors).length;
          j++
        ) {
          if (response.surveys[i].factors[j].id === factor) {
            for (
              var k = 0;
              k < Object.keys(response.surveys[i].factors[j].components).length;
              k++
            ) {
              if (
                response.surveys[i].factors[j].components[k].id === component
              ) {
                var id =
                  "containerAdvice" +
                  response.surveys[i].factors[j].components[k].id;
                var containerAdvice = document.createElement("div");
                var className = "ContainerAdvice";
                containerAdvice.setAttribute("id", id);
                containerAdvice.setAttribute("class", className);
                document
                  .getElementById(containerSection)
                  .appendChild(containerAdvice);
              }
            }
          }
        }
      }
    }
    generateAdvice(id, factor, survey, component, showAdvice);
  }
}

function generateAdviceSurveyOne(
  container,
  factor,
  survey,
  component,
  showAdvice
) {
  // genero recomendación para Autoconcepto //
  let loginId = localStorage.getItem("idStudent");
  var response = surveyResult;
  var levelResponse;
  for (var i = 0; i < Object.keys(response.result).length; i++) {
    if (response.result[i].studentId === loginId) {
      for (
        var j = 0;
        j < Object.keys(response.result[i].studentResponses).length;
        j++
      ) {
        if (response.result[i].studentResponses[j].factorId === factor) {
          console.log(response.result[i].studentResponses[j]);
          levelResponse = response.result[i].studentResponses[j].levelId;
          switch (levelResponse) {
            case "Improve":
              showAdvice(container, factor, survey, component, "low");
              break;
            case "Enrich":
              showAdvice(container, factor, survey, component, "low");
              break;
            case "Persist":
              showAdvice(container, factor, survey, component, "high");
              break;
          }
        }
      }
    }
  }
}

function generateAdviceSurveyTwo(
  container,
  factor,
  survey,
  component,
  callback
) {
  // Recomendacion para encuesta estrategias de aprendizaje //

  let loginId = localStorage.getItem("idStudent");
  if (factor === "Methodical") {
    var response = surveyResult;
    var levelResponse;
    for (var i = 0; i < Object.keys(response.result).length; i++) {
      if (response.result[i].studentId === loginId) {
        for (
          var j = 0;
          j < Object.keys(response.result[i].studentResponses).length;
          j++
        ) {
          if (response.result[i].studentResponses[j].factorId === factor) {
            console.log(response.result[i].studentResponses[j]);
            levelResponse = response.result[i].studentResponses[j].levelId;
            switch (levelResponse) {
              case "Muy Bajo":
                showAdvice(container, factor, survey, component, "low");
                break;
              case "Bajo":
                showAdvice(container, factor, survey, component, "low");
                break;
              case "Medio":
                showAdvice(container, factor, survey, component, "low");
                break;
              case "Alto":
                showAdvice(container, factor, survey, component, "high");
                break;
              case "Muy Alto":
                showAdvice(container, factor, survey, component, "high");
                break;
            }
          }
        }
      }
    }
  } else {
    var response = surveyResult;
    var levelResponse;
    for (var i = 0; i < Object.keys(response.result).length; i++) {
      if (response.result[i].studentId === loginId) {
        for (
          var j = 0;
          j < Object.keys(response.result[i].studentResponses).length;
          j++
        ) {
          if (
            response.result[i].studentResponses[j].factorId === factor &&
            response.result[i].studentResponses[j].componentId === component
          ) {
            console.log(response.result[i].studentResponses[j]);
            levelResponse = response.result[i].studentResponses[j].levelId;
            switch (levelResponse) {
              case "Muy Bajo":
                showAdvice(container, factor, survey, component, "low");
                break;
              case "Bajo":
                showAdvice(container, factor, survey, component, "low");
                break;
              case "Medio":
                showAdvice(container, factor, survey, component, "low");
                break;
              case "Alto":
                showAdvice(container, factor, survey, component, "high");
                break;
              case "Muy Alto":
                showAdvice(container, factor, survey, component, "high");
                break;
            }
          }
        }
      }
    }
  }
}

function showAdvice(container, factor, survey, component, level) {
  //genero texto de la recomendacion //
  var getRecommendation;
  // factor de estudio metodico y las de autoconcepto cuentan de la misma estructura //
  var response = recommendation;
  if (survey === "SurveyOne" || factor === "Methodical") {
    //console.log(response);
    for (var i = 0; i < Object.keys(response.surveys).length; i++) {
      if ((response.surveys[i].id = survey)) {
        for (
          var j = 0;
          j < Object.keys(response.surveys[i].factors).length;
          j++
        ) {
          if (response.surveys[i].factors[j].id === factor) {
            if (level === "high") {
              var getRecommendation = response.surveys[i].factors[j].high;
            } else {
              var getRecommendation = response.surveys[i].factors[j].low;
            }
          }
        }
      }
    }
  } else {
    for (var i = 0; i < Object.keys(response.surveys).length; i++) {
      if ((response.surveys[i].id = survey)) {
        for (
          var j = 0;
          j < Object.keys(response.surveys[i].factors).length;
          j++
        ) {
          if (response.surveys[i].factors[j].id === factor) {
            for (
              var k = 0;
              k < Object.keys(response.surveys[i].factors[j].components).length;
              k++
            ) {
              if (
                response.surveys[i].factors[j].components[k].id === component
              ) {
                if (level === "high") {
                  var getRecommendation =
                    response.surveys[i].factors[j].components[k].high;
                } else {
                  var getRecommendation =
                    response.surveys[i].factors[j].components[k].low;
                }
              }
            }
          }
        }
      }
    }
  }
  var element = document.createElement("p");
  element.innerHTML = getRecommendation;
  document.getElementById(container).appendChild(element);
}

exports.startConstructionAdvice = startConstructionAdvice;
exports.showAdvice = showAdvice;
exports.generateAdviceSurveyTwo = generateAdviceSurveyTwo;
exports.generateAdviceSurveyOne = generateAdviceSurveyOne;

},{"../data/recommendation.json":1,"../data/surveyResult.json":2,"../data/surveyText.json":3}],7:[function(require,module,exports){
"use strict";
const surveyText = require("../data/surveyText.json");

module.exports = ({
  startConstructionGraphicOne,
  startConstructionGraphicTwo,
}) => {
  function createButtonFactors(survey, view) {
    // Genera btn correspondientes a las dimensiones de cada encuesta //
    var response = surveyText;

    var countFactors = Object.keys(response.surveys[survey].factors).length; // Entrega la cantidad de factores que posee la encuesta //
    var nameSurvey = response.surveys[survey].id; // Nombre de la encuesta para la cual debo generar los btns (Selfconcept or LearningStrategy)//

    var containerButtons = document.createElement("div"); // Genero el contenedor de btnes para las dimensiones del autoconcepto dada la cantidad de factores //
    var idContainerButton = "containerBtn" + nameSurvey; // containerBtnSelfconcept //
    containerButtons.setAttribute("id", idContainerButton);
    var classContBtn = "containerButton" + nameSurvey; //containerButtonSelfconcept //
    containerButtons.setAttribute("class", classContBtn);
    document.getElementById(view).appendChild(containerButtons);

    for (var i = 0; i < countFactors; i++) {
      // Creo btn segun la cantidad de dimensiones de cada encuesta //
      var btn = document.createElement("button");
      btn.innerHTML = response.surveys[survey].factors[i].label; // Obtengo label de cada factor de las encuestas //
      var onclickName = "view" + response.surveys[survey].factors[i].id + "()"; //viewEmotional --> funcion onclick //
      btn.setAttribute("onclick", onclickName);
      var classBtn = "button" + nameSurvey; //buttonSelfconcept //
      btn.setAttribute("class", classBtn);
      var idButton = "button" + response.surveys[survey].factors[i].id; //ButtonEmotional
      btn.setAttribute("id", idButton);
      document.getElementById(idContainerButton).appendChild(btn); //agregro cada btn generado al contenedor recientemente generado //

      var cont = document.createElement("div"); // Contenedor que contendra los elementos de cada factor de cada una de las encuestas, Se generara cuando presione un el btn correspondiente a la dimension //
      var idContainer =
        "view" + nameSurvey + response.surveys[survey].factors[i].id; //viewSelfconceptEmotional
      cont.setAttribute("id", idContainer);
      var classView = "containerDimension" + nameSurvey; // containerDimensionSelfconcept //
      cont.setAttribute("class", classView);
      document.getElementById(view).appendChild(cont);
    }
  }

  function createButtonFactorsComponent(survey, factor, container) {
    // Genera btn correspondientes a las dimensiones de cada encuesta //
    var response = surveyText;

    for (var i = 0; i < Object.keys(response.surveys).length; i++) {
      if (response.surveys[i].id === survey) {
        for (
          var j = 0;
          j < Object.keys(response.surveys[i].factors).length;
          j++
        ) {
          if (response.surveys[i].factors[j].id === factor) {
            var countFactors = Object.keys(
              response.surveys[i].factors[j].components
            ).length; // Entrega la cantidad de factores que posee la encuesta //
            var nameSurvey = response.surveys[i].id + "Component"; // Nombre de la encuesta para la cual debo generar los btns (LearningStrategy)//

            var containerButtons = document.createElement("div"); // Genero el contenedor de btnes para las dimensiones  dada la cantidad de factores //
            var idContainerButton = "containerBtn" + nameSurvey; // containerBtnLearningStrategy//
            containerButtons.setAttribute("id", idContainerButton);
            var classContBtn = "containerButton" + nameSurvey; //containerButtonLearningStrategy //
            containerButtons.setAttribute("class", classContBtn);
            document.getElementById(container).appendChild(containerButtons);

            for (var k = 0; k < countFactors; k++) {
              // Creo btn segun la cantidad de dimensiones de cada encuesta //
              var btn = document.createElement("button");
              btn.innerHTML =
                response.surveys[i].factors[j].components[k].label; // Obtengo label de cada factor de las encuestas //
              var onclickName =
                "view" + response.surveys[i].factors[j].components[k].id + "()"; //viewEmotional --> funcion onclick //
              btn.setAttribute("onclick", onclickName);
              var classBtn = "button" + nameSurvey; //buttonSelfconcept //
              btn.setAttribute("class", classBtn);
              var idButton =
                "button" + response.surveys[i].factors[j].components[k].id; //ButtonEmotional
              btn.setAttribute("id", idButton);
              document.getElementById(idContainerButton).appendChild(btn); //agregro cada btn generado al contenedor recientemente generado //

              var cont = document.createElement("div"); // Contenedor que contendra los elementos de cada factor de cada una de las encuestas, Se generara cuando presione un el btn correspondiente a la dimension //
              var idContainer =
                "view" +
                nameSurvey +
                response.surveys[i].factors[j].components[k].id; // viewLearningStrategyMethodical //
              cont.setAttribute("id", idContainer);
              var classView = "containerDimension" + nameSurvey;
              cont.setAttribute("class", classView);
              document.getElementById(container).appendChild(cont);
            }
          }
        }
      }
    }
  }

  function generateBtnSectionOne(
    container,
    survey,
    factor,
    component,
    containerSectionOne
  ) {
    // Genera boton para visualizar el primer grafico simulando acordeon //
    var response = surveyText;
    var newButton = document.createElement("button");
    if (survey === "SurveyOne") {
      for (var i = 0; i < Object.keys(response.surveys).length; i++) {
        if (response.surveys[i].id === survey) {
          for (
            var j = 0;
            j < Object.keys(response.surveys[i].factors).length;
            j++
          ) {
            if (response.surveys[i].factors[j].id === factor) {
              newButton.innerHTML =
                "Tu " +
                response.surveys[i].label +
                " " +
                response.surveys[i].factors[j].label; // Nombre del boton: TU AUTOCONCEPTO EMOCIONAL //
              newButton.setAttribute("class", "btnSectionOne close");
              var onclickName =
                "sectionOne" + response.surveys[i].factors[j].id + "()"; // showMoreEmotional() //
              newButton.setAttribute("onclick", onclickName);
              var buttonId =
                "btnSectionOne" + response.surveys[i].factors[j].id; // linkShowMoreEmotional //
              newButton.setAttribute("id", buttonId);
              document.getElementById(container).appendChild(newButton);
            }
          }
        }
      }
      containerSectionOne(
        container,
        survey,
        factor,
        component,
        startConstructionGraphicOne
      ); // EJecuto containerSectionOne y paso como parametro la función graphicOne //
    } else {
      // Para la encuesta de estrategias de aprendizaje, son diferentes las estructura de nombre //
      if (factor === "Methodical") {
        for (var i = 0; i < Object.keys(response.surveys).length; i++) {
          if (response.surveys[i].id === survey) {
            for (
              var j = 0;
              j < Object.keys(response.surveys[i].factors).length;
              j++
            ) {
              if (response.surveys[i].factors[j].id === factor) {
                newButton.innerHTML =
                  "Tu " + response.surveys[i].factors[j].label;
                newButton.setAttribute("class", "btnSectionOne close");
                var onclickName =
                  "sectionOne" + response.surveys[i].factors[j].id + "()"; // showMoreEmotional() //
                newButton.setAttribute("onclick", onclickName);
                var buttonId =
                  "btnSectionOne" + response.surveys[i].factors[j].id; // linkShowMoreEmotional //
                newButton.setAttribute("id", buttonId);
                document.getElementById(container).appendChild(newButton);
              }
            }
          }
        }
        containerSectionOne(
          container,
          survey,
          factor,
          component,
          startConstructionGraphicOne
        );
      } else {
        for (var i = 0; i < Object.keys(response.surveys).length; i++) {
          if (response.surveys[i].id === survey) {
            for (var i = 0; i < Object.keys(response.surveys).length; i++) {
              if (response.surveys[i].id === survey) {
                for (
                  var j = 0;
                  j < Object.keys(response.surveys[i].factors).length;
                  j++
                ) {
                  if (response.surveys[i].factors[j].id === factor) {
                    for (
                      var k = 0;
                      k <
                      Object.keys(response.surveys[i].factors[j].components)
                        .length;
                      k++
                    ) {
                      if (
                        response.surveys[i].factors[j].components[k].id ===
                        component
                      ) {
                        newButton.innerHTML =
                          "Tu nivel de procesamiento " +
                          response.surveys[i].factors[j].components[k].label;
                        newButton.setAttribute("class", "btnSectionOne close");
                        var onclickName =
                          "sectionOne" +
                          response.surveys[i].factors[j].components[k].id +
                          "()";
                        newButton.setAttribute("onclick", onclickName);
                        var buttonId =
                          "btnSectionOne" +
                          response.surveys[i].factors[j].components[k].id;
                        newButton.setAttribute("id", buttonId);
                        document
                          .getElementById(container)
                          .appendChild(newButton);
                      }
                    }
                  }
                }
              }
            }
          }
        }
        containerSectionOne(
          container,
          survey,
          factor,
          component,
          startConstructionGraphicOne
        );
      }
    }
  }

  function generateBtnSectionTwo(
    containerMain,
    survey,
    factor,
    component,
    containerSectionTwo
  ) {
    // Genera el btn que permitira ver o esconcer el contenido del grafico 2 //
    var response = surveyText;
    if (survey === "SurveyOne" || factor === "Methodical") {
      var newButton = document.createElement("button");
      newButton.innerHTML = "Promociones anteriores";
      newButton.setAttribute("class", "btnSectionTwo close");
      for (var i = 0; i < Object.keys(response.surveys).length; i++) {
        if (response.surveys[i].id === survey) {
          for (
            var j = 0;
            j < Object.keys(response.surveys[i].factors).length;
            j++
          ) {
            if (response.surveys[i].factors[j].id === factor) {
              var onclickName =
                "sectionTwo" + response.surveys[i].factors[j].id + "()";
              newButton.setAttribute("onclick", onclickName);
              var buttonId =
                "btnSectionTwo" + response.surveys[i].factors[j].id;
              newButton.setAttribute("id", buttonId);
              document.getElementById(containerMain).appendChild(newButton);

              containerSectionTwo(
                containerMain,
                survey,
                factor,
                component,
                startConstructionGraphicTwo
              );
            }
          }
        }
      }
    } else {
      for (var i = 0; i < Object.keys(response.surveys).length; i++) {
        if (response.surveys[i].id === survey) {
          for (
            var j = 0;
            j < Object.keys(response.surveys[i].factors).length;
            j++
          ) {
            if (response.surveys[i].factors[j].id === factor) {
              for (
                var k = 0;
                k <
                Object.keys(response.surveys[i].factors[j].components).length;
                k++
              ) {
                if (
                  response.surveys[i].factors[j].components[k].id === component
                ) {
                  var newButton = document.createElement("button");
                  newButton.innerHTML = "Promociones anteriores";
                  newButton.setAttribute("class", "btnSectionTwo close");
                  var onclickName =
                    "sectionTwo" +
                    response.surveys[i].factors[j].components[k].id +
                    "()";
                  newButton.setAttribute("onclick", onclickName);
                  var buttonId =
                    "btnSectionTwo" +
                    response.surveys[i].factors[j].components[k].id; //linkShowMoreEmotional //
                  newButton.setAttribute("id", buttonId);
                  document.getElementById(containerMain).appendChild(newButton);
                }
              }
            }
          }
        }
      }
      containerSectionTwo(
        containerMain,
        survey,
        factor,
        component,
        startConstructionGraphicTwo
      );
    }
  }

  function generateBtnSectionThree(
    containerMain,
    survey,
    factor,
    component,
    containerSectionThree
  ) {
    // Genera boton para visualizar el primer grafico simulando acordeon //
    var response = surveyText;
    if (survey === "SurveyOne" || factor === "Methodical") {
      var newButton = document.createElement("button");
      newButton.innerHTML = "¿ Que puedo hacer para mejorar ?";
      newButton.setAttribute("class", "btnSectionThree close");
      for (var i = 0; i < Object.keys(response.surveys).length; i++) {
        if (response.surveys[i].id === survey) {
          for (
            var j = 0;
            j < Object.keys(response.surveys[i].factors).length;
            j++
          ) {
            if (response.surveys[i].factors[j].id === factor) {
              var onclickName =
                "sectionThree" + response.surveys[i].factors[j].id + "()"; // SectionThreeEmotional() //
              newButton.setAttribute("onclick", onclickName);
              var buttonId =
                "btnSectionThree" + response.surveys[i].factors[j].id; // lbtnSectionThreeEmotional //
              newButton.setAttribute("id", buttonId);
              document.getElementById(containerMain).appendChild(newButton);

              containerSectionThree(
                containerMain,
                survey,
                factor,
                component,
                startConstructionAdvice
              ); // EJecuto containerSectionThree y paso como parametro la función genContainerSectionthree//
            }
          }
        }
      }
    } else {
      for (var i = 0; i < Object.keys(response.surveys).length; i++) {
        if (response.surveys[i].id === survey) {
          for (
            var j = 0;
            j < Object.keys(response.surveys[i].factors).length;
            j++
          ) {
            if (response.surveys[i].factors[j].id === factor) {
              for (
                var k = 0;
                k <
                Object.keys(response.surveys[i].factors[j].components).length;
                k++
              ) {
                if (
                  response.surveys[i].factors[j].components[k].id === component
                ) {
                  var newButton = document.createElement("button");
                  newButton.innerHTML = "¿ Que puedo hacer para mejorar ?";
                  newButton.setAttribute("class", "btnSectionThree close");
                  var onclickName =
                    "sectionThree" +
                    response.surveys[i].factors[j].components[k].id +
                    "()"; // SectionThreeEmotional() //
                  newButton.setAttribute("onclick", onclickName);
                  var buttonId =
                    "btnSectionThree" +
                    response.surveys[i].factors[j].components[k].id; // lbtnSectionThreeEmotional //
                  newButton.setAttribute("id", buttonId);
                  document.getElementById(containerMain).appendChild(newButton);

                  containerSectionThree(
                    containerMain,
                    survey,
                    factor,
                    component,
                    startConstructionAdvice
                  );
                }
              }
            }
          }
        }
      }
    }
  }

  return {
    createButtonFactors,
    createButtonFactors,
    createButtonFactorsComponent,
    generateBtnSectionThree,
    generateBtnSectionOne,
    generateBtnSectionTwo,
  };
};

},{"../data/surveyText.json":3}],8:[function(require,module,exports){
"use strict";

const surveyText = require("../data/surveyText.json");

module.exports = ({
  createTextIntroSectionOne,
  generateGraphOneSurveyOne,
  generateGraphTwoSurveyOne,
  generateGraphTwoSurveyTwo,
  generateBtnSectionTwo,
  generateGraphOneSurveyTwo,
  generateAdviceSurveyTwo,
}) => {
  function containerSectionOne(
    container,
    survey,
    factor,
    component,
    startConstructionGraphicOne
  ) {
    let loginId = localStorage.getItem("idStudent"); // recupero id del estudiante, para poder cargar informacion relacionada //
    var response = surveyText;
    if (survey === "SurveyOne" || factor === "Methodical") {
      for (var i = 0; i < Object.keys(response.surveys).length; i++) {
        if (response.surveys[i].id === survey) {
          for (
            var j = 0;
            j < Object.keys(response.surveys[i].factors).length;
            j++
          ) {
            if (response.surveys[i].factors[j].id === factor) {
              var containerId =
                "containerSectionOne" + response.surveys[i].factors[j].id; //containerSectionOneEmotional //
              var containerClass =
                "containerSectionOne" + response.surveys[i].id;
              var newContainer = document.createElement("div");
              newContainer.setAttribute("id", containerId);
              newContainer.setAttribute("class", containerClass);
              document.getElementById(container).appendChild(newContainer);
            }
          }
        }
      }
      if (survey === "SurveyOne") {
        createTextIntroSectionOne(containerId, survey, factor, component); // genero texto de introduccion para el primer grafico //
        startConstructionGraphicOne(
          loginId,
          container,
          containerId,
          survey,
          factor,
          component,
          generateGraphOneSurveyOne,
          generateBtnSectionTwo
        );
      } else {
        // Para generar graficos de estrategias de aprendizaje, utilizo otros parametros //
        createTextIntroSectionOne(containerId, survey, factor, component);
        startConstructionGraphicOne(
          loginId,
          container,
          containerId,
          survey,
          factor,
          component,
          generateGraphOneSurveyTwo,
          generateBtnSectionTwo
        );
      }
    } else {
      for (var i = 0; i < Object.keys(response.surveys).length; i++) {
        if (response.surveys[i].id === survey) {
          for (var i = 0; i < Object.keys(response.surveys).length; i++) {
            if (response.surveys[i].id === survey) {
              for (
                var j = 0;
                j < Object.keys(response.surveys[i].factors).length;
                j++
              ) {
                if (response.surveys[i].factors[j].id === factor) {
                  for (
                    var k = 0;
                    k <
                    Object.keys(response.surveys[i].factors[j].components)
                      .length;
                    k++
                  ) {
                    if (
                      response.surveys[i].factors[j].components[k].id ===
                      component
                    ) {
                      var containerId =
                        "containerSectionOne" +
                        response.surveys[i].factors[j].components[k].id;
                      var containerClass =
                        "containerSectionOne" + response.surveys[i].id;
                      var newContainer = document.createElement("div");
                      newContainer.setAttribute("id", containerId);
                      newContainer.setAttribute("class", containerClass);
                      document
                        .getElementById(container)
                        .appendChild(newContainer);

                      createTextIntroSectionOne(
                        containerId,
                        survey,
                        factor,
                        component
                      );
                      startConstructionGraphicOne(
                        loginId,
                        container,
                        containerId,
                        survey,
                        factor,
                        component,
                        generateGraphOneSurveyTwo,
                        generateBtnSectionTwo
                      ); //envio el id del estudiante, id del contenedor nuevo para agregar elementos y el contenedor principal para luego generar otras secciones //
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  function containerSectionTwo(
    containerMain,
    survey,
    factor,
    component,
    startConstructionGraphicTwo
  ) {
    var response = surveyText;
    let loginId = localStorage.getItem("idStudent"); // obtengo el id del usuario que ingreso a la herramienta //
    if (survey === "SurveyOne" || factor === "Methodical") {
      for (var i = 0; i < Object.keys(response.surveys).length; i++) {
        if (response.surveys[i].id === survey) {
          for (
            var j = 0;
            j < Object.keys(response.surveys[i].factors).length;
            j++
          ) {
            if (response.surveys[i].factors[j].id === factor) {
              var containerId =
                "containerSectionTwo" + response.surveys[i].factors[j].id; //containerSectionTwoEmotional //
              var containerClass =
                "containerSectionTwo" + response.surveys[i].id;
              var newContainer = document.createElement("div");
              newContainer.setAttribute("id", containerId);
              newContainer.setAttribute("class", containerClass);
              document.getElementById(containerMain).appendChild(newContainer);
              if (survey === "SurveyOne") {
                createTextIntroSectionTwo(
                  containerId,
                  survey,
                  factor,
                  component
                );
                startConstructionGraphicTwo(
                  loginId,
                  containerId,
                  containerMain,
                  survey,
                  factor,
                  component,
                  generateGraphTwoSurveyOne
                );
              } else {
                createTextIntroSectionTwo(
                  containerId,
                  survey,
                  factor,
                  component
                );
                startConstructionGraphicTwo(
                  loginId,
                  containerId,
                  containerMain,
                  survey,
                  factor,
                  component,
                  generateGraphTwoSurveyTwo
                );
              }
            }
          }
        }
      }
    } else {
      for (var i = 0; i < Object.keys(response.surveys).length; i++) {
        if (response.surveys[i].id === survey) {
          for (
            var j = 0;
            j < Object.keys(response.surveys[i].factors).length;
            j++
          ) {
            if (response.surveys[i].factors[j].id === factor) {
              for (
                var k = 0;
                k <
                Object.keys(response.surveys[i].factors[j].components).length;
                k++
              ) {
                if (
                  response.surveys[i].factors[j].components[k].id === component
                ) {
                  var containerId =
                    "containerSectionTwo" +
                    response.surveys[i].factors[j].components[k].id; //containerSectionTwoDeep //
                  var containerClass =
                    "containerSectionTwo" + response.surveys[i].id;
                  var newContainer = document.createElement("div");
                  newContainer.setAttribute("id", containerId);
                  newContainer.setAttribute("class", containerClass);
                  document
                    .getElementById(containerMain)
                    .appendChild(newContainer);
                }
              }
            }
          }
        }
      }
      createTextIntroSectionTwo(containerId, survey, factor, component);
      startConstructionGraphicTwo(
        loginId,
        containerId,
        containerMain,
        survey,
        factor,
        component,
        generateGraphTwoSurveyTwo
      );
    }
  }

  function containerSectionThree(
    containerMain,
    survey,
    factor,
    component,
    startConstructionAdvice
  ) {
    var response = surveyText;
    if (survey === "SurveyOne" || factor === "Methodical") {
      for (var i = 0; i < Object.keys(response.surveys).length; i++) {
        if (response.surveys[i].id === survey) {
          for (
            var j = 0;
            j < Object.keys(response.surveys[i].factors).length;
            j++
          ) {
            if (response.surveys[i].factors[j].id === factor) {
              var containerId =
                "containerSectionThree" + response.surveys[i].factors[j].id; //containerShowMoreEmotional
              var containerClass =
                "containerSectionThree" + response.surveys[i].id;
              var newContainer = document.createElement("div");
              newContainer.setAttribute("id", containerId);
              newContainer.setAttribute("class", containerClass);
              document.getElementById(containerMain).appendChild(newContainer);
            }
          }
        }
      }
      if (survey === "SurveyOne") {
        startConstructionAdvice(
          containerId,
          survey,
          factor,
          component,
          generateAdviceSurveyOne
        ); //ejecuto func createAdvice, paso identificador del contenedor al que deseo agregar contenido //
      } else {
        startConstructionAdvice(
          containerId,
          survey,
          factor,
          component,
          generateAdviceSurveyTwo
        );
      }
    } else {
      for (var i = 0; i < Object.keys(response.surveys).length; i++) {
        if (response.surveys[i].id === survey) {
          for (
            var j = 0;
            j < Object.keys(response.surveys[i].factors).length;
            j++
          ) {
            if (response.surveys[i].factors[j].id === factor) {
              for (
                var k = 0;
                k <
                Object.keys(response.surveys[i].factors[j].components).length;
                k++
              ) {
                if (
                  response.surveys[i].factors[j].components[k].id === component
                ) {
                  var containerId =
                    "containerSectionThree" +
                    response.surveys[i].factors[j].components[k].id; //containerShowMoreEmotional
                  var containerClass =
                    "containerSectionThree" + response.surveys[i].id;
                  var newContainer = document.createElement("div");
                  newContainer.setAttribute("id", containerId);
                  newContainer.setAttribute("class", containerClass);
                  document
                    .getElementById(containerMain)
                    .appendChild(newContainer);

                  startConstructionAdvice(
                    containerId,
                    survey,
                    factor,
                    component,
                    generateAdviceSurveyTwo
                  );
                }
              }
            }
          }
        }
      }
    }
  }
  return {
    containerSectionOne,
    containerSectionTwo,
    containerSectionThree,
  };
};

},{"../data/surveyText.json":3}],9:[function(require,module,exports){
"use strict";

const surveyResult = require("../data/surveyResult.json");
const surveyText = require("../data/surveyText.json");
module.exports = ({
  startConstructionAdvice,
  generateAdviceSurveyOne,
  generateAdviceSurveyTwo,
}) => {
  function containerSectionThree(
    containerMain,
    survey,
    factor,
    component,
    startConstructionAdvice
  ) {
    var response = surveyText;
    if (survey === "SurveyOne" || factor === "Methodical") {
      for (var i = 0; i < Object.keys(response.surveys).length; i++) {
        if (response.surveys[i].id === survey) {
          for (
            var j = 0;
            j < Object.keys(response.surveys[i].factors).length;
            j++
          ) {
            if (response.surveys[i].factors[j].id === factor) {
              var containerId =
                "containerSectionThree" + response.surveys[i].factors[j].id; //containerShowMoreEmotional
              var containerClass =
                "containerSectionThree" + response.surveys[i].id;
              var newContainer = document.createElement("div");
              newContainer.setAttribute("id", containerId);
              newContainer.setAttribute("class", containerClass);
              document.getElementById(containerMain).appendChild(newContainer);
            }
          }
        }
      }
      if (survey === "SurveyOne") {
        startConstructionAdvice(
          containerId,
          survey,
          factor,
          component,
          generateAdviceSurveyOne
        ); //ejecuto func createAdvice, paso identificador del contenedor al que deseo agregar contenido //
      } else {
        startConstructionAdvice(
          containerId,
          survey,
          factor,
          component,
          generateAdviceSurveyTwo
        );
      }
    } else {
      for (var i = 0; i < Object.keys(response.surveys).length; i++) {
        if (response.surveys[i].id === survey) {
          for (
            var j = 0;
            j < Object.keys(response.surveys[i].factors).length;
            j++
          ) {
            if (response.surveys[i].factors[j].id === factor) {
              for (
                var k = 0;
                k <
                Object.keys(response.surveys[i].factors[j].components).length;
                k++
              ) {
                if (
                  response.surveys[i].factors[j].components[k].id === component
                ) {
                  var containerId =
                    "containerSectionThree" +
                    response.surveys[i].factors[j].components[k].id; //containerShowMoreEmotional
                  var containerClass =
                    "containerSectionThree" + response.surveys[i].id;
                  var newContainer = document.createElement("div");
                  newContainer.setAttribute("id", containerId);
                  newContainer.setAttribute("class", containerClass);
                  document
                    .getElementById(containerMain)
                    .appendChild(newContainer);

                  startConstructionAdvice(
                    containerId,
                    survey,
                    factor,
                    component,
                    generateAdviceSurveyTwo
                  );
                }
              }
            }
          }
        }
      }
    }
  }

  function generateBtnSectionThree(
    containerMain,
    survey,
    factor,
    component,
    containerSectionThree
  ) {
    // Genera boton para visualizar el primer grafico simulando acordeon //
    var response = surveyText;
    if (survey === "SurveyOne" || factor === "Methodical") {
      var newButton = document.createElement("button");
      newButton.innerHTML = "¿ Que puedo hacer para mejorar ?";
      newButton.setAttribute("class", "btnSectionThree close");
      for (var i = 0; i < Object.keys(response.surveys).length; i++) {
        if (response.surveys[i].id === survey) {
          for (
            var j = 0;
            j < Object.keys(response.surveys[i].factors).length;
            j++
          ) {
            if (response.surveys[i].factors[j].id === factor) {
              var onclickName =
                "sectionThree" + response.surveys[i].factors[j].id + "()"; // SectionThreeEmotional() //
              newButton.setAttribute("onclick", onclickName);
              var buttonId =
                "btnSectionThree" + response.surveys[i].factors[j].id; // lbtnSectionThreeEmotional //
              newButton.setAttribute("id", buttonId);
              document.getElementById(containerMain).appendChild(newButton);

              containerSectionThree(
                containerMain,
                survey,
                factor,
                component,
                startConstructionAdvice
              ); // EJecuto containerSectionThree y paso como parametro la función genContainerSectionthree//
            }
          }
        }
      }
    } else {
      for (var i = 0; i < Object.keys(response.surveys).length; i++) {
        if (response.surveys[i].id === survey) {
          for (
            var j = 0;
            j < Object.keys(response.surveys[i].factors).length;
            j++
          ) {
            if (response.surveys[i].factors[j].id === factor) {
              for (
                var k = 0;
                k <
                Object.keys(response.surveys[i].factors[j].components).length;
                k++
              ) {
                if (
                  response.surveys[i].factors[j].components[k].id === component
                ) {
                  var newButton = document.createElement("button");
                  newButton.innerHTML = "¿ Que puedo hacer para mejorar ?";
                  newButton.setAttribute("class", "btnSectionThree close");
                  var onclickName =
                    "sectionThree" +
                    response.surveys[i].factors[j].components[k].id +
                    "()"; // SectionThreeEmotional() //
                  newButton.setAttribute("onclick", onclickName);
                  var buttonId =
                    "btnSectionThree" +
                    response.surveys[i].factors[j].components[k].id; // lbtnSectionThreeEmotional //
                  newButton.setAttribute("id", buttonId);
                  document.getElementById(containerMain).appendChild(newButton);

                  containerSectionThree(
                    containerMain,
                    survey,
                    factor,
                    component,
                    startConstructionAdvice
                  );
                }
              }
            }
          }
        }
      }
    }
  }

  function createTextIntroSectionTwo(container, survey, factor, component) {
    //Corresponde a la introdución a el primer grafico //
    var response = surveyText;
    var cont = document.createElement("p");
    var id = "introductionSectionOne" + container;
    cont.setAttribute("id", id);
    cont.setAttribute("class", "textIntroductionSectionOne");
    if (survey === "SurveyOne" || factor === "Methodical") {
      for (var i = 0; i < Object.keys(response.surveys).length; i++) {
        if (response.surveys[i].id === survey) {
          for (
            var j = 0;
            j < Object.keys(response.surveys[i].factors).length;
            j++
          ) {
            if (response.surveys[i].factors[j].id === factor) {
              cont.innerHTML = response.surveys[i].factors[j].textGraphic2;
              document.getElementById(container).appendChild(cont);
            }
          }
        }
      }
    } else {
      for (var i = 0; i < Object.keys(response.surveys).length; i++) {
        if (response.surveys[i].id === survey) {
          for (
            var j = 0;
            j < Object.keys(response.surveys[i].factors).length;
            j++
          ) {
            if (response.surveys[i].factors[j].id === factor) {
              for (
                var k = 0;
                k <
                Object.keys(response.surveys[i].factors[j].components).length;
                k++
              ) {
                if (
                  response.surveys[i].factors[j].components[k].id === component
                ) {
                  cont.innerHTML =
                    response.surveys[i].factors[j].components[k].textGraphic2;
                  document.getElementById(container).appendChild(cont);
                }
              }
            }
          }
        }
      }
    }
  }

  function containerSectionTwo(
    containerMain,
    survey,
    factor,
    component,
    startConstructionGraphicTwo
  ) {
    var response = surveyText;
    let loginId = localStorage.getItem("idStudent"); // obtengo el id del usuario que ingreso a la herramienta //
    if (survey === "SurveyOne" || factor === "Methodical") {
      for (var i = 0; i < Object.keys(response.surveys).length; i++) {
        if (response.surveys[i].id === survey) {
          for (
            var j = 0;
            j < Object.keys(response.surveys[i].factors).length;
            j++
          ) {
            if (response.surveys[i].factors[j].id === factor) {
              var containerId =
                "containerSectionTwo" + response.surveys[i].factors[j].id; //containerSectionTwoEmotional //
              var containerClass =
                "containerSectionTwo" + response.surveys[i].id;
              var newContainer = document.createElement("div");
              newContainer.setAttribute("id", containerId);
              newContainer.setAttribute("class", containerClass);
              document.getElementById(containerMain).appendChild(newContainer);
              if (survey === "SurveyOne") {
                createTextIntroSectionTwo(
                  containerId,
                  survey,
                  factor,
                  component
                );
                startConstructionGraphicTwo(
                  loginId,
                  containerId,
                  containerMain,
                  survey,
                  factor,
                  component,
                  generateGraphTwoSurveyOne
                );
              } else {
                createTextIntroSectionTwo(
                  containerId,
                  survey,
                  factor,
                  component
                );
                startConstructionGraphicTwo(
                  loginId,
                  containerId,
                  containerMain,
                  survey,
                  factor,
                  component,
                  generateGraphTwoSurveyTwo
                );
              }
            }
          }
        }
      }
    } else {
      for (var i = 0; i < Object.keys(response.surveys).length; i++) {
        if (response.surveys[i].id === survey) {
          for (
            var j = 0;
            j < Object.keys(response.surveys[i].factors).length;
            j++
          ) {
            if (response.surveys[i].factors[j].id === factor) {
              for (
                var k = 0;
                k <
                Object.keys(response.surveys[i].factors[j].components).length;
                k++
              ) {
                if (
                  response.surveys[i].factors[j].components[k].id === component
                ) {
                  var containerId =
                    "containerSectionTwo" +
                    response.surveys[i].factors[j].components[k].id; //containerSectionTwoDeep //
                  var containerClass =
                    "containerSectionTwo" + response.surveys[i].id;
                  var newContainer = document.createElement("div");
                  newContainer.setAttribute("id", containerId);
                  newContainer.setAttribute("class", containerClass);
                  document
                    .getElementById(containerMain)
                    .appendChild(newContainer);
                }
              }
            }
          }
        }
      }
      createTextIntroSectionTwo(containerId, survey, factor, component);
      startConstructionGraphicTwo(
        loginId,
        containerId,
        containerMain,
        survey,
        factor,
        component,
        generateGraphTwoSurveyTwo
      );
    }
  }

  function startConstructionGraphicOne(
    loginId,
    containerMain,
    containerSection,
    survey,
    factor,
    component,
    generateGraphOne,
    generateBtnSectionTwo
  ) {
    if (survey === "SurveyOne") {
      var response = surveyResult;
      var improve, enrich, persist, levelResponse;
      console.log(Object.keys(response.result).length);
      console.log(response);
      for (var i = 0; i < Object.keys(response.result).length; i++) {
        if (response.result[i].studentId === loginId) {
          for (
            var j = 0;
            j < Object.keys(response.result[i].groupData).length;
            j++
          ) {
            if (response.result[i].groupData[j].factorId === factor) {
              if (response.result[i].groupData[j].levelId === "Improve") {
                improve = response.result[i].groupData[j].cohortCount;
              }
              if (response.result[i].groupData[j].levelId === "Enrich") {
                enrich = response.result[i].groupData[j].cohortCount;
              }
              if (response.result[i].groupData[j].levelId === "Persist") {
                persist = response.result[i].groupData[j].cohortCount;
              }
            }
          }
          for (
            var j = 0;
            j < Object.keys(response.result[i].studentResponses).length;
            j++
          ) {
            if (response.result[i].studentResponses[j].factorId === factor) {
              levelResponse = response.result[i].studentResponses[j].levelId;
              console.log(levelResponse);
            }
          }
          generateGraphOne(
            loginId,
            levelResponse,
            containerMain,
            containerSection,
            survey,
            factor,
            component,
            improve,
            enrich,
            persist,
            generateBtnSectionTwo,
            containerSectionTwo
          );
          console.log("Improve: " + improve);
          console.log("Enrich: " + enrich);
          console.log("Persist: " + persist);
        }
      }

      //   var surveyhttp = new XMLHttpRequest();
      //   surveyhttp.onreadystatechange = function() {
      //     if (this.readyState == 4 && this.status == 200) {
      //       var response = JSON.parse(surveyhttp.responseText);
      //       var improve, enrich, persist, levelResponse;
      //       console.log(Object.keys(response.result).length);
      //       console.log(response);
      //       for (var i = 0; i < Object.keys(response.result).length; i++) {
      //         if (response.result[i].studentId === loginId) {
      //           for (
      //             var j = 0;
      //             j < Object.keys(response.result[i].groupData).length;
      //             j++
      //           ) {
      //             if (response.result[i].groupData[j].factorId === factor) {
      //               if (response.result[i].groupData[j].levelId === "Improve") {
      //                 improve = response.result[i].groupData[j].cohortCount;
      //               }
      //               if (response.result[i].groupData[j].levelId === "Enrich") {
      //                 enrich = response.result[i].groupData[j].cohortCount;
      //               }
      //               if (response.result[i].groupData[j].levelId === "Persist") {
      //                 persist = response.result[i].groupData[j].cohortCount;
      //               }
      //             }
      //           }
      //           for (
      //             var j = 0;
      //             j < Object.keys(response.result[i].studentResponses).length;
      //             j++
      //           ) {
      //             if (
      //               response.result[i].studentResponses[j].factorId === factor
      //             ) {
      //               levelResponse =
      //                 response.result[i].studentResponses[j].levelId;
      //               console.log(levelResponse);
      //             }
      //           }
      //           generateGraphOne(
      //             loginId,
      //             levelResponse,
      //             containerMain,
      //             containerSection,
      //             survey,
      //             factor,
      //             component,
      //             improve,
      //             enrich,
      //             persist,
      //             generateBtnSectionTwo
      //           );
      //           console.log("Improve: " + improve);
      //           console.log("Enrich: " + enrich);
      //           console.log("Persist: " + persist);
      //         }
      //       }
      //     }
      //   };
      //   surveyhttp.open("GET", "data/surveyResult.json", true);
      //surveyhttp.send();
    } else {
      var response = surveyResult;
      var veryLow, low, medium, high, veryHigh, levelResponse;
      if (factor === "Methodical") {
        for (var i = 0; i < Object.keys(response.result).length; i++) {
          if (response.result[i].studentId === loginId) {
            for (
              var j = 0;
              j < Object.keys(response.result[i].groupData).length;
              j++
            ) {
              if (response.result[i].groupData[j].factorId === factor) {
                if (response.result[i].groupData[j].levelId === "VeryLow") {
                  veryLow = response.result[i].groupData[j].cohortCount;
                }
                if (response.result[i].groupData[j].levelId === "Low") {
                  low = response.result[i].groupData[j].cohortCount;
                }
                if (response.result[i].groupData[j].levelId === "Medium") {
                  medium = response.result[i].groupData[j].cohortCount;
                }
                if (response.result[i].groupData[j].levelId === "High") {
                  high = response.result[i].groupData[j].cohortCount;
                }
                if (response.result[i].groupData[j].levelId === "VeryHigh") {
                  veryHigh = response.result[i].groupData[j].cohortCount;
                }
              }
            }
            for (
              var j = 0;
              j < Object.keys(response.result[i].studentResponses).length;
              j++
            ) {
              if (response.result[i].studentResponses[j].factorId === factor) {
                levelResponse = response.result[i].studentResponses[j].levelId;
                //console.log(levelResponse);
              }
            }
          }
        }
      } else {
        for (var i = 0; i < Object.keys(response.result).length; i++) {
          if (response.result[i].studentId === loginId) {
            for (
              var j = 0;
              j < Object.keys(response.result[i].groupData).length;
              j++
            ) {
              if (
                response.result[i].groupData[j].factorId === factor &&
                response.result[i].groupData[j].componentId === component
              ) {
                if (response.result[i].groupData[j].levelId === "VeryLow") {
                  veryLow = response.result[i].groupData[j].cohortCount;
                }
                if (response.result[i].groupData[j].levelId === "Low") {
                  low = response.result[i].groupData[j].cohortCount;
                }
                if (response.result[i].groupData[j].levelId === "Medium") {
                  medium = response.result[i].groupData[j].cohortCount;
                }
                if (response.result[i].groupData[j].levelId === "High") {
                  high = response.result[i].groupData[j].cohortCount;
                }
                if (response.result[i].groupData[j].levelId === "VeryHigh") {
                  veryHigh = response.result[i].groupData[j].cohortCount;
                }
              }
            }
            for (
              var j = 0;
              j < Object.keys(response.result[i].studentResponses).length;
              j++
            ) {
              if (
                response.result[i].studentResponses[j].factorId === factor &&
                response.result[i].studentResponses[j].componentId === component
              ) {
                levelResponse = response.result[i].studentResponses[j].levelId;
                //console.log(response.result[i].studentResponses[j]);
                // console.log(levelResponse);
              }
            }
          }
        }
      }
      generateGraphOne(
        loginId,
        levelResponse,
        containerMain,
        containerSection,
        survey,
        factor,
        component,
        veryLow,
        low,
        medium,
        high,
        veryHigh,
        generateBtnSectionTwo,
        containerSectionTwo
      );

    }
  }

  function generateGraphOneSurveyOne(
    loginId,
    levelResponse,
    containerMain,
    containerSection,
    survey,
    factor,
    component,
    improve,
    enrich,
    persist,
    generateBtnSectionTwo,
    containerSectionTwo
  ) {
    var totalRow = Math.round(Math.max(improve, enrich, persist) / 10 + 0.4);
    var maxHeight = 45 + totalRow * 18 + 30; // el largo del contenedor suma del espacio para label + las filas y un extra para indicar nivel //
    var maxWidth = 200;
    var newContainer = document.createElement("div");
    var nameClass = "graphicOne" + factor;
    newContainer.setAttribute("id", "graphicOne");
    newContainer.setAttribute("class", nameClass);
    document.getElementById(containerSection).appendChild(newContainer);

    var groupImprove = d3
      .select("." + nameClass)
      .append("svg")
      .attr("width", maxWidth) //ancho (lados)
      .attr("height", maxHeight) //largo (abajo)
      .attr("id", "lowLevel")
      .attr("class", "graphOne");

    groupImprove
      .append("text")
      .text("Mejorar")
      .attr("text-anchor", "middle")
      .attr("x", 100)
      .attr("y", 20)
      .attr("fill", "black");

    var posX = 10,
      posY = 40;
    for (var i = 1; i <= improve; i++) {
      if (i % 10 === 0) {
        groupImprove
          .append("circle")
          .attr("cx", posX)
          .attr("cy", posY)
          .attr("r", 9)
          .attr("fill", "gray");
        posY = posY + 20;
        posX = 10;
      } else {
        groupImprove
          .append("circle")
          .attr("cx", posX)
          .attr("cy", posY)
          .attr("r", 9)
          .attr("fill", "gray");
        posX = posX + 20;
      }
    }

    var groupEnrich = d3
      .select("." + nameClass)
      .append("svg")
      .attr("width", maxWidth)
      .attr("height", maxHeight)
      .attr("id", "mediumLevel")
      .attr("class", "graphOne");

    groupEnrich
      .append("text")
      .text("Enriquecer")
      .attr("text-anchor", "middle")
      .attr("x", 100)
      .attr("y", 20)
      .attr("fill", "black");

    (posX = 10), (posY = 40);
    for (var i = 1; i <= enrich; i++) {
      if (i % 10 === 0) {
        groupEnrich
          .append("circle")
          .attr("cx", posX)
          .attr("cy", posY)
          .attr("r", 9)
          .attr("fill", "gray");
        posY = posY + 20;
        posX = 10;
      } else {
        groupEnrich
          .append("circle")
          .attr("cx", posX)
          .attr("cy", posY)
          .attr("r", 9)
          .attr("fill", "gray");
        posX = posX + 20;
      }
    }

    var groupPersist = d3
      .select("." + nameClass)
      .append("svg")
      .attr("width", maxWidth)
      .attr("height", maxHeight)
      .attr("id", "highLevel")
      .attr("class", "graphOne");

    groupPersist
      .append("text")
      .text("Persistir")
      .attr("text-anchor", "middle")
      .attr("x", 100)
      .attr("y", 20)
      .attr("fill", "black");

    (posX = 10), (posY = 40);
    for (var i = 1; i <= persist; i++) {
      if (i % 10 === 0) {
        groupPersist
          .append("circle")
          .attr("cx", posX)
          .attr("cy", posY)
          .attr("r", 9)
          .attr("fill", "gray");
        posY = posY + 20;
        posX = 10;
      } else {
        groupPersist
          .append("circle")
          .attr("cx", posX)
          .attr("cy", posY)
          .attr("r", 9)
          .attr("fill", "gray");
        posX = posX + 20;
      }
    }

    switch (levelResponse) {
      case "Improve":
        markPosition(groupImprove, maxHeight, maxWidth);
        break;
      case "Enrich":
        markPosition(groupEnrich, maxHeight, maxWidth);
        break;
      case "Persist":
        markPosition(groupPersist, maxHeight, maxWidth);
        break;
    }

    var newContainerTwo = document.createElement("div"); // contenedor que contendra a cada gráfico //
    newContainerTwo.setAttribute("class", "levelIndicators" + factor);
    newContainerTwo.setAttribute("id", "levelIndicators");
    document.getElementById(containerSection).appendChild(newContainerTwo);

    var labelIndicatorsLow = d3
      .select(".levelIndicators" + factor)
      .append("text")
      .text("Nivel Bajo " + "(" + improve + ")")
      .attr("class", "indicatorLevel")
      .attr("id", "indicatorLowLevel");

    var labelIndicatorsNormal = d3
      .select(".levelIndicators" + factor)
      .append("text")
      .text("Nivel Medio " + "(" + enrich + ")")
      .attr("class", "indicatorLevel")
      .attr("id", "indicatorNormalLevel");

    var labelIndicatorsHigh = d3
      .select(".levelIndicators" + factor)
      .append("text")
      .text("Nivel Alto " + "(" + persist + ")")
      .attr("class", "indicatorLevel")
      .attr("id", "indicatorHighLevel");

    generateBtnSectionTwo(
      containerMain,
      survey,
      factor,
      component,
      containerSectionTwo
    );
    //generateBtnSectionThree(containerMain, survey, factor, component,  containerSectionThree);
  }

  function generateGraphOneSurveyTwo(
    loginId,
    levelResponse,
    containerMain,
    containerSection,
    survey,
    factor,
    component,
    veryLow,
    low,
    medium,
    high,
    veryHigh,
    generateBtnSectionTwo,
    containerSectionTwo
  ) {
    var totalRow = Math.round(
      Math.max(veryLow, low, medium, high, veryHigh) / 10 + 0.4
    );
    var maxHeight = 40 + totalRow * 18 + 25; // el largo del contenedor suma del espacio para label + las filas y un extra para indicar nivel //
    var maxWidth = 160;
    var divContainer = document.createElement("div");
    var nameClass = "graphicOneLS" + containerSection;
    divContainer.setAttribute("id", "graphicOneLS");
    divContainer.setAttribute("class", nameClass);
    document.getElementById(containerSection).appendChild(divContainer);

    var groupVeryLow = d3
      .select("." + nameClass) // Contenedor para los estudiantes en el nivel más bajo //
      .append("svg")
      .attr("width", maxWidth)
      .attr("height", maxHeight)
      .attr("id", "veryLow")
      .attr("class", "graphOne");

    groupVeryLow
      .append("text")
      .text("Muy Bajo " + "(" + veryLow + ")")
      .attr("text-anchor", "middle")
      .attr("x", 80)
      .attr("y", 20)
      .attr("fill", "black");

    var posX = 8,
      posY = 40;
    for (var i = 1; i <= veryLow; i++) {
      if (i % 10 === 0) {
        groupVeryLow
          .append("circle")
          .attr("cx", posX)
          .attr("cy", posY)
          .attr("r", 7)
          .attr("fill", "gray");
        posY = posY + 16;
        posX = 8;
      } else {
        groupVeryLow
          .append("circle")
          .attr("cx", posX)
          .attr("cy", posY)
          .attr("r", 7)
          .attr("fill", "gray");
        posX = posX + 16;
      }
    }

    var groupLow = d3
      .select("." + nameClass) // segundo contenedor para los estudiantes en el nivel bajo //
      .append("svg")
      .attr("width", maxWidth)
      .attr("height", maxHeight)
      .attr("id", "low")
      .attr("class", "graphOne");

    groupLow
      .append("text")
      .text("Bajo " + "(" + low + ")")
      .attr("text-anchor", "middle")
      .attr("x", 80)
      .attr("y", 20)
      .attr("fill", "black");

    posX = 8;
    posY = 40;
    for (var i = 1; i <= low; i++) {
      if (i % 10 === 0) {
        groupLow
          .append("circle")
          .attr("cx", posX)
          .attr("cy", posY)
          .attr("r", 7)
          .attr("fill", "gray");
        posY = posY + 16;
        posX = 8;
      } else {
        groupLow
          .append("circle")
          .attr("cx", posX)
          .attr("cy", posY)
          .attr("r", 7)
          .attr("fill", "gray");
        posX = posX + 16;
      }
    }

    var groupMedium = d3
      .select("." + nameClass) // Tercer contenedor para los estudiantes en el nivel medio //
      .append("svg")
      .attr("width", maxWidth) //ancho (lados)
      .attr("height", maxHeight) //largo (abajo)
      .attr("id", "medium")
      .attr("class", "graphOne");

    groupMedium
      .append("text")
      .text("Medio " + "(" + medium + ")")
      .attr("text-anchor", "middle")
      .attr("x", 80)
      .attr("y", 20)
      .attr("fill", "black");

    posX = 8;
    posY = 40;
    for (var i = 1; i <= medium; i++) {
      if (i % 10 === 0) {
        groupMedium
          .append("circle")
          .attr("cx", posX)
          .attr("cy", posY)
          .attr("r", 7)
          .attr("fill", "gray");
        posY = posY + 16;
        posX = 8;
      } else {
        groupMedium
          .append("circle")
          .attr("cx", posX)
          .attr("cy", posY)
          .attr("r", 7)
          .attr("fill", "gray");
        posX = posX + 16;
      }
    }

    var groupHigh = d3
      .select("." + nameClass) // Cuarto contenedor para los estudiantes en el nivel medio //
      .append("svg")
      .attr("width", maxWidth) //ancho (lados)
      .attr("height", maxHeight) //largo (abajo)
      .attr("id", "high")
      .attr("class", "graphOne");

    groupHigh
      .append("text")
      .text("Alto " + "(" + high + ")")
      .attr("text-anchor", "middle")
      .attr("x", 80)
      .attr("y", 20)
      .attr("fill", "black");

    posX = 8;
    posY = 40;
    for (var i = 1; i <= high; i++) {
      if (i % 10 === 0) {
        groupHigh
          .append("circle")
          .attr("cx", posX)
          .attr("cy", posY)
          .attr("r", 7)
          .attr("fill", "gray");
        posY = posY + 16;
        posX = 8;
      } else {
        groupHigh
          .append("circle")
          .attr("cx", posX)
          .attr("cy", posY)
          .attr("r", 7)
          .attr("fill", "gray");
        posX = posX + 16;
      }
    }

    var groupVeryHigh = d3
      .select("." + nameClass)
      .append("svg")
      .attr("width", maxWidth)
      .attr("height", maxHeight)
      .attr("id", "veryHigh")
      .attr("class", "graphOne");

    groupVeryHigh
      .append("text")
      .text("Muy Alto " + "(" + veryHigh + ")")
      .attr("text-anchor", "middle")
      .attr("x", 80)
      .attr("y", 20)
      .attr("fill", "black");

    posX = 8;
    posY = 40;
    for (var i = 1; i <= veryHigh; i++) {
      if (i % 10 === 0) {
        groupVeryHigh
          .append("circle")
          .attr("cx", posX)
          .attr("cy", posY)
          .attr("r", 7)
          .attr("fill", "gray");
        posY = posY + 16;
        posX = 8;
      } else {
        groupVeryHigh
          .append("circle")
          .attr("cx", posX)
          .attr("cy", posY)
          .attr("r", 7)
          .attr("fill", "gray");
        posX = posX + 16;
      }
    }
    console.log(levelResponse);
    switch (levelResponse) {
      case "Muy Bajo":
        markPosition(groupVeryLow, maxHeight, maxWidth);
        break;
      case "Bajo":
        markPosition(groupLow, maxHeight, maxWidth);
        break;
      case "Medio":
        markPosition(groupMedium, maxHeight, maxWidth);
        break;
      case "Alto":
        markPosition(groupHigh, maxHeight, maxWidth);
        break;
      case "Muy Alto":
        markPosition(groupVeryHigh, maxHeight, maxWidth);
        break;
    }

    generateBtnSectionTwo(
      containerMain,
      survey,
      factor,
      component,
      containerSectionTwo
    );
  }

  function startConstructionGraphicTwo(
    loginId,
    containerSection,
    containerMain,
    survey,
    factor,
    component,
    generateGraphTwo
  ) {
    if (survey === "SurveyOne") {
      var response = surveyResult;
      var improve, enrich, persist;
      for (var i = 0; i < Object.keys(response.result).length; i++) {
        if (response.result[i].studentId === loginId) {
          for (
            var j = 0;
            j < Object.keys(response.result[i].groupData).length;
            j++
          ) {
            if (response.result[i].groupData[j].factorId === factor) {
              if (response.result[i].groupData[j].levelId === "Improve") {
                improve = response.result[i].groupData[j].historic;
              }
              if (response.result[i].groupData[j].levelId === "Enrich") {
                enrich = response.result[i].groupData[j].historic;
              }
              if (response.result[i].groupData[j].levelId === "Persist") {
                persist = response.result[i].groupData[j].historic;
              }
            }
          }
        }
      }
      generateGraphTwo(
        loginId,
        containerSection,
        containerMain,
        survey,
        factor,
        component,
        improve,
        enrich,
        persist,
        generateBtnSectionThree
      );

    } else {
      var response = surveyResult;
      var veryLow, low, medium, high, veryHigh;
      if (factor === "Methodical") {
        for (var i = 0; i < Object.keys(response.result).length; i++) {
          if (response.result[i].studentId === loginId) {
            for (
              var j = 0;
              j < Object.keys(response.result[i].groupData).length;
              j++
            ) {
              if (response.result[i].groupData[j].factorId === factor) {
                if (response.result[i].groupData[j].levelId === "VeryLow") {
                  veryLow = response.result[i].groupData[j].historic;
                }
                if (response.result[i].groupData[j].levelId === "Low") {
                  low = response.result[i].groupData[j].historic;
                }
                if (response.result[i].groupData[j].levelId === "Medium") {
                  medium = response.result[i].groupData[j].historic;
                }
                if (response.result[i].groupData[j].levelId === "High") {
                  high = response.result[i].groupData[j].historic;
                }
                if (response.result[i].groupData[j].levelId === "VeryHigh") {
                  veryHigh = response.result[i].groupData[j].historic;
                }
              }
            }
          }
        }
      } else {
        for (var i = 0; i < Object.keys(response.result).length; i++) {
          if (response.result[i].studentId === loginId) {
            for (
              var j = 0;
              j < Object.keys(response.result[i].groupData).length;
              j++
            ) {
              if (
                response.result[i].groupData[j].factorId === factor &&
                response.result[i].groupData[j].componentId === component
              ) {
                if (response.result[i].groupData[j].levelId === "VeryLow") {
                  veryLow = response.result[i].groupData[j].historic;
                }
                if (response.result[i].groupData[j].levelId === "Low") {
                  low = response.result[i].groupData[j].historic;
                }
                if (response.result[i].groupData[j].levelId === "Medium") {
                  medium = response.result[i].groupData[j].historic;
                }
                if (response.result[i].groupData[j].levelId === "High") {
                  high = response.result[i].groupData[j].historic;
                }
                if (response.result[i].groupData[j].levelId === "VeryHigh") {
                  veryHigh = response.result[i].groupData[j].historic;
                }
              }
            }
          }
        }
      }
      generateGraphTwo(
        loginId,
        containerSection,
        containerMain,
        survey,
        factor,
        component,
        veryLow,
        low,
        medium,
        high,
        veryHigh,
        generateBtnSectionThree
      );

    }
  }

  function generateGraphTwoSurveyOne(
    loginId,
    containerSection,
    containerMain,
    survey,
    factor,
    component,
    improve,
    enrich,
    persist,
    generateBtnSectionThree
  ) {
    var heightMax = 265,
      widthMax = 200;
    var newContainer = document.createElement("div"); // contenedor que contendra a cada gráfico //
    var nameClass = "graphicTwo" + containerSection;
    newContainer.setAttribute("id", "graphicTwo");
    newContainer.setAttribute("class", nameClass);
    newContainer.setAttribute("height", heightMax);
    document.getElementById(containerSection).appendChild(newContainer);

    var groupImprove = d3
      .select("." + nameClass) // contenedor individual por categoria //
      .append("svg")
      .attr("width", widthMax)
      .attr("height", heightMax)
      .attr("id", "lowLevelTwo")
      .attr("class", "graphTwo");

    groupImprove
      .append("text")
      .text("Mejorar")
      .attr("text-anchor", "middle")
      .attr("x", 100)
      .attr("y", 25)
      .attr("fill", "black");

    if (
      Math.round(improve[0]) + Math.round(improve[1]) + Math.round(improve[2]) >
      100
    ) {
      improve[0]--;
    }
    if (
      Math.round(improve[0]) +
        Math.round(improve[1]) +
        Math.round(improve[2]) ===
      99
    ) {
      improve[2]++;
    }
    console.log(
      Math.round(improve[0]) + Math.round(improve[1]) + Math.round(improve[2])
    );

    groupImprove
      .append("text")
      .text(
        "Nivel Bajo " +
          "(" +
          Math.round(improve[2]) +
          " - " +
          Math.round(improve[1]) +
          " - " +
          Math.round(improve[0]) +
          ")"
      )
      .attr("text-anchor", "middle")
      .attr("x", 100)
      .attr("y", 260)
      .attr("fill", "black")
      .attr("font-size", "12");

    var groupEnrich = d3
      .select("." + nameClass)
      .append("svg")
      .attr("width", widthMax)
      .attr("height", heightMax)
      .attr("id", "mediumLevelTwo")
      .attr("class", "graphTwo");

    groupEnrich
      .append("text")
      .text("Enriquecer")
      .attr("text-anchor", "middle")
      .attr("x", 100)
      .attr("y", 25)
      .attr("fill", "black");

    if (
      Math.round(enrich[0]) + Math.round(enrich[1]) + Math.round(enrich[2]) >
      100
    ) {
      enrich[0]--;
    }
    if (
      Math.round(enrich[0]) + Math.round(enrich[1]) + Math.round(enrich[2]) ===
      99
    ) {
      enrich[2]++;
    }
    //console.log(Math.round(enrich[0])+ Math.round(enrich[1])+ Math.round(enrich[2]) )
    groupEnrich
      .append("text")
      .text(
        "Nivel Medio " +
          "(" +
          Math.round(enrich[2]) +
          " - " +
          Math.round(enrich[1]) +
          " - " +
          Math.round(enrich[0]) +
          ")"
      )
      .attr("text-anchor", "middle")
      .attr("x", 100)
      .attr("y", 260)
      .attr("fill", "black")
      .attr("font-size", "12");

    var groupPersist = d3
      .select("." + nameClass)
      .append("svg")
      .attr("width", widthMax)
      .attr("height", heightMax)
      .attr("id", "highLevelTwo")
      .attr("class", "graphTwo");

    groupPersist
      .append("text")
      .text("Persistir")
      .attr("text-anchor", "middle")
      .attr("x", 100)
      .attr("y", 25)
      .attr("fill", "black");

    if (
      Math.round(persist[0]) + Math.round(persist[1]) + Math.round(persist[2]) >
      100
    ) {
      persist[0]--;
    }
    if (
      Math.round(persist[0]) +
        Math.round(persist[1]) +
        Math.round(persist[2]) ===
      99
    ) {
      persist[2]++;
    }
    //console.log(Math.round(persist[0])+ Math.round(persist[1])+ Math.round(persist[2])  );

    groupPersist
      .append("text")
      .text(
        "Nivel Alto " +
          "(" +
          Math.round(persist[2]) +
          " - " +
          Math.round(persist[1]) +
          " - " +
          Math.round(persist[0]) +
          ")"
      )
      .attr("text-anchor", "middle")
      .attr("x", 100)
      .attr("y", 260)
      .attr("fill", "black")
      .attr("font-size", "12");

    //  AGREGAR ELEMENTOS
    //  Desde los arreglos con los porcentajes por nivel, la posición cero es la más baja, la posición uno la media y la dos la más alta
    //  Nivel Bajo
    var width = 18,
      height = 18,
      posX = 0,
      posY = 40,
      aux = posX,
      jumpLine = 1;
    for (var i = 1; i <= Math.round(improve[2]); i++) {
      if (i % 10 === 0) {
        groupImprove
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#a1d99b");
        aux = posX;
        jumpLine = 0;
        posY = posY + 20;
      } else {
        groupImprove
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#a1d99b");
        aux = aux + 20;
      }
      jumpLine++;
    }

    for (var i = 1; i <= Math.round(improve[1]); i++) {
      if (jumpLine % 10 === 0) {
        groupImprove
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#fed976");
        jumpLine = 0;
        aux = posX;
        posY = posY + 20;
      } else {
        groupImprove
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#fed976");
        aux = aux + 20;
      }
      jumpLine++;
    }

    for (var i = 1; i <= Math.round(improve[0]); i++) {
      if (jumpLine % 10 === 0) {
        groupImprove
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#ffab91");
        jumpLine = 0;
        aux = posX;
        posY = posY + 20;
      } else {
        groupImprove
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#ffab91");
        aux = aux + 20;
      }
      jumpLine++;
    }

    //Nivel Medio
    (posX = 0), (posY = 40), (aux = posX), (jumpLine = 1);
    for (var i = 1; i <= Math.round(enrich[2]); i++) {
      if (jumpLine % 10 === 0) {
        groupEnrich
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#a1d99b");
        aux = posX;
        posY = posY + 20;
        jumpLine = 0;
      } else {
        groupEnrich
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#a1d99b");
        aux = aux + 20;
      }
      jumpLine++;
    }

    for (var i = 1; i <= Math.round(enrich[1]); i++) {
      if (jumpLine % 10 === 0) {
        groupEnrich
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#fed976");
        aux = posX;
        posY = posY + 20;
        jumpLine = 0;
      } else {
        groupEnrich
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#fed976");
        aux = aux + 20;
      }
      jumpLine++;
    }

    for (var i = 1; i <= Math.round(enrich[0]); i++) {
      if (jumpLine % 10 === 0) {
        groupEnrich
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#ffab91");
        aux = posX;
        posY = posY + 20;
        jumpLine = 0;
      } else {
        groupEnrich
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#ffab91");
        aux = aux + 20;
      }
      jumpLine++;
    }

    //Nivel Alto
    (posX = 0), (posY = 40), (aux = posX), (jumpLine = 1);
    for (var i = 1; i <= Math.round(persist[2]); i++) {
      if (jumpLine % 10 === 0) {
        groupPersist
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#a1d99b");
        aux = posX;
        posY = posY + 20;
        jumpLine = 0;
      } else {
        groupPersist
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#a1d99b");
        aux = aux + 20;
      }
      jumpLine++;
    }

    for (var i = 1; i <= Math.round(persist[1]); i++) {
      if (jumpLine % 10 === 0) {
        groupPersist
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#fed976");
        aux = posX;
        posY = posY + 20;
        jumpLine = 0;
      } else {
        groupPersist
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#fed976");
        aux = aux + 20;
      }
      jumpLine++;
    }

    for (var i = 1; i <= Math.round(persist[0]); i++) {
      if (jumpLine % 10 === 0) {
        groupPersist
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#ffab91");
        aux = posX;
        posY = posY + 20;
        jumpLine = 0;
      } else {
        groupPersist
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#ffab91");
        aux = aux + 20;
      }
      jumpLine++;
    }

    var newContainerTwo = document.createElement("div"); // contenedor que contendra a cada gráfico //
    newContainerTwo.setAttribute("id", "symbology" + factor);
    newContainerTwo.setAttribute("class", "symbologyGraph");
    document.getElementById(containerSection).appendChild(newContainerTwo);
    newContainerTwo.innerHTML =
      "<br/> <center><svg width='18' height = '18' > <rect width='18' height='18' style='fill:#a1d99b'/></svg> Aprobaron todas sus asignaturas &nbsp;&nbsp;&nbsp; <svg width='18' height = '18' > <rect width='18' height='18' style='fill:#fed976'/></svg> Reprobaron una asignatura &nbsp;&nbsp;&nbsp; <svg width='18' height = '18' > <rect width='18' height='18' style='fill:#ffab91'/></svg>   Reprobaron dos o más asignaturas </center>";

    generateBtnSectionThree(
      containerMain,
      survey,
      factor,
      component,
      containerSectionThree
    );
  }

  function generateGraphTwoSurveyTwo(
    loginId,
    containerSection,
    containerMain,
    survey,
    factor,
    component,
    veryLow,
    low,
    medium,
    high,
    veryHigh,
    generateBtnSectionThree
  ) {
    var heightMax = 200;
    var widthMax = 160;
    var svgContainer = document.createElement("div");
    var nameClass = "graphicTwo" + containerSection;
    svgContainer.setAttribute("id", "graphicTwo");
    svgContainer.setAttribute("class", nameClass);
    svgContainer.setAttribute("height", heightMax);
    document.getElementById(containerSection).appendChild(svgContainer);

    var sad, good, normal;

    sad = Math.round(veryLow[0]);
    normal = Math.round(veryLow[1]);
    good = Math.round(veryLow[2]);

    if (sad + good + normal > 100) {
      sad--;
    }
    if (good + sad + normal === 99) {
      good++;
    }

    var groupVeryLow = d3
      .select("." + nameClass) // Sección nivel másbajo //
      .append("svg")
      .attr("width", widthMax)
      .attr("height", heightMax)
      .attr("id", "veryLowTwo")
      .attr("class", "graphTwo");

    groupVeryLow
      .append("text")
      .text("Muy Bajo")
      .attr("text-anchor", "middle")
      .attr("x", 80)
      .attr("y", 17)
      .attr("fill", "black");

    groupVeryLow
      .append("text") // Contenido con los porcentajes //
      .attr("x", 80)
      .attr("y", 30)
      .attr("text-anchor", "middle")
      .text("(" + good + " - " + normal + " - " + sad + ")")
      .style("font-size", "11px");

    var width = 14,
      height = 14,
      posX = 0,
      posY = 40,
      aux = posX,
      jumpLine = 1;
    for (var i = 1; i <= good; i++) {
      if (i % 10 === 0) {
        groupVeryLow
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#a1d99b");
        aux = posX;
        jumpLine = 0;
        posY = posY + 16;
      } else {
        groupVeryLow
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#a1d99b");
        aux = aux + 16;
      }
      jumpLine++;
    }

    for (var i = 1; i <= normal; i++) {
      if (jumpLine % 10 === 0) {
        groupVeryLow
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#fed976");
        aux = posX;
        jumpLine = 0;
        posY = posY + 16;
      } else {
        groupVeryLow
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#fed976");
        aux = aux + 16;
      }
      jumpLine++;
    }

    for (var i = 1; i <= sad; i++) {
      if (jumpLine % 10 === 0) {
        groupVeryLow
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#ffab91");
        aux = posX;
        jumpLine = 0;
        posY = posY + 16;
      } else {
        groupVeryLow
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#ffab91");
        aux = aux + 16;
      }
      jumpLine++;
    }

    var groupLow = d3
      .select("." + nameClass)
      .append("svg")
      .attr("width", widthMax)
      .attr("height", heightMax)
      .attr("id", "lowTwo")
      .attr("class", "graphTwo");

    groupLow
      .append("text")
      .text("Bajo")
      .attr("text-anchor", "middle")
      .attr("x", 80)
      .attr("y", 17)
      .attr("fill", "black");

    sad = Math.round(low[0]);
    normal = Math.round(low[1]);
    good = Math.round(low[2]);

    if (sad + good + normal > 100) {
      sad--;
    }
    if (good + sad + normal === 99) {
      good++;
    }

    groupLow
      .append("text") // Contenido con los porcentajes //
      .attr("x", 80)
      .attr("y", 30)
      .attr("text-anchor", "middle")
      .text("(" + good + " - " + normal + " - " + sad + ")")
      .style("font-size", "11px");

    posY = 40;
    (aux = posX), (jumpLine = 1);
    for (var i = 1; i <= good; i++) {
      if (i % 10 === 0) {
        groupLow
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#a1d99b");
        aux = posX;
        jumpLine = 0;
        posY = posY + 16;
      } else {
        groupLow
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#a1d99b");
        aux = aux + 16;
      }
      jumpLine++;
    }

    for (var i = 1; i <= normal; i++) {
      if (jumpLine % 10 === 0) {
        groupLow
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#fed976");
        aux = posX;
        jumpLine = 0;
        posY = posY + 16;
      } else {
        groupLow
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#fed976");
        aux = aux + 16;
      }
      jumpLine++;
    }

    for (var i = 1; i <= sad; i++) {
      if (jumpLine % 10 === 0) {
        groupLow
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#ffab91");
        aux = posX;
        jumpLine = 0;
        posY = posY + 16;
      } else {
        groupLow
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#ffab91");
        aux = aux + 16;
      }
      jumpLine++;
    }

    var groupMedium = d3
      .select("." + nameClass)
      .append("svg")
      .attr("width", widthMax)
      .attr("height", heightMax)
      .attr("id", "mediumTwo")
      .attr("class", "graphTwo");

    groupMedium
      .append("text")
      .text("Medio")
      .attr("text-anchor", "middle")
      .attr("x", 80)
      .attr("y", 17)
      .attr("fill", "black");

    sad = Math.round(medium[0]);
    normal = Math.round(medium[1]);
    good = Math.round(medium[2]);

    if (sad + good + normal > 100) {
      sad--;
    }
    if (good + sad + normal === 99) {
      good++;
    }

    groupMedium
      .append("text") // Contenido con los porcentajes //
      .attr("x", 80)
      .attr("y", 30)
      .attr("text-anchor", "middle")
      .text("(" + good + " - " + normal + " - " + sad + ")")
      .style("font-size", "11px");

    jumpLine = 1;
    posY = 40;
    aux = posX;
    for (var i = 1; i <= good; i++) {
      if (i % 10 === 0) {
        groupMedium
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#a1d99b");
        aux = posX;
        jumpLine = 0;
        posY = posY + 16;
      } else {
        groupMedium
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#a1d99b");
        aux = aux + 16;
      }
      jumpLine++;
    }

    for (var i = 1; i <= normal; i++) {
      if (jumpLine % 10 === 0) {
        groupMedium
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#fed976");
        aux = posX;
        jumpLine = 0;
        posY = posY + 16;
      } else {
        groupMedium
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#fed976");
        aux = aux + 16;
      }
      jumpLine++;
    }

    for (var i = 1; i <= sad; i++) {
      if (jumpLine % 10 === 0) {
        groupMedium
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#ffab91");
        aux = posX;
        jumpLine = 0;
        posY = posY + 16;
      } else {
        groupMedium
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#ffab91");
        aux = aux + 16;
      }
      jumpLine++;
    }

    var groupHigh = d3
      .select("." + nameClass)
      .append("svg")
      .attr("width", widthMax)
      .attr("height", heightMax)
      .attr("id", "highTwo")
      .attr("class", "graphTwo");

    groupHigh
      .append("text")
      .text("Alto")
      .attr("text-anchor", "middle")
      .attr("x", 80)
      .attr("y", 17)
      .attr("fill", "black");

    sad = Math.round(high[0]);
    normal = Math.round(high[1]);
    good = Math.round(high[2]);

    if (sad + good + normal > 100) {
      sad--;
    }
    if (good + sad + normal === 99) {
      good++;
    }

    groupHigh
      .append("text") // Contenido con los porcentajes //
      .attr("x", 80)
      .attr("y", 30)
      .attr("text-anchor", "middle")
      .text("(" + good + " - " + normal + " - " + sad + ")")
      .style("font-size", "11px");

    jumpLine = 1;
    posY = 40;
    aux = posX;
    for (var i = 1; i <= good; i++) {
      if (i % 10 === 0) {
        groupHigh
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#a1d99b");
        aux = posX;
        jumpLine = 0;
        posY = posY + 16;
      } else {
        groupHigh
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#a1d99b");
        aux = aux + 16;
      }
      jumpLine++;
    }

    for (var i = 1; i <= normal; i++) {
      if (jumpLine % 10 === 0) {
        groupHigh
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#fed976");
        aux = posX;
        jumpLine = 0;
        posY = posY + 16;
      } else {
        groupHigh
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#fed976");
        aux = aux + 16;
      }
      jumpLine++;
    }

    for (var i = 1; i <= sad; i++) {
      if (jumpLine % 10 === 0) {
        groupHigh
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#ffab91");
        aux = posX;
        jumpLine = 0;
        posY = posY + 16;
      } else {
        groupHigh
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#ffab91");
        aux = aux + 16;
      }
      jumpLine++;
    }

    var groupVeryHigh = d3
      .select("." + nameClass)
      .append("svg")
      .attr("width", widthMax)
      .attr("height", heightMax)
      .attr("id", "veryHighTwo")
      .attr("class", "graphTwo");

    groupVeryHigh
      .append("text")
      .text("Muy Alto")
      .attr("text-anchor", "middle")
      .attr("x", 80)
      .attr("y", 17)
      .attr("fill", "black");

    sad = Math.round(veryHigh[0]);
    normal = Math.round(veryHigh[1]);
    good = Math.round(veryHigh[2]);

    if (sad + good + normal > 100) {
      sad--;
    }
    if (good + sad + normal === 99) {
      good++;
    }

    groupVeryHigh
      .append("text") // Contenido con los porcentajes //
      .attr("x", 80)
      .attr("y", 30)
      .attr("text-anchor", "middle")
      .text("(" + good + " - " + normal + " - " + sad + ")")
      .style("font-size", "11px");

    jumpLine = 1;
    posY = 40;
    aux = posX;
    for (var i = 1; i <= good; i++) {
      if (i % 10 === 0) {
        groupVeryHigh
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#a1d99b");
        aux = posX;
        jumpLine = 0;
        posY = posY + 16;
      } else {
        groupVeryHigh
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#a1d99b");
        aux = aux + 16;
      }
      jumpLine++;
    }

    for (var i = 1; i <= normal; i++) {
      if (jumpLine % 10 === 0) {
        groupVeryHigh
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#fed976");
        aux = posX;
        jumpLine = 0;
        posY = posY + 16;
      } else {
        groupVeryHigh
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#fed976");
        aux = aux + 16;
      }
      jumpLine++;
    }

    for (var i = 1; i <= sad; i++) {
      if (jumpLine % 10 === 0) {
        groupVeryHigh
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#ffab91");
        aux = posX;
        jumpLine = 0;
        posY = posY + 16;
      } else {
        groupVeryHigh
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#ffab91");
        aux = aux + 16;
      }
      jumpLine++;
    }

    var newContainerTwo = document.createElement("div"); // contenedor que contendra a cada gráfico //
    newContainerTwo.setAttribute("id", "symbology" + factor + component);
    newContainerTwo.setAttribute("class", "symbologyGraph");
    document.getElementById(containerSection).appendChild(newContainerTwo);
    newContainerTwo.innerHTML =
      " <br/><center> <svg width='14' height = '14' > <rect width='14' height='14' style='fill:#a1d99b'/> </svg> Aprobaron todas sus asignaturas. &nbsp;&nbsp;&nbsp; <svg width='14' height = '14' > <rect width='14' height='14' style='fill:#fed976'/></svg> Reprobaron una asignatura. &nbsp;&nbsp;&nbsp; <svg width='14' height = '14' > <rect width='14' height='14' style='fill:#ffab91'/></svg>   Reprobaron dos o más asignaturas.</center>";

    generateBtnSectionThree(
      containerMain,
      survey,
      factor,
      component,
      containerSectionThree
    );
  }

  function markPosition(category, height, widthx) {
    // Añade marcador de posicion en función de los puntajes obtenidos //
    category
      .append("text")
      .html("&#8679; Tu nivel")
      .attr("text-anchor", "middle")
      .attr("x", widthx / 2)
      .attr("y", height - 10)
      .attr("fill", "#800026");
  }

  return {
    startConstructionGraphicOne,
    generateGraphOneSurveyOne,
    generateGraphOneSurveyTwo,
    startConstructionGraphicTwo,
    generateGraphTwoSurveyOne,
    generateGraphTwoSurveyTwo,
    markPosition,
  };
};

},{"../data/surveyResult.json":2,"../data/surveyText.json":3}],10:[function(require,module,exports){
"use strict";

var numberView = 0;
const surveyText = require("../data/surveyText.json");

module.exports = ({ createButtonFactors }) => {
  function getIntroductionText(view) {
    // genero contenido de introduccíon para cada una de las vistas //
    var response = surveyText;
    switch (view) {
      case "home":
        var getText = response.home.introduction; // obtengo texto introductorio desde el archivo JSON //
        break;
      case "surveyOne":
        var getText = response.surveys[0].introduction;
        break;
      case "surveyTwo":
        var getText = response.surveys[1].introduction;
        break;
    }
    var container = document.createElement("p");
    var id = "introduction" + view;
    container.setAttribute("id", id);
    container.setAttribute("class", "textIntroduction");
    container.innerHTML = getText;
    document.getElementById(view).appendChild(container);

    if (view === "surveyOne") {
      createButtonFactors(0, view); // Para la vista AUTOCONCEPTO, genero los botones de sus dimensiones, paso como parametro la posicion de sus datos en el archivo JSON y el contenedor en el cual se agregara //
    }
    if (view === "surveyTwo") {
      createButtonFactors(1, view);
    }
  }

  function reference(container) {
    var referenceContainer = document.createElement("div"); //Se crea el contenedor con las referencias de los textos que se emplearan en el dashboard //
    referenceContainer.setAttribute("id", "divReference");
    referenceContainer.setAttribute("class", "containerReference");
    document.getElementById(container).appendChild(referenceContainer);

    referenceContainer.innerHTML = "<br/><left>REFERENCIAS <br/><br/>";

    var response = surveyText;
    var countReferences = Object.keys(response.references).length; // Obtengo la cantidad de referencias en el JSON //
    for (var i = 0; i < countReferences; i++) {
      //Para cada referencia, creo una etiqueta `p` para agregarla //
      var getText = response.references[i].reference;
      var container = document.createElement("p");
      container.setAttribute("class", "referenceText");
      container.innerHTML = getText + "<br/><br/>"; //"<center>" + getText + "</center><br/>";
      document.getElementById("divReference").appendChild(container);
    }
  }

  function createTextIntroSectionOne(container, survey, factor, component) {
    //Corresponde a la introdución a el primer grafico //
    var response = surveyText;
    var cont = document.createElement("p");
    var id = "introductionSectionOne" + container;
    cont.setAttribute("id", id);
    cont.setAttribute("class", "textIntroductionSectionOne");
    if (survey === "SurveyOne" || factor === "Methodical") {
      for (var i = 0; i < Object.keys(response.surveys).length; i++) {
        if (response.surveys[i].id === survey) {
          for (
            var j = 0;
            j < Object.keys(response.surveys[i].factors).length;
            j++
          ) {
            if (response.surveys[i].factors[j].id === factor) {
              cont.innerHTML = response.surveys[i].factors[j].textGraphic1;
              document.getElementById(container).appendChild(cont);
            }
          }
        }
      }
    } else {
      for (var i = 0; i < Object.keys(response.surveys).length; i++) {
        if (response.surveys[i].id === survey) {
          for (
            var j = 0;
            j < Object.keys(response.surveys[i].factors).length;
            j++
          ) {
            if (response.surveys[i].factors[j].id === factor) {
              for (
                var k = 0;
                k <
                Object.keys(response.surveys[i].factors[j].components).length;
                k++
              ) {
                if (
                  response.surveys[i].factors[j].components[k].id === component
                ) {
                  cont.innerHTML =
                    response.surveys[i].factors[j].components[k].textGraphic1;
                  document.getElementById(container).appendChild(cont);
                }
              }
            }
          }
        }
      }
    }
  }
  function createTextIntroSectionTwo(container, survey, factor, component) {
    //Corresponde a la introdución a el primer grafico //
    var response = surveyText;
    var cont = document.createElement("p");
    var id = "introductionSectionOne" + container;
    cont.setAttribute("id", id);
    cont.setAttribute("class", "textIntroductionSectionOne");
    if (survey === "SurveyOne" || factor === "Methodical") {
      for (var i = 0; i < Object.keys(response.surveys).length; i++) {
        if (response.surveys[i].id === survey) {
          for (
            var j = 0;
            j < Object.keys(response.surveys[i].factors).length;
            j++
          ) {
            if (response.surveys[i].factors[j].id === factor) {
              cont.innerHTML = response.surveys[i].factors[j].textGraphic2;
              document.getElementById(container).appendChild(cont);
            }
          }
        }
      }
    } else {
      for (var i = 0; i < Object.keys(response.surveys).length; i++) {
        if (response.surveys[i].id === survey) {
          for (
            var j = 0;
            j < Object.keys(response.surveys[i].factors).length;
            j++
          ) {
            if (response.surveys[i].factors[j].id === factor) {
              for (
                var k = 0;
                k <
                Object.keys(response.surveys[i].factors[j].components).length;
                k++
              ) {
                if (
                  response.surveys[i].factors[j].components[k].id === component
                ) {
                  cont.innerHTML =
                    response.surveys[i].factors[j].components[k].textGraphic2;
                  document.getElementById(container).appendChild(cont);
                }
              }
            }
          }
        }
      }
    }
  }

  return {
    createTextIntroSectionOne,
    createTextIntroSectionTwo,
    reference,
    getIntroductionText,
  };
};

},{"../data/surveyText.json":3}],11:[function(require,module,exports){
"use strict";

const surveyText = require("../data/surveyText.json");

module.exports = ({ containerSectionOne, createButtonFactorsComponent }) => {
  function getIntroductionFactor(
    container,
    survey,
    factor,
    component,
    generateBtnSectionOne
  ) {
    // Recibo factor (pos de la dimension en el JSON) y view(contenedor donde agrego el elemento) y la fun generateBtnSectionOne //
    switch (survey) { //genera introducción a cada uno de los factores del autoconcepto
      case "SurveyOne":
        var response = surveyText;
        var text = " ";
        var element = document.createElement("p");
        element.setAttribute("class", "textIntroductionSelfconcept");
        for (var i = 0; i < Object.keys(response.surveys).length; i++) {
          if (response.surveys[i].id === survey) {
            for (
              var j = 0;
              j < Object.keys(response.surveys[i].factors).length;
              j++
            ) {
              if (response.surveys[i].factors[j].id === factor) {
                text = response.surveys[i].factors[j].text1;
              }
            }
          }
        }
        element.innerHTML = text;
        document.getElementById(container).appendChild(element);
        generateBtnSectionOne(
          container,
          survey,
          factor,
          component,
          containerSectionOne
        ); // Ejecuto la función que imprime el texto de introduccion. Luego llamo a la función generateBtnSectionOne y paso como parametro containerSectionOne //

        break;

      case "SurveyTwo":
        var response = surveyText;
        var text = " ";
        var element = document.createElement("p");
        element.setAttribute("class", "textIntroductionLearningStrategy");
        for (var i = 0; i < Object.keys(response.surveys).length; i++) {
          if (response.surveys[i].id === survey) {
            for (
              var j = 0;
              j < Object.keys(response.surveys[i].factors).length;
              j++
            ) {
              if (response.surveys[i].factors[j].id === factor) {
                text = response.surveys[i].factors[j].text1;
              }
            }
          }
        }
        element.innerHTML = text;
        document.getElementById(container).appendChild(element);
        if (factor === "Methodical") {
          generateBtnSectionOne(
            container,
            survey,
            factor,
            component,
            containerSectionOne
          );
        } else {
          createButtonFactorsComponent(survey, factor, container); //Si se trata de la sección de procesamiento creo los btn de sus factores //
        }

        break;
    }
  }

  function getIntroductionComponent(
    container,
    survey,
    factor,
    component,
    generateBtnSectionOne
  ) {
    /* Intro de cada dimensión de procesamiento de la info */
    var response = surveyText;
    var element = document.createElement("p");
    element.setAttribute("class", "textIntroductionComponentProsecution");
    for (var i = 0; i < Object.keys(response.surveys).length; i++) {
      if (response.surveys[i].id === survey) {
        for (
          var j = 0;
          j < Object.keys(response.surveys[i].factors).length;
          j++
        ) {
          if (response.surveys[i].factors[j].id === factor) {
            for (
              var k = 0;
              k < Object.keys(response.surveys[i].factors[j].components).length;
              k++
            ) {
              if (
                response.surveys[i].factors[j].components[k].id === component
              ) {
                element.innerHTML =
                  response.surveys[i].factors[j].components[k].text1;
                document.getElementById(container).appendChild(element);
              }
            }
          }
        }
      }
    }

    generateBtnSectionOne(
      container,
      survey,
      factor,
      component,
      containerSectionOne
    ); // Ejecuto la función que imprime el texto de introduccion. Luego llamo a la función generateBtnSectionOne y paso como parametro containerSectionOne //
  }
  return {
    getIntroductionFactor,
    getIntroductionComponent,
  };
};

},{"../data/surveyText.json":3}],12:[function(require,module,exports){
"use strict";
const surveyText = require("../data/surveyText.json");
// const {
//   getIntroductionText,
//   reference,
// } = require("../script/generateMainTextView");

module.exports = ({ getIntroductionText, reference }) => {
  //window.onload = startDashboard(mainContainer); //funcion que inica el esquema base de la pagina web, entrego como parametro la función que permite visualizar el contenido de INICIO//
  function startDashboard(mainContainer) {
    var newContainer = document.createElement("div"); //contenedor de los btn principales del dashboard //
    newContainer.setAttribute("id", "btnContainer");
    newContainer.setAttribute("class", "containerBtnMain");
    document.getElementById("dashboard").appendChild(newContainer);

    var response = surveyText;

    var newButton = document.createElement("button"); //genero btn del menu de inicio //
    newButton.setAttribute("id", "buttonHome");
    newButton.setAttribute("class", "buttonMain");
    newButton.setAttribute("onclick", "home()");
    newButton.innerHTML = "INICIO";
    document.getElementById("btnContainer").appendChild(newButton);

    for (var i = 0; i < Object.keys(response.surveys).length; i++) {
      var newButton = document.createElement("button");
      var id = "button" + response.surveys[i].id;
      var onclick = "open" + response.surveys[i].id + "()";
      newButton.setAttribute("id", id);
      newButton.setAttribute("class", "buttonMain");
      newButton.setAttribute("onclick", onclick);
      newButton.innerHTML = response.surveys[i].label;
      document.getElementById("btnContainer").appendChild(newButton);
    }
    mainContainer(showHome); //corre la función mainContainer y paso como parametro la función showHome

    //var xhttp = new XMLHttpRequest();
    //   xhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //       var response = JSON.parse(xhttp.responseText);

    //       var newButton = document.createElement("button"); //genero btn del menu de inicio //
    //       newButton.setAttribute("id", "buttonHome");
    //       newButton.setAttribute("class", "buttonMain");
    //       newButton.setAttribute("onclick", "home()");
    //       newButton.innerHTML = "INICIO";
    //       document.getElementById("btnContainer").appendChild(newButton);

    //       for (var i = 0; i < Object.keys(response.surveys).length; i++) {
    //         var newButton = document.createElement("button");
    //         var id = "button" + response.surveys[i].id;
    //         var onclick = "open" + response.surveys[i].id + "()";
    //         newButton.setAttribute("id", id);
    //         newButton.setAttribute("class", "buttonMain");
    //         newButton.setAttribute("onclick", onclick);
    //         newButton.innerHTML = response.surveys[i].label;
    //         document.getElementById("btnContainer").appendChild(newButton);
    //       }
    //       mainContainer(showHome); //corre la función mainContainer y paso como parametro la función showHome
    //     }
    //   };
    //xhttp.open("GET", "data/surveyText.json", true);
    //xhttp.send();
  }

  function mainContainer(showHome) {
    // genero los contenedores principales, para que despues pueda agregar todo el contenido necesario //
    var containerHome = document.createElement("div");
    containerHome.setAttribute("id", "home");
    containerHome.setAttribute("class", "containerViewMain");
    document.getElementById("dashboard").appendChild(containerHome);

    var containerSurveyOne = document.createElement("div");
    containerSurveyOne.setAttribute("id", "surveyOne");
    containerSurveyOne.setAttribute("class", "containerViewMain");
    document.getElementById("dashboard").appendChild(containerSurveyOne);

    var containerSurveyTwo = document.createElement("div");
    containerSurveyTwo.setAttribute("id", "surveyTwo");
    containerSurveyTwo.setAttribute("class", "containerViewMain");
    document.getElementById("dashboard").appendChild(containerSurveyTwo);

    showHome(loadItems); //inicia la función showHome //
  }

  function showHome(loadItems) {
    // Permite que al iniciar la página esta cargue el contenido de la pestaña de inicio //
    openMe("home", "buttonHome"); //home: nombre del contenedor, buttonHome: nombre del boton para modificar aspecto //
    loadItems();
  }

  function loadItems() {
    getIntroductionText("home"); //Obtengo el texto de introduccion y lo agrega al contenedor home //
    reference("dashboard"); //con esta función se imprimen toda las referencias en el contenedor dashboard //
  }

  return { startDashboard, mainContainer, showHome, loadItems };
};

},{"../data/surveyText.json":3}]},{},[4])(4)
});
