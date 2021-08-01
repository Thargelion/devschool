# Devschool

![npm version 14.17.4](https://img.shields.io/badge/node-v14_LTS-blue.svg)
![npm version 14.17.4](https://img.shields.io/badge/angular-v12-red.svg)

## About

Dev school is a programming teaching tool with:

- IDE
- Slides

Currently, we support json as course manager.

## Getting Started

### Editing courses:

Courses data are stored in assets/json. Devschool iterates over a list of lessons:

```json
{
  "lessonList": [
    {
      "title": "Introducción",
      "content": "<p>\n    Programar, en esencia, es dar instrucciones a una máquina.\n</p>\n<p>\n    Como cualquier lenguaje, los de programación (y Python obviamente) cuentan con su propio léxico, sintaxis y semántica\n</p>\n<p>\n    Léxico implica que usa ciertas palabras o símbolos especiales para construir sentido\n</p>\n<p>\n    Sintaxis que estos símbolos deben de ser usados en un orden y modo establecido para que tengan sentido \n</p>\n<p>\n    Y semántica que este texto que construimos en base a un léxico y sintaxis tendrá un significado. En este caso \n    interpretado por la máquina.\n</p>\n<p>\n    En este curso aprenderemos a hacer un poco de esto usando un lenguaje muy amigable para el humano como es Python.\n</p>\n<p>\n    Python es un lenguaje que ya lleva <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/History_of_Python\">30 años</a> de historia\n</p>\n<p>Python es un lenguaje multi-paradigma, ya veremos qué significa esto luego, muy flexible.</p><p>\n    Fue diseñado para tener un léxico y una sintaxis reducida. Esto lo vuelve un lenguaje muy fácil de usar.</p><p> ¡Ya veremos!\n</p>"
    }
  ]
}
```

|Attribute|Type                       |Description       |
|---------|---------------------------|------------------|
|title    |STRING                     |Name of the lesson|
|content  |STRING (supports HTML tags)|Lesson content    |

## Installing

It's an angular project, so it requires angular in order to work: https://angular.io/guide/setup-local

After installing angular, update dependencies:

```shell
npm i
```

Then start:

```shell
ng serve
```
