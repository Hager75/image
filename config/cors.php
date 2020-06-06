<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

    'paths' => ['api/*',
    'login',
    'logout',
    // 'sanctum/csrf-cookie'
],
    

    'allowed_methods' => ['*'],
    // 'allow_credentials' => true,


    'allowed_origins' => ['*'],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],
    // 'stateful' => [
    //     'http://localhost:4200',
    // ],

    'exposed_headers' => [
        // 'Cache-Control',
        // 'Content-Language',
        // 'Content-Type',
        // 'Expires',
        // 'Last-Modified',
        // 'Pragma',
        // 'Set-Cookie'
    ],

    'max_age' => 60*60*24,
    
    'supports_credentials' => true,

];
