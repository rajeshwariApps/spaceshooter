#pragma strict

function Start () {

}

function Update () {

}
public function loadScene( )
{
	SceneManagement.SceneManager.LoadScene("ControlScene");
    Time.timeScale = 1;
}