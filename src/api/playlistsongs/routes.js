const routes = (handler) => [
  {
    method: "POST",
    path: "/playlists/{id}/songs",
    handler: handler.postPlaylistsongHandler,
    options: {
      auth: "playlists_songsapp_jwt",
    },
  },
  {
    method: "GET",
    path: "/playlists/{id}/songs",
    handler: handler.getPlaylistsongByIdHandler,
    options: {
      auth: "playlists_songsapp_jwt",
    },
  },
  {
    method: "DELETE",
    path: "/playlists/{id}/songs",
    handler: handler.deletePlaylistsongHandler,
    options: {
      auth: "playlists_songsapp_jwt",
    },
  },
];

module.exports = routes;
