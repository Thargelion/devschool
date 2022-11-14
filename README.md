# Devschool

[<img alt="Deployed with FTP Deploy Action" src="https://img.shields.io/badge/Deployed With-FTP DEPLOY ACTION-%3CCOLOR%3E?style=for-the-badge&color=0077b6">](https://github.com/SamKirkland/FTP-Deploy-Action)
![node version 16.18.1](https://img.shields.io/badge/node-v16_LTS-blue.svg)
![angular version 14.17.4](https://img.shields.io/badge/angular-v14-red.svg)
[![Build Status](https://travis-ci.com/Thargelion/devschool.svg?branch=main)](https://travis-ci.com/Thargelion/devschool)

## Index

- [Thanks to](#thanks-to)
- [About](#about)
- [Getting started](#getting-started)
- [Installing](#installing)
- [Next Steps](#next-steps)
- [Collaborating](#collaborating)
- [Support project](#support)

## Thanks to

### Skulpt

In browser implementation of python. Check their site at: https://skulpt.org/

### Ace

High performance code editor for the web. Check their site at: https://ace.c9.io/

[Back to index](#index)

## About

Dev school is a programming teaching tool with:

- IDE
- Slides

Currently, we support json as course manager and python as programming language.

<img width="1440" alt="Captura de pantalla 2021-08-01 a las 17 53 18" src="https://user-images.githubusercontent.com/5816687/127785047-0ec621ea-37d5-4ef2-b16f-a7608e0aeff3.png">

[Back to index](#index)

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

[Back to index](#index)

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

[Back to index](#index)

## Next steps

1. Add exams (expect a specific output)
2. Add course management (edit courses)
3. Add more languages

[Back to index](#index)

## Collaborating

Feel free to fork and improve!

[Back to index](#index)

## Support

Have you enjoyed, made use of devschool? Feel free to invite me a coffee!

[![Invitame un café en cafecito.app](https://cdn.cafecito.app/imgs/buttons/button_3.svg)](https://cafecito.app/mdepietro)
[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B4141WQ)

[Back to index](#index)
