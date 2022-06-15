# Star Wars API Challenge

Challenge Indra

### Pasos

Instalar dependencias

```sh
npm ci
```

### Configurar .env (.env.example)

### Instalar Dynamodb localmente

```sh
sls dynamodb install
```


Click [aquí](https://www.serverless.com/plugins/serverless-dynamodb-local) para más detalles


### Iniciar proyecto localmente

```sh
npm start
```

Visitar: [http://localhost:3000](http://localhost:3000)


### Ejecutar tests

Debes tener en cuenta que el servidor esté funcionando

```sh
npm run test
```

### Apis

- people

| servicio      | detalle                       |
|:--------------|:----------------------------------|
| `dev/people`      | Guardar un personaje. |
| `dev/people/{id}` | Obtener un personaje |

### Despliegue

Se debe instalar `serverless` de manera global.
Revisar los permisos correspondientes. [IAM](https://docs.aws.amazon.com/es_es/IAM/latest/UserGuide/introduction.html)

```sh
sls deploy
```