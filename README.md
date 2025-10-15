Pré-requisitos
- k6 (https://k6.io) instalado localmente
- jq (opcional, para análise rápida do summary JSON): https://stedolan.github.io/jq/

## Como rodar os testes
1. Abra um terminal na pasta deste projeto caminho "k6_performance_project_agi".
2. Executar teste de carga (load):

   ```bash
   k6 run --summary-export=load_summary.json load_test.js
   ```

3. Executar teste de pico (spike):

   ```bash
   k6 run --summary-export=spike_summary.json spike_test.js
   ```

4. Analisar o `summary` (JSON) gerado. Exemplo de comandos com `jq` para extrair métricas:

   ```bash
   # extrair p(90) de http_req_duration
   jq '.metrics.http_req_duration.values["p(90)"]' load_summary.json

   # extrair média de requisições por segundo (http_reqs.rate)
   jq '.metrics.http_reqs.rate' load_summary.json

   # extrair taxa de erros calculada (custom metric 'errors')
   jq '.metrics.errors.rate' load_summary.json
   ```

