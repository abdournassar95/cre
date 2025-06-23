<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  if ($_POST['username'] === 'admin' && $_POST['password'] === '123456') {
    $_SESSION['admin'] = true;
    header("Location: dashboard.php");
    exit;
  } else {
    $error = "Invalid credentials";
  }
}
?>
<form method="POST">
  <input name="username" placeholder="Username" required>
  <input type="password" name="password" placeholder="Password" required>
  <button type="submit">Login</button>
  <?php if (isset($error)) echo "<p>$error</p>"; ?>
</form>
