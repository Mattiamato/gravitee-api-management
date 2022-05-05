# MongoDB

Here is a docker-compose to run APIM jest api e2e tests with MongoDB as database.

---
> For more information, please read :
> https://docs.gravitee.io/apim/3.x/apim_installguide_repositories_mongodb.html
---

## How to run ?

```bash
APIM_REGISTRY={APIM_REGISTRY} APIM_VERSION={APIM_VERSION} docker-compose -f ./docker/quick-setup/mongodb/docker-compose.yml -f ./docker/test/docker-compose-tests.yml -f ./docker/test/api-tests/docker-compose-api-tests.yml -p api-integration-test up -d --scale management_ui=0 --scale portal_ui=0 
```
