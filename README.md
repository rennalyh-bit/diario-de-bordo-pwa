# Diário de Bordo PWA - Otimização de Performance

## Descrição

Projeto PWA desenvolvido com HTML, CSS e JavaScript com foco em registro de atividades diárias.

A atividade teve como objetivo aplicar técnicas de otimização de performance utilizando Lighthouse e boas práticas de desenvolvimento web.

---

# Gargalos Identificados

Na análise inicial com Lighthouse foram encontrados:

* Recursos não minificados
* JavaScript bloqueando renderização
* Arquivos CSS grandes
* Imagens não otimizadas
* Ausência de formatos modernos de imagem

---

# Melhorias Aplicadas

## Imagens

* Conversão de PNG para WEBP
* Redução do tamanho dos ícones

## CSS e JavaScript

* Minificação dos arquivos
* Remoção de código desnecessário
* Remoção de logs e espaços extras

## PWA

* Service Worker otimizado
* Cache dos principais arquivos
* Melhor funcionamento offline

## Estrutura

* Código reorganizado
* Melhor carregamento da aplicação

---

# Comparativo

## Antes

Ver arquivo:

```txt id="jlwm6w"
relatorios/antes.png
```

## Depois

Ver arquivo:

```txt id="fjlwmc"
relatorios/depois.png
```

---

# Resultados

Após as otimizações:

* Melhor tempo de carregamento
* Melhor pontuação no Lighthouse
* Redução de recursos carregados
* Melhor experiência em dispositivos móveis

---

# Tecnologias

* HTML
* CSS
* JavaScript
* PWA
* Lighthouse
* Service Worker
