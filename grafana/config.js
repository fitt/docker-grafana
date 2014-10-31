define(['settings'],
function (Settings) {
  return new Settings({
    default_route: '/dashboard/file/default.json',
    unsaved_changes_warning: true,
    window_title_prefix: 'Grafana - ',
    datasources: {
      graphite: {
        type: 'graphite',
        url: 'GRAPHITE_URL'
      },
      elasticsearch: {
        type: 'elasticsearch',
        url: '/elasticsearch',
        index: 'grafana-dash',
        grafanaDB: true
      }
    }
  });
});
