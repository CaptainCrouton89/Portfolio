using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MissileTube1 : MonoBehaviour
{

    public float firingRate = 5.0f;
    private float firingTimeStamp;

    public GameObject missile1Prefab;
    public AudioSource missileLaunchSound;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    void Shoot()
    {
        missileLaunchSound.Play();
        GameObject missile1 = GameObject.Instantiate(missile1Prefab, transform.position, transform.rotation) as GameObject;
        /*
        ProjectileBehavior projectileBehavior = projectile.GetComponent<ProjectileBehavior>();
        
        projectileBehavior.init(missile1);
        projectileBehavior.setDirection(cockpitCamera.transform.TransformDirection(Vector3.forward));
        */
        GameObject.Destroy(missile1, 2f);
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKey(KeyCode.Alpha1))
        {
            if (Time.time > firingTimeStamp)
            {
                Shoot();
                firingTimeStamp = Time.time + firingRate;
            }
        }
    }
}
