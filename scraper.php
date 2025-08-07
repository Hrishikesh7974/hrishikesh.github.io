<?php
// Allow Cross-Origin requests
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Get the URL from GET parameters
if (!isset($_GET['url'])) {
    echo json_encode(["error" => "Missing 'url' parameter."]);
    exit;
}

$url = $_GET['url'];

// Validate URL format
if (!filter_var($url, FILTER_VALIDATE_URL)) {
    echo json_encode(["error" => "Invalid URL."]);
    exit;
}

// Optional: Allow only terabox.tech URLs
$parsed = parse_url($url);
if (!str_contains($parsed['host'], 'terabox.tech')) {
    echo json_encode(["error" => "Only terabox.tech URLs are allowed."]);
    exit;
}

// Fetch the URL content
$context = stream_context_create([
    "http" => [
        "method" => "GET",
        "header" => "User-Agent: Mozilla/5.0\r\n"
    ]
]);

$response = @file_get_contents($url, false, $context);

if ($response === false) {
    echo json_encode(["error" => "Failed to fetch content."]);
    exit;
}

// Output raw JSON from Terabox API
echo $response;
?>
