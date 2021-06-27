var questionskube2 = [
    {
        "title": "JSON PATH in Kubernetes",
        "question": "Привет и добро пожаловать во второе упражнение <b>JSON PATH + KUBERNETES</b>",
        "subText": "Какой тип у root-элемента в этих данных?",
        "hint": "Корневой или root элемент - это самый верхний объект в документе JSON. Посмотри на инкапсуляцию. Это <code> квадратные скобки [] </code> или <code> фигурные скобки {} </code> <br>Если это квадратные скобки, это array/list. В фигурных скобках это dictionary",
        "question_type": "multiple_choice",
        "options": ["List", "Dictionary", "String"],
        "source_data":
              [{
                  "apiVersion": "v1",
                  "kind": "Pod",
                  "metadata": {
                      "name": "web-pod-1",
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
              },{
                  "apiVersion": "v1",
                  "kind": "Pod",
                  "metadata": {
                      "name": "web-pod-2",
                      "namespace": "default"
                  },
                  "spec": {
                      "containers": [
                          {
                              "image": "nginx:alpine",
                              "name": "nginx"
                          }
                      ],
                      "nodeName": "node02"
                  }
              },
              {
                  "apiVersion": "v1",
                  "kind": "Pod",
                  "metadata": {
                      "name": "web-pod-3",
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
              {
                  "apiVersion": "v1",
                  "kind": "Pod",
                  "metadata": {
                      "name": "web-pod-4",
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
              {
                  "apiVersion": "v1",
                  "kind": "Pod",
                  "metadata": {
                      "name": "db-pod-1",
                      "namespace": "default"
                  },
                  "spec": {
                      "containers": [
                          {
                              "image": "mysql",
                              "name": "mysql"
                          }
                      ],
                      "nodeName": "node01"
                  }
              }],
        "answer": "List"
    },
    {
        "title": "JSON PATH in Kubernetes",
        "question": "Сколько элементов в этом <code> list</code>?",
        "subText": "",
        "hint": "",
        "question_type": "multiple_choice",
        "options": [0, 1, 2, 3, 4, 5],
        "source_data":
              [{
                  "apiVersion": "v1",
                  "kind": "Pod",
                  "metadata": {
                      "name": "web-pod-1",
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
              },{
                  "apiVersion": "v1",
                  "kind": "Pod",
                  "metadata": {
                      "name": "web-pod-2",
                      "namespace": "default"
                  },
                  "spec": {
                      "containers": [
                          {
                              "image": "nginx:alpine",
                              "name": "nginx"
                          }
                      ],
                      "nodeName": "node02"
                  }
              },
              {
                  "apiVersion": "v1",
                  "kind": "Pod",
                  "metadata": {
                      "name": "web-pod-3",
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
              {
                  "apiVersion": "v1",
                  "kind": "DaemonSet",
                  "metadata": {
                      "name": "web-pod-4",
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
              {
                  "apiVersion": "v1",
                  "kind": "Pod",
                  "metadata": {
                      "name": "db-pod-1",
                      "namespace": "default"
                  },
                  "spec": {
                      "containers": [
                          {
                              "image": "mysql",
                              "name": "mysql"
                          }
                      ],
                      "nodeName": "node01"
                  }
              }],
        "answer": 5
    },
    {
        "title": "JSON PATH in Kubernetes",
        "question": "Задай такой запрос JSON PATH, чтобы извлечь <code> name </code> этих объектов Kubernetes",
        "subText": "",
        "hint": "",
        "source_data":
              [{
                  "apiVersion": "v1",
                  "kind": "Pod",
                  "metadata": {
                      "name": "web-pod-1",
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
              },{
                  "apiVersion": "v1",
                  "kind": "Pod",
                  "metadata": {
                      "name": "web-pod-2",
                      "namespace": "default"
                  },
                  "spec": {
                      "containers": [
                          {
                              "image": "nginx:alpine",
                              "name": "nginx"
                          }
                      ],
                      "nodeName": "node02"
                  }
              },
              {
                  "apiVersion": "v1",
                  "kind": "Pod",
                  "metadata": {
                      "name": "web-pod-3",
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
              {
                  "apiVersion": "v1",
                  "kind": "DaemonSet",
                  "metadata": {
                      "name": "web-pod-4",
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
              {
                  "apiVersion": "v1",
                  "kind": "Pod",
                  "metadata": {
                      "name": "db-pod-1",
                      "namespace": "default"
                  },
                  "spec": {
                      "containers": [
                          {
                              "image": "mysql",
                              "name": "mysql"
                          }
                      ],
                      "nodeName": "node01"
                  }
              }],
        "output_data": [
          "web-pod-1",
          "web-pod-2",
          "web-pod-3",
          "web-pod-4",
          "db-pod-1"
        ],
        "answer": "$[*].metadata.name"
    },
    {
        "title": "JSON PATH in Kubernetes",
        "question": "Задай такой запрос JSON PATH, чтобы извлечь <code> name </code> объектов, которые являются <code> PODs</code>",
        "subText": "",
        "hint": "",
        "source_data":
              [{
                  "apiVersion": "v1",
                  "kind": "Pod",
                  "metadata": {
                      "name": "web-pod-1",
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
              },{
                  "apiVersion": "v1",
                  "kind": "Pod",
                  "metadata": {
                      "name": "web-pod-2",
                      "namespace": "default"
                  },
                  "spec": {
                      "containers": [
                          {
                              "image": "nginx:alpine",
                              "name": "nginx"
                          }
                      ],
                      "nodeName": "node02"
                  }
              },
              {
                  "apiVersion": "v1",
                  "kind": "Pod",
                  "metadata": {
                      "name": "web-pod-3",
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
              {
                  "apiVersion": "v1",
                  "kind": "DaemonSet",
                  "metadata": {
                      "name": "web-pod-4",
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
              {
                  "apiVersion": "v1",
                  "kind": "Pod",
                  "metadata": {
                      "name": "db-pod-1",
                      "namespace": "default"
                  },
                  "spec": {
                      "containers": [
                          {
                              "image": "mysql",
                              "name": "mysql"
                          }
                      ],
                      "nodeName": "node01"
                  }
              }],
        "output_data": [
          "web-pod-1",
          "web-pod-2",
          "web-pod-3",
          "db-pod-1"
        ],
        "answer": "$[?(@.kind == 'Pod')].metadata.name"
    },
    {
        "title": "JSON PATH in Kubernetes",
        "question": "Задай такой запрос JSON PATH, чтобы извлечь <code> name </code> всех пользователей",
        "subText": "",
        "hint": "",
        "source_data": {
            "kind": "Config",
            "apiVersion": "v1",
            "preferences": {},
            "clusters": [
                {
                    "name": "development",
                    "cluster": {
                        "server": "KUBE_ADDRESS",
                        "certificate-authority": "/etc/kubernetes/pki/ca.crt"
                    }
                },
                {
                    "name": "kubernetes-on-aws",
                    "cluster": {
                        "server": "KUBE_ADDRESS",
                        "certificate-authority": "/etc/kubernetes/pki/ca.crt"
                    }
                },
                {
                    "name": "production",
                    "cluster": {
                        "server": "KUBE_ADDRESS",
                        "certificate-authority": "/etc/kubernetes/pki/ca.crt"
                    }
                },
                {
                    "name": "test-cluster-1",
                    "cluster": {
                        "server": "KUBE_ADDRESS",
                        "certificate-authority": "/etc/kubernetes/pki/ca.crt"
                    }
                }
            ],
            "users": [
                {
                    "name": "aws-user",
                    "user": {
                        "client-certificate": "/etc/kubernetes/pki/users/aws-user/aws-user.crt",
                        "client-key": "/etc/kubernetes/pki/users/aws-user/aws-user.key"
                    }
                },
                {
                    "name": "dev-user",
                    "user": {
                        "client-certificate": "/etc/kubernetes/pki/users/dev-user/developer-user.crt",
                        "client-key": "/etc/kubernetes/pki/users/dev-user/dev-user.key"
                    }
                },
                {
                    "name": "test-user",
                    "user": {
                        "client-certificate": "/etc/kubernetes/pki/users/test-user/test-user.crt",
                        "client-key": "/etc/kubernetes/pki/users/test-user/test-user.key"
                    }
                }
            ],
            "contexts": [
                {
                    "name": "aws-user@kubernetes-on-aws",
                    "context": {
                        "cluster": "kubernetes-on-aws",
                        "user": "aws-user"
                    }
                },
                {
                    "name": "research",
                    "context": {
                        "cluster": "test-cluster-1",
                        "user": "dev-user"
                    }
                },
                {
                    "name": "test-user@development",
                    "context": {
                        "cluster": "development",
                        "user": "test-user"
                    }
                },
                {
                    "name": "test-user@production",
                    "context": {
                        "cluster": "production",
                        "user": "test-user"
                    }
                }
            ],
            "current-context": "test-user@development"
        },
        "output_data": [
          "aws-user",
          "dev-user",
          "test-user"
        ],
        "answer": "$.users[*].name"
    }
]
