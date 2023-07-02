package patrimoniumsenai.apipatrimonium.audit;

import jakarta.persistence.PrePersist;
import jakarta.persistence.PreRemove;
import jakarta.persistence.PreUpdate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import patrimoniumsenai.apipatrimonium.admin.Admin;

import java.time.LocalDateTime;
import java.util.Optional;


@Component
public class AuditListener {
    @Autowired
    static AuditRepository auditRepository;

    public Optional<Admin> getCurrentAuditor() {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null || !authentication.isAuthenticated()) {
            return null;
        }

        return Optional.of((Admin) authentication.getPrincipal());
    }

    @Autowired
    public void init(AuditRepository auditRepository)
    {
        this.auditRepository = auditRepository;
    }

    @PrePersist
    public void beforeCreate(Object object) {
        final AuditDTO auditDTO = createAudit(object, "Cadastro");
        auditRepository.save(new Audit(auditDTO));
    }

    @PreUpdate
    private void beforeUpdate(Object object) {
        final AuditDTO auditDTO = createAudit(object, "Edição");
        auditRepository.save(new Audit(auditDTO));
    }

    @PreRemove
    private void beforeRemove(Object object) {
        final AuditDTO auditDTO = createAudit(object, "Remoção");
        auditRepository.save(new Audit(auditDTO));
    }

    private AuditDTO createAudit(Object object, String type) {
        var auditorName = getCurrentAuditor().get().getName();

        //object.toString() --> retornar o payload

        return new AuditDTO(object.getClass().getSimpleName(), type, auditorName, LocalDateTime.now());
    }
}
