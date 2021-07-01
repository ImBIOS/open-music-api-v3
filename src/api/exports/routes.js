const routes = (handler) => [
  {
    method: "POST",
    path: "/exports/playlists/{playlistId}",
    handler: handler.postExportSongsHandler,
    options: {
      auth: "playlists_songsapp_jwt",
    },
  },
];

module.exports = routes;
