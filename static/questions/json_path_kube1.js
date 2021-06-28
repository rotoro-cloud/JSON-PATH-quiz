var json_path_kube1 = [
    {
        "title": "JSON PATH in Kubernetes",
        "question": "Привет и добро пожаловать в упражнение <b>JSON PATH + KUBERNETES</b>. Мы начнем, продвигаясь от заданий на просмотр до составления сложных запросов",
        "subText": "Какой тип у root-элемента в этих данных?",
        "hint": "Корневой или root элемент - это самый верхний объект в документе JSON. Посмотри на инкапсуляцию. Это <code> квадратные скобки [] </code> или <code> фигурные скобки {} </code> <br>Если это квадратные скобки, это array/list. В фигурных скобках это dictionary",
        "question_type": "multiple_choice",
        "options": ["List", "Dictionary", "String"],
        "source_data":
              {
                  "apiVersion": "v1",
                  "kind": "Pod",
                  "metadata": {
                      "name": "nginx-pod",
                      "namespace": "default"
                  },
                  "spec": {
                      "containers": [
                          {
                              "image": "nginx:alpine",
                              "name": "nginx"
                          }
                      ],
                      "nodeName": "node01"
                  }
              },
        "answer": "Dictionary"
    },
    {
        "title": "JSON PATH in Kubernetes",
        "question": "Сколько свойств / полей имеет корневой объект (dictionary)?",
        "subText": "",
        "hint": "В корневом dictionary есть поля: <code> apiVersion </code>, <code> kind </code>, <code> metadata </code> и <code> spec </code>",
        "question_type": "multiple_choice",
        "options": [0, 1, 2, 3, 4],
        "source_data":
              {
                  "apiVersion": "v1",
                  "kind": "Pod",
                  "metadata": {
                      "name": "nginx-pod",
                      "namespace": "default"
                  },
                  "spec": {
                      "containers": [
                          {
                              "image": "nginx:alpine",
                              "name": "nginx"
                          }
                      ],
                      "nodeName": "node01"
                  }
              },
        "answer": 4
    },
    {
        "title": "JSON PATH in Kubernetes",
        "question": "Какой тип у поля <code> apiVersion</code>?",
        "subText": "",
        "hint": "У <code> apiVersion </code> значение равно <code> v1</code>. Значит тип данных <code> string</code>",
        "question_type": "multiple_choice",
        "options": ["Number", "Array", "String", "List", "Dictionary"],
        "source_data":
              {
                  "apiVersion": "v1",
                  "kind": "Pod",
                  "metadata": {
                      "name": "nginx-pod",
                      "namespace": "default"
                  },
                  "spec": {
                      "containers": [
                          {
                              "image": "nginx:alpine",
                              "name": "nginx"
                          }
                      ],
                      "nodeName": "node01"
                  }
              },
        "answer": "String"
    },
    {
        "title": "JSON PATH in Kubernetes",
        "question": "Какой тип у поля <code> metadata</code>?",
        "subText": "",
        "hint": "Поле <code> metadata </code> заключено в фигурные скобки. Значит тип данных <code> dictionary</code>",
        "question_type": "multiple_choice",
        "options": ["Number", "Array", "String", "List", "Dictionary"],
        "source_data":
              {
                  "apiVersion": "v1",
                  "kind": "Pod",
                  "metadata": {
                      "name": "nginx-pod",
                      "namespace": "default"
                  },
                  "spec": {
                      "containers": [
                          {
                              "image": "nginx:alpine",
                              "name": "nginx"
                          }
                      ],
                      "nodeName": "node01"
                  }
              },
        "answer": "Dictionary"
    },
    {
        "title": "JSON PATH in Kubernetes",
        "question": "Какой из ответов лучше всего описывает тип данных поля <code> containers</code>?",
        "subText": "",
        "hint": "Свойство <code> containers </code> это массив, т.к. он начинается с квадратных скобок. Но внутри массива каждый из элементов заключен в фигурные скобки. Значит это <code> list of dictionaries</code>",
        "question_type": "multiple_choice",
        "options": ["Array", "String", "List", "List of Dictionaries", "List of Strings"],
        "source_data":
              {
                  "apiVersion": "v1",
                  "kind": "Pod",
                  "metadata": {
                      "name": "nginx-pod",
                      "namespace": "default"
                  },
                  "spec": {
                      "containers": [
                          {
                              "image": "nginx:alpine",
                              "name": "nginx"
                          }
                      ],
                      "nodeName": "node01"
                  }
              },
        "answer": "List of Dictionaries"
    },
    {
        "title": "JSON PATH in Kubernetes",
        "question": "Ок, давай теперь делать запросы с помощью JSON PATH.<br>Задай такой запрос JSON PATH, чтобы извлечь <code> kind </code> этого объекта Kubernetes",
        "subText": "",
        "hint": "",
        "source_data":
              {
                  "apiVersion": "v1",
                  "kind": "Pod",
                  "metadata": {
                      "name": "nginx-pod",
                      "namespace": "default"
                  },
                  "spec": {
                      "containers": [
                          {
                              "image": "nginx:alpine",
                              "name": "nginx"
                          }
                      ],
                      "nodeName": "node01"
                  }
              },
        "output_data": [
          "Pod"
        ],
        "answer": "$.kind"
    },
    {
        "title": "JSON PATH in Kubernetes",
        "question": "Задай такой запрос JSON PATH, чтобы извлечь <code> name </code> этого POD",
        "subText": "",
        "hint": "",
        "source_data":
              {
                  "apiVersion": "v1",
                  "kind": "Pod",
                  "metadata": {
                      "name": "nginx-pod",
                      "namespace": "default"
                  },
                  "spec": {
                      "containers": [
                          {
                              "image": "nginx:alpine",
                              "name": "nginx"
                          }
                      ],
                      "nodeName": "node01"
                  }
              },
        "output_data": [
          "nginx-pod"
        ],
        "answer": "$.metadata.name"
    },
    {
        "title": "JSON PATH in Kubernetes",
        "question": "Задай такой запрос JSON PATH, чтобы извлечь <code> nodeName </code> этого объекта Kubernetes из секции <code> spec</code>",
        "subText": "",
        "hint": "",
        "source_data":
              {
                  "apiVersion": "v1",
                  "kind": "Pod",
                  "metadata": {
                      "name": "nginx-pod",
                      "namespace": "default"
                  },
                  "spec": {
                      "containers": [
                          {
                              "image": "nginx:alpine",
                              "name": "nginx"
                          }
                      ],
                      "nodeName": "node01"
                  }
              },
        "output_data": [
          "node01"
        ],
        "answer": "$.spec.nodeName"
    },
    {
        "title": "JSON PATH in Kubernetes",
        "question": "Задай такой запрос JSON PATH, чтобы извлечь из <code> container </code> данные о контейнере",
        "subText": "",
        "hint": "",
        "source_data":
              {
                  "apiVersion": "v1",
                  "kind": "Pod",
                  "metadata": {
                      "name": "nginx-pod",
                      "namespace": "default"
                  },
                  "spec": {
                      "containers": [
                          {
                              "image": "nginx:alpine",
                              "name": "nginx"
                          }
                      ],
                      "nodeName": "node01"
                  }
              },
        "output_data": [{
            "image": "nginx:alpine",
            "name": "nginx"
        }],
        "answer": "$.spec.containers[0]"
    },
    {
        "title": "JSON PATH in Kubernetes",
        "question": "Задай такой запрос JSON PATH, чтобы извлечь <code> image </code> из секции <code> containers </code>",
        "subText": "",
        "hint": "",
        "source_data":
              {
                  "apiVersion": "v1",
                  "kind": "Pod",
                  "metadata": {
                      "name": "nginx-pod",
                      "namespace": "default"
                  },
                  "spec": {
                      "containers": [
                          {
                              "image": "nginx:alpine",
                              "name": "nginx"
                          }
                      ],
                      "nodeName": "node01"
                  }
              },
        "output_data": [
          "nginx:alpine"
        ],
        "answer": "$.spec.containers[0].image"
    },
    {
        "title": "JSON PATH in Kubernetes",
        "question": "Теперь у нас еще есть статус POD.<br>Задай такой запрос JSON PATH, чтобы извлечь <code> phase </code> из секции <code> status</code>",
        "subText": "Если тебе не видно поле <code> status</code>, просто прокрути вниз",
        "highlights": [{
          "rowStart": 60,
          "columnStart" : 0,
          "rowEnd": 60,
          "columnEnd": 144
        }],
        "hint": "",
        "source_data":
              {
                  "apiVersion": "v1",
                  "kind": "Pod",
                  "metadata": {
                      "name": "nginx-pod",
                      "namespace": "default"
                  },
                  "spec": {
                      "containers": [
                          {
                              "image": "nginx:alpine",
                              "name": "nginx"
                          },
                          {
                              "image": "redis:alpine",
                              "name": "redis-container"
                          }
                      ],
                      "nodeName": "node01"
                  },
                  "status": {
                    "conditions": [
                        {
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-06-13T05:34:09Z",
                            "status": "True",
                            "type": "Initialized"
                        },
                        {
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-06-13T05:34:09Z",
                            "status": "True",
                            "type": "PodScheduled"
                        }
                    ],
                    "containerStatuses": [
                        {
                            "image": "nginx:alpine",
                            "name": "nginx",
                            "ready": false,
                            "restartCount": 4,
                            "state": {
                                "waiting": {
                                    "reason": "ContainerCreating"
                                }
                            }
                        },
                        {
                            "image": "redis:alpine",
                            "name": "redis-container",
                            "ready": false,
                            "restartCount": 2,
                            "state": {
                                "waiting": {
                                    "reason": "ContainerCreating"
                                }
                            }
                        }
                    ],
                    "hostIP": "172.17.0.75",
                    "phase": "Pending",
                    "qosClass": "BestEffort",
                    "startTime": "2021-06-13T05:34:09Z"
                }
              },
        "output_data": [
          "Pending"
        ],
        "answer": "$.status.phase"
    },
    {
        "title": "JSON PATH in Kubernetes",
        "question": "Задай такой запрос JSON PATH, чтобы извлечь из <code> reason </code> из секции <code> status</code>",
        "subText": "Если тебе не видно поле <code> status</code>, просто прокрути вниз",
        "highlights": [{
          "rowStart": 43,
          "columnStart" : 0,
          "rowEnd": 43,
          "columnEnd": 144
        }],
        "hint": "",
        "source_data":
              {
                  "apiVersion": "v1",
                  "kind": "Pod",
                  "metadata": {
                      "name": "nginx-pod",
                      "namespace": "default"
                  },
                  "spec": {
                      "containers": [
                          {
                              "image": "nginx:alpine",
                              "name": "nginx"
                          },
                          {
                              "image": "redis:alpine",
                              "name": "redis-container"
                          }
                      ],
                      "nodeName": "node01"
                  },
                  "status": {
                    "conditions": [
                        {
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-06-13T05:34:09Z",
                            "status": "True",
                            "type": "Initialized"
                        },
                        {
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-06-13T05:34:09Z",
                            "status": "True",
                            "type": "PodScheduled"
                        }
                    ],
                    "containerStatuses": [
                        {
                            "image": "nginx:alpine",
                            "name": "nginx",
                            "ready": false,
                            "restartCount": 4,
                            "state": {
                                "waiting": {
                                    "reason": "ContainerCreating"
                                }
                            }
                        },
                        {
                            "image": "redis:alpine",
                            "name": "redis-container",
                            "ready": false,
                            "restartCount": 2,
                            "state": {
                                "waiting": {
                                    "reason": "ContainerCreating"
                                }
                            }
                        }
                    ],
                    "hostIP": "172.17.0.75",
                    "phase": "Pending",
                    "qosClass": "BestEffort",
                    "startTime": "2021-06-13T05:34:09Z"
                }
              },
        "output_data": [
          "ContainerCreating"
        ],
        "answer": "$.status.containerStatuses[0].state.waiting.reason"
    },
    {
        "title": "JSON PATH in Kubernetes",
        "question": "Задай такой запрос JSON PATH, чтобы извлечь <code> restartCount </code> из места, отвечающего за контейнер с именем <code> redis-container</code>",
        "subText": "Если тебе не видно поле <code> status</code>, просто прокрути вниз",
        "highlights": [{
          "rowStart": 51,
          "columnStart" : 0,
          "rowEnd": 51,
          "columnEnd": 144
        }],
        "hint": "",
        "source_data":
              {
                  "apiVersion": "v1",
                  "kind": "Pod",
                  "metadata": {
                      "name": "nginx-pod",
                      "namespace": "default"
                  },
                  "spec": {
                      "containers": [
                          {
                              "image": "nginx:alpine",
                              "name": "nginx"
                          },
                          {
                              "image": "redis:alpine",
                              "name": "redis-container"
                          }
                      ],
                      "nodeName": "node01"
                  },
                  "status": {
                    "conditions": [
                        {
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-06-13T05:34:09Z",
                            "status": "True",
                            "type": "Initialized"
                        },
                        {
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-06-13T05:34:09Z",
                            "status": "True",
                            "type": "PodScheduled"
                        }
                    ],
                    "containerStatuses": [
                        {
                            "image": "nginx:alpine",
                            "name": "nginx",
                            "ready": false,
                            "restartCount": 4,
                            "state": {
                                "waiting": {
                                    "reason": "ContainerCreating"
                                }
                            }
                        },
                        {
                            "image": "redis:alpine",
                            "name": "redis-container",
                            "ready": false,
                            "restartCount": 2,
                            "state": {
                                "waiting": {
                                    "reason": "ContainerCreating"
                                }
                            }
                        }
                    ],
                    "hostIP": "172.17.0.75",
                    "phase": "Pending",
                    "qosClass": "BestEffort",
                    "startTime": "2021-06-13T05:34:09Z"
                }
              },
        "output_data": [
          2
        ],
        "answer": "$.status.containerStatuses[1].restartCount"
    },
    {
        "title": "JSON PATH in Kubernetes",
        "question": "Порядок контейнеров может меняться. <code> redis-container </code> не всегда будет идти вторым по счету. <br>Итак, переделай запрос JSON PATH чтобы получить  <code> restartCount </code> контейнера <code> redis-container</code>, но в этот раз используя <b>критерий/условие</b>. Получи количество рестартов контейнера <code> redis-container </code>, используя в запросе его имя",
        "subText": "Если тебе не видно поле <code> status</code>, просто прокрути вниз",
        "highlights": [{
          "rowStart": 51,
          "columnStart" : 0,
          "rowEnd": 51,
          "columnEnd": 144
        }],
        "hint": "",
        "source_data":
              {
                  "apiVersion": "v1",
                  "kind": "Pod",
                  "metadata": {
                      "name": "nginx-pod",
                      "namespace": "default"
                  },
                  "spec": {
                      "containers": [
                          {
                              "image": "nginx:alpine",
                              "name": "nginx"
                          },
                          {
                              "image": "redis:alpine",
                              "name": "redis-container"
                          }
                      ],
                      "nodeName": "node01"
                  },
                  "status": {
                    "conditions": [
                        {
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-06-13T05:34:09Z",
                            "status": "True",
                            "type": "Initialized"
                        },
                        {
                            "lastProbeTime": null,
                            "lastTransitionTime": "2021-06-13T05:34:09Z",
                            "status": "True",
                            "type": "PodScheduled"
                        }
                    ],
                    "containerStatuses": [
                        {
                            "image": "nginx:alpine",
                            "name": "nginx",
                            "ready": false,
                            "restartCount": 4,
                            "state": {
                                "waiting": {
                                    "reason": "ContainerCreating"
                                }
                            }
                        },
                        {
                            "image": "redis:alpine",
                            "name": "redis-container",
                            "ready": false,
                            "restartCount": 2,
                            "state": {
                                "waiting": {
                                    "reason": "ContainerCreating"
                                }
                            }
                        }
                    ],
                    "hostIP": "172.17.0.75",
                    "phase": "Pending",
                    "qosClass": "BestEffort",
                    "startTime": "2021-06-13T05:34:09Z"
                }
              },
        "output_data": [
          2
        ],
        "answer": "$.status.containerStatuses[?(@.name == 'redis-container')].restartCount"
    }
]
