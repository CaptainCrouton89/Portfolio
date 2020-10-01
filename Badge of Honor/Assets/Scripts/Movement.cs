using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Movement : MonoBehaviour
{

    float yVelocity = 0f;
    float xRotVelocity = 0f;
    float yRotVelocity = 0f;
    float zRotVelocity = 0f;
    float maxPitch = 90f;
    float maxRoll = 90f;
    float maxYaw = 90f;
    float maxVelocity = 10;
    public AudioSource engines;
    public float acceleration;
    public float maxSpeed;
    public float rightTurnSpeed;
    public float leftTurnSpeed; 
    // Start is called before the first frame update
    
    void Start()
    {
        engines.Play();
        SetSound();
    }

    private void SetSound()
    {
        float volume = yVelocity / maxVelocity;
        engines.volume = (float)volume;
        Debug.Log("veloctiy: " + yVelocity + " volume: " + volume);
    }

    // Update is called once per frame
    void Update()
    {
        transform.Translate(Vector3.forward * yVelocity * Time.deltaTime);
        transform.Rotate(maxPitch * xRotVelocity * Time.deltaTime, maxYaw * yRotVelocity * Time.deltaTime, maxRoll * zRotVelocity * Time.deltaTime);


        // TRANLATION

        if (Input.GetKey(KeyCode.LeftShift))
        {
            yVelocity += .1f;
            if (yVelocity > maxVelocity)
            {
                yVelocity = maxVelocity;
            }
            SetSound();
        }

        if (Input.GetKey(KeyCode.LeftControl))
        {
            yVelocity -= .1f;
            if (yVelocity < 0)
            {
                yVelocity = 0;
            }
            SetSound();
        }

        // ROTATION

        xRotVelocity = 0f;
        yRotVelocity = 0f;
        zRotVelocity = 0f;

        if (Input.GetKey("s"))
        {
            xRotVelocity = -1;
        }

        else if (Input.GetKey("w"))
        {
            xRotVelocity = 1;
        }

        if (Input.GetKey("q"))
        {
            zRotVelocity = 1;
        }

        else if (Input.GetKey("e"))
        {
            zRotVelocity = -1;
        }

        if (Input.GetKey("a"))
        {
            yRotVelocity = -1;
        }

        else if (Input.GetKey("d"))
        {
            yRotVelocity = 1;
        }

        if (Input.GetKey("x"))
        {
            yVelocity = 0;
        }

    }
}
