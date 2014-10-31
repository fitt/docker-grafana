Docker image of Grafana
-----------------------

This image contains a standalone instance of Grafana (with ElasticSearch for
persistance)

There are a few Dockerfiles out there for an all-in-one statsd/graphite/grafana
install, which is great, but these isn't as useful if you already have graphite going, or are using
Hosted Graphite, and just want to setup Grafana separately.

The image has one customizable setting, GRAPHITE_URL, which can be specified via
a Docker environment variable, and it exposes one port, 80.

Build
-----

./build

Run
---

./start https://your-graphite-server-url

Run from Docker Index (prebuilt image)
---------------------------------------------

docker run -d -p 80:80 --name grafana -e GRAPHITE_URL=https://www.hostedgraphite.com/myAccessKeyUrl keeth/grafana
