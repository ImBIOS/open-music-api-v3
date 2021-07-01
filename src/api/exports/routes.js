const routes = (handler) => [
  {
    method: "POST",
    path: "/exports/playlists/{playlistId}",
    handler: handler.postExportPlaylistsHandler,
    options: {
      auth: "playlists_songsapp_jwt",
    },
  },
];

module.exports = routes;
