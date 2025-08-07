<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if (!isset($_GET['url'])) {
    echo json_encode(["error" => "No URL provided."]);
    exit;
}

$url = $_GET['url'];

// Validate terabox.com URL
$parsed = parse_url($url);
if (!isset($parsed['host']) || strpos($parsed['host'], 'terabox.com') === false) {
    echo json_encode(["error" => "Only terabox.com links are allowed."]);
    exit;
}

// Fetch page content
$context = stream_context_create([
    "http" => [
        "method" => "GET",
        "header" => "User-Agent: Mozilla/5.0\r\n"
    ]
]);

$html = @file_get_contents($url, false, $context);

if (!$html) {
    echo json_encode(["error" => "Failed to load Terabox page."]);
    exit;
}

// Extract JSON data from <script> tag
if (preg_match('/window\\.__INITIAL_STATE__\\s*=\\s*({.*});/', $html, $matches)) {
    $json = json_decode($matches[1], true);
    
    if (!$json || !isset($json['shareInfo']['file_list'][0])) {
        echo json_encode(["error" => "Video data not found."]);
        exit;
    }

    $videoData = $json['shareInfo']['file_list'][0];
    $videoUrl = $videoData['dlink'];
    $title = $videoData['file_name'];
    $thumbnail = $videoData['thumb_link'] ?? '';

    echo json_encode([
        "title" => $title,
        "video_url" => $videoUrl,
        "thumbnail" => $thumbnail
    ]);
} else {
    echo json_encode(["error" => "Failed to extract video info."]);
}
?>
