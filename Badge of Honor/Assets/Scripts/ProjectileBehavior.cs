using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ProjectileBehavior : MonoBehaviour
{
    // Start is called before the first frame update

    public Rigidbody rb;
    public Vector3 m_direction;
    public GameObject collisionExplosion;
    public float speed;

    private float m_damage;
    
    void Start()
    {
        rb  = GetComponent<Rigidbody>();
        Destroy(gameObject, 2f);
    }

    public void init(float damage)
    {
        m_damage = damage;
    }
    /*
    private void OnTriggerEnter(Collider collision)
    {

        //Comment the below line out, testing purposes only
        //collision.gameObject.GetComponent<asteroidBehavior>().TakeDamage(m_damage);
        
        if (collision.gameObject.CompareTag("CrashObject"))
        {
            Destroy(gameObject);
            collision.GetComponent<Asteroid>().TakeDamage(m_damage);
        }
    }
    */
    


    // Update is called once per frame
    void Update()
    {

    }

    public void setDirection(Vector3 direction)
    {
        float step = speed * Time.deltaTime;
        m_direction = direction;

        rb.velocity += m_direction * speed;
    }
}