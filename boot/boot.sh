#!/bin/bash
sed "s,GRAPHITE_URL,$GRAPHITE_URL," -i /grafana/config.js
exec /usr/bin/supervisord
