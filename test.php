<?php
session_start();
$_SESSION['test'] = 'test';

$counter = false;
$mycon = mysqli_connect("localhost", "root", "", "feedback_data");
if(isset($_POST['Submit']))
{
 $FirstName = $_POST['FirstName'];
 $LastName = $_POST['LastName'];
 $Enum = $_POST['Enum'];
 $email = $_POST['email'];
 $BreakFast = $_POST['BreakFast'];
 $Lunch = $_POST['Lunch'];
 $TeaTime = $_POST['TeaTime'];
 $Dinner = $_POST['Dinner'];
 $Utensils = $_POST['Utensils'];
 $Suggestions = $_POST['Suggestions'];
 if (!$mycon) {
    die('Something went wrong'.mysqli_error($con));
}
$sql="INSERT INTO feedback(FirstName,LastName,email,EnrollmentNumber,Breakfast,Lunch,TeaTime,Dinner,Utensils,Suggestions) VALUES ('$FirstName','$LastName','$email','$Enum','$BreakFast','$Lunch','$TeaTime','$Dinner','$Utensils','$Suggestions')";
mysqli_query($mycon, $sql);
echo "data inserted succesfully";
header('location:index.php');
//$con->close($con);
}
?>