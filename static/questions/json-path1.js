var questions = [
    {
        "title": "Dictionary",
        "question": "Задай такой запрос JSON-path, чтобы его результат был таким же, как в ожидаемом выводе",
        "subText": "",
        "source_data": {"property1": "value1", "property2": "value2"},
        "output_data": ["value1"],
        "answer": "$.property1"
    },
    {
        "title": "Dictionary",
        "question": "Задай запрос JSON-path для извлечения деталей записи <code> truck </code>",
        "subText": "",
        "source_data": {
          "truck": {
            "color": "Green",
            "price": "$15,000"
          },
          "bus": {
            "color": "Yellow",
            "price": "$112,000"
          }
        },
        "output_data": [{
          "color": "Green",
          "price": "$15,000"
        }],
        "answer": "$.truck"
    },
    {
        "title": "Dictionary in Dictionary",
        "question": "Задай запрос JSON-path для извлечения <code> price </code>, относящийся к <code> truck </code>",
        "subText": "",
        "source_data": {
          "truck": {
            "color": "Green",
            "price": "$15,000"
          },
          "bus": {
            "color": "Yellow",
            "price": "$112,000"
          }
        },
        "output_data": ["$15,000"],
        "answer": "$.truck.price"
    },
    {
        "title": "Dictionary in Dictionary",
        "question": "Задай запрос JSON-path для извлечения <code> price </code>, относящийся к <code> bus </code>",
        "subText": "",
        "source_data": {
          "vehicles": {
            "truck": {
              "color": "Green",
              "price": "$15,000"
            },
            "bus": {
              "color": "Yellow",
              "price": "$112,000"
            }
          }
		},
        "output_data": ["$112,000"],
        "answer": "$.vehicles.bus.price"
	  
    },
    {
        "title": "List in Dictionary",
        "question": "Задай запрос JSON-path для извлечения данных о <code> wheels </code>, относящихся к <code> truck </code>",
        "subText": "",
        "source_data": {
            "truck": {
              "color": "Green",
              "price": "$15,000",
              "wheels": [
                {
                  "model": "X195/75R16",
                  "location": "front-right"
                },
                {
                  "model": "C195/75R16",
                  "location": "front-left"
                },
                {
                  "model": "N195/75R16",
                  "location": "rear-right"
                },
                {
                  "model": "G195/75R16",
                  "location": "rear-left"
                }
              ]
            }
          },
        "output_data": [[
          {
                  "model": "X195/75R16",
                  "location": "front-right"
          },
          {
                  "model": "C195/75R16",
                  "location": "front-left"
          },
          {
                  "model": "N195/75R16",
                  "location": "rear-right"
          },
          {
                  "model": "G195/75R16",
                  "location": "rear-left"
          }
        ]],
        "answer": "$.truck.wheels"
    },
    {
        "title": "List in Dictionary",
        "question": "Задай запрос JSON-path для извлечения данных о <code> 3rd wheel </code>, относящийся к <code> truck </code>",
        "subText": "",
        "source_data": {
            "truck": {
              "color": "Green",
              "price": "$15,000",
              "wheels": [
                {
                  "model": "X195/75R16",
                  "location": "front-right"
                },
                {
                  "model": "C195/75R16",
                  "location": "front-left"
                },
                {
                  "model": "N195/75R16",
                  "location": "rear-right"
                },
                {
                  "model": "G195/75R16",
                  "location": "rear-left"
                }
              ]
            }
          },
        "output_data": [{
                  "model": "N195/75R16",
                  "location": "rear-right"
        }],
        "answer": "$.truck.wheels[2]"
    },
    {
        "title": "List in Dictionary",
        "question": "Задай запрос JSON-path для извлечения данных о <code> model </code> третьего колеса, относящейся к <code> truck </code>",
        "subText": "",
        "source_data": {
            "truck": {
              "color": "Green",
              "price": "$15,000",
              "wheels": [
                {
                  "model": "X195/75R16",
                  "location": "front-right"
                },
                {
                  "model": "C195/75R16",
                  "location": "front-left"
                },
                {
                  "model": "N195/75R16",
                  "location": "rear-right"
                },
                {
                  "model": "G195/75R16",
                  "location": "rear-left"
                }
              ]
            }
          },
        "output_data": ["N195/75R16"],
        "answer": "$.truck.wheels[2].model"
    },
    {
        "title": "List in Dictionary",
        "question": "Получи все <code> payslip details </code> из <code> employee </code>",
        "subText": "",
        "source_data": {"employee":{"name":"Vova","gender":"male","age":35,"address":{"city":"Moscow","region":"Moscow","country":"Russia"},"payslips":[{"month":"july","amount":1800},{"month":"august","amount":2100},{"month":"september","amount":2800}]}},
        "output_data": [[{"month":"july","amount":1800},{"month":"august","amount":2100},{"month":"september","amount":2800}]],
        "answer": "$.employee.payslips"
    },
    {
        "title": "List in Dictionary",
        "question": "Получи детали <code> payslip </code> за третий месяц",
        "subText": "",
        "source_data": {"employee":{"name":"Vova","gender":"male","age":35,"address":{"city":"Moscow","region":"Moscow","country":"Russia"},"payslips":[{"month":"july","amount":1800},{"month":"august","amount":2100},{"month":"september","amount":2800}]}},
        "output_data": [{"month":"september","amount":2800}],
        "answer": "$.employee.payslips[2]"
    },
    {
        "title": "List in Dictionary",
        "question": "Получи <code> amount </code> за третий месяц",
        "subText": "",
        "source_data": {"employee":{"name":"Vova","gender":"male","age":35,"address":{"city":"Moscow","region":"Moscow","country":"Russia"},"payslips":[{"month":"july","amount":1800},{"month":"august","amount":2100},{"month":"september","amount":2800}]}},
        "output_data": [2800],
        "answer": "$.employee.payslips[2].amount"
    },
    {
        "title": "List in Dictionary",
        "question": "Прими вызов, попробуй найти <code> Kip S. </code> в этом списке Нобелевских Лауреатов",
        "subText": "",
        "source_data": {"prizes":[{"year":"2018","category":"physics","overallMotivation":"\"for groundbreaking inventions in the field of laser physics\"","laureates":[{"id":"960","firstname":"Arthur","surname":"Ashkin","motivation":"\"for the optical tweezers and their application to biological systems\"","share":"2"},{"id":"961","firstname":"G\u00e9rard","surname":"Mourou","motivation":"\"for their method of generating high-intensity, ultra-short optical pulses\"","share":"4"},{"id":"962","firstname":"Donna","surname":"Strickland","motivation":"\"for their method of generating high-intensity, ultra-short optical pulses\"","share":"4"}]},{"year":"2018","category":"chemistry","laureates":[{"id":"963","firstname":"Frances H.","surname":"Arnold","motivation":"\"for the directed evolution of enzymes\"","share":"2"},{"id":"964","firstname":"George P.","surname":"Smith","motivation":"\"for the phage display of peptides and antibodies\"","share":"4"},{"id":"965","firstname":"Sir Gregory P.","surname":"Winter","motivation":"\"for the phage display of peptides and antibodies\"","share":"4"}]},{"year":"2018","category":"medicine","laureates":[{"id":"958","firstname":"James P.","surname":"Allison","motivation":"\"for their discovery of cancer therapy by inhibition of negative immune regulation\"","share":"2"},{"id":"959","firstname":"Tasuku","surname":"Honjo","motivation":"\"for their discovery of cancer therapy by inhibition of negative immune regulation\"","share":"2"}]},{"year":"2018","category":"peace","laureates":[{"id":"966","firstname":"Denis","surname":"Mukwege","motivation":"\"for their efforts to end the use of sexual violence as a weapon of war and armed conflict\"","share":"2"},{"id":"967","firstname":"Nadia","surname":"Murad","motivation":"\"for their efforts to end the use of sexual violence as a weapon of war and armed conflict\"","share":"2"}]},{"year":"2018","category":"economics","laureates":[{"id":"968","firstname":"William D.","surname":"Nordhaus","motivation":"\"for integrating climate change into long-run macroeconomic analysis\"","share":"2"},{"id":"969","firstname":"Paul M.","surname":"Romer","motivation":"\"for integrating technological innovations into long-run macroeconomic analysis\"","share":"2"}]},{"year":"2014","category":"peace","laureates":[{"id":"913","firstname":"Kailash","surname":"Satyarthi","motivation":"\"for their struggle against the suppression of children and young people and for the right of all children to education\"","share":"2"},{"id":"914","firstname":"Malala","surname":"Yousafzai","motivation":"\"for their struggle against the suppression of children and young people and for the right of all children to education\"","share":"2"}]},{"year":"2017","category":"physics","laureates":[{"id":"941","firstname":"Rainer","surname":"Weiss","motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"","share":"2"},{"id":"942","firstname":"Barry C.","surname":"Barish","motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"","share":"4"},{"id":"943","firstname":"Kip S.","surname":"Thorne","motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"","share":"4"}]},{"year":"2017","category":"chemistry","laureates":[{"id":"944","firstname":"Jacques","surname":"Dubochet","motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"","share":"3"},{"id":"945","firstname":"Joachim","surname":"Frank","motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"","share":"3"},{"id":"946","firstname":"Richard","surname":"Henderson","motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"","share":"3"}]},{"year":"2017","category":"medicine","laureates":[{"id":"938","firstname":"Jeffrey C.","surname":"Hall","motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"","share":"3"},{"id":"939","firstname":"Michael","surname":"Rosbash","motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"","share":"3"},{"id":"940","firstname":"Michael W.","surname":"Young","motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"","share":"3"}]}]},
        "output_data": [{
          "id": "943",
          "firstname": "Kip S.",
          "surname": "Thorne",
          "motivation": "\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share": "4"
        }],
        "answer": "$.prizes[6].laureates[2]"
    },
    {
        "title": "Lists",
        "question": "Получи <code> первый </code> элемент списка",
        "subText": "",
        "source_data": ["truck", "car", "bike", "bus"],
        "output_data": [ "truck" ],
        "answer": "$[0]"
    },
    {
        "title": "Lists",
        "question": "Получи <code> первый и третий </code> элементы списка",
        "subText": "",
        "source_data": ["truck", "car", "bike", "bus"],
        "output_data": [ "truck", "bike" ],
        "answer": "$[0,2]"
    }
]
