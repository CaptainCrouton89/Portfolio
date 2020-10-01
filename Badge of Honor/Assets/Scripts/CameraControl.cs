using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraControl : MonoBehaviour
{

    float smooth = 5.0f;
    float tiltAngle = 2.0f;

    float tiltAroundY;
    float tiltAroundX;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyUp(KeyCode.Space))
        {
            //transform.rotation = transform.parent.rotation;
            tiltAroundX = 0;
            tiltAroundY = 0;
            transform.rotation = Quaternion.Slerp(transform.rotation, transform.parent.rotation,  Time.deltaTime * smooth);
            
        }

        tiltAroundY += Input.GetAxis("Mouse X") * tiltAngle;
        tiltAroundX -= Input.GetAxis("Mouse Y") * tiltAngle;
        

        transform.localRotation = Quaternion.Euler(tiltAroundX, tiltAroundY, 0);

        /*
        
        
        */
    }
}
