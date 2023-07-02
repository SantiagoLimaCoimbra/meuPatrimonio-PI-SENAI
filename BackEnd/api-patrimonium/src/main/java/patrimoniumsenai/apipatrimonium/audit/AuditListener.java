package patrimoniumsenai.apipatrimonium.audit;

import jakarta.persistence.PrePersist;
import jakarta.persistence.PreRemove;
import jakarta.persistence.PreUpdate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class AuditListener {
    @Autowired
    static AuditRepository auditRepository;

    @Autowired
    public void init(AuditRepository auditRepository)
    {
        this.auditRepository = auditRepository;
    }

    @PrePersist
    public void beforeCreate(Object object) {
        System.out.println(object);
        final AuditDTO auditDTO = createAudit(object, "CREATE");
        auditRepository.save(new Audit(auditDTO));
    }

    @PreUpdate
    private void beforeUpdate(Object object) {

    }

    @PreRemove
    private void beforeRemove(Object object) {

    }

    private AuditDTO createAudit(Object object, String type) {
        final AuditDTO auditDTO = new AuditDTO(object.getClass().getSimpleName(), type, LocalDateTime.now());

        return auditDTO;
    }
}
