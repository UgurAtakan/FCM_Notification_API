import firebaseAdmin from 'firebase-admin';

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert({
    projectId: 'rnprojects-010000',
    clientEmail:
      'firebase-adminsdk-ou4eo@rnprojects-010000.iam.gserviceaccount.com',
    privateKey:
      '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDudT+snUocI3i2\nS7NyRHa2ltum2940fvzbl1Un+DBMfM9MbbhNsr8KgvBi0f5CHyXOIuVxZU/9ta1J\njynw3EtfvDC+8D/7DcaM3kjWuGtKNpaSta7oXu+vzeMEZTKIqJF8qaZWYMWUWX40\nAx7pqXHZkTHYDYffz055eefJPUbLbVuE+q0LeKd1qN1T7e09Oa/av2U6Ol+wsHp1\nGtClNWRhk2jBjmxdkUYworeHCMy086RReST+OCJlcHIsOsojuy4jmeerLhtF5F5Z\n316aFwOx5DvtTKKz3qh5hc4IoS6zLQ5fj16E6BdfJUebw2vnMGiZzm3+p57uDvnc\n1qsKmaBBAgMBAAECggEAFJX7LgHzLqwyRNySrIv0Cq3J3yUOkQ4gcq2lHJr8wnGo\n7MJxHYYPn47vxTw3PMqXFy1kjO5P4kl/oQDSwFgoSqbCt40inOAS0sDy3VSU8JZ3\nV8mHBMkDXLRDw7Kf0vPogXBc64qVrAmwzzkwvz/RVBTIjowWfZAWSH7pb3JSjQek\nbKPlXzsgwTxORDTjkRQzjV6cHe7LLBnx1aGXEvM3xqPF4hsz6Hge9xx+6bisnVVb\nz+1acUVFSR3/wrtcL+v3SZLe4Thkg04RqfQQ1RPot7f+aNOHOMJBQLMQdvUBlckJ\ni0konAmjg5nv1v+2aAcYTwl24jvfZe82uNeCX79rlQKBgQD4czocZOZ3D+9G2Axq\n2Igxku2+YzUIMcFJqcR9bbTkF+ZHD93mT+6CrexWoJvNaAk3tnD7C9iPF81RE7VY\nKw5AIEB1Fi+wrRRVIOz753amAEFypykO/1GybhpJrSX1SpBUU2ysTpNOsPkLSvWX\nhBj42oqMJd0HqeotE5GbBwWWbQKBgQD1tEo7A4KABE3RsJ8P5UOGMhe9sCVWpBDq\nEZlT3BmKiBIUADaGIs91xqGEq3yalCuy36R6Utq24mMqeWcCLJznENZeAGNdXUY5\nbs3Eajgf5wTAwMBtBE/gUQTpFskPRRZWa4f0L44whjLd90Gq/0lUV/x/DQeOX1gG\nSDxPBWLcpQKBgQCfFckj3Ufk/QMNrdFlqPisJZSt0ABpGtLVRCtY1SJ62wLMhdBk\nZNIoQw2N+pFI2VDtp5h4Z4FnPqptO91mc0tQrFYZovcufeUDDW4xbmh+qrM9ouOb\ngsjhI7cZbhFcGz6HgFOZkUapoJAXNwxC1IbY8ba9PpFlEturuVgGmFxvkQKBgQDl\nD+GsRsdg5aJO/SQtQ4XCE+1CMHd+4JHMRf/1yFofZl/EObabMtTKbhWig+U0jzJ2\nHj1OtPOmUEQ3EttPkZvtZysSk7YPEqgnXv+CP6x3QX6S3KAIgl6dN6smStHC5JvA\nkZs7sSIUZugBO0QDUOBiO2zwXYtP1d9QbAOdf9386QKBgBx9MWozAC3+K8G6VXa6\n6BSBGzJznemQA3o6+pTDDgJ07NaX70bdP/ve4+oDlMsXBnDKmNHpMccH3Wh1o1lX\nCemk/gglQqqyjokcIW7lHvme5I5znZbKDRg7UtiWStjQeQxdMze8uJpVgMPS17tq\n4P+bbaIG0TvAcsUD0xUor2Vk\n-----END PRIVATE KEY-----\n',
  }),
});

const firebaseMessaging = firebaseAdmin.messaging(firebaseAdmin.app());

export default firebaseMessaging;
