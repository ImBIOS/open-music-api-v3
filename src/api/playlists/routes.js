const routes = (handler) => [
  {
    method: "POST",
    path: "/playlists",
    handler: handler.postPlaylistHandler,
    options: {
      auth: "playlists_songsapp_jwt",
    },
  },
  {
    method: "GET",
    path: "/playlists",
    handler: handler.getPlaylistsHandler,
    options: {
      auth: "playlists_songsapp_jwt",
    },
  },
  {
    method: "GET",
    path: "/playlists/{id}",
    handler: handler.getPlaylistByIdHandler,
    options: {
      auth: "playlists_songsapp_jwt",
    },
  },
  {
    method: "PUT",
    path: "/playlists/{id}",
    handler: handler.putPlaylistByIdHandler,
    options: {
      auth: "playlists_songsapp_jwt",
    },
  },
  {
    method: "DELETE",
    path: "/playlists/{id}",
    handler: handler.deletePlaylistByIdHandler,
    options: {
      auth: "playlists_songsapp_jwt",
    },
  },
];

module.exports = routes;
