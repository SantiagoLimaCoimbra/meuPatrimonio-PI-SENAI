package patrimoniumsenai.apipatrimonium.audit;

import java.time.LocalDateTime;

public record ReadAuditDTO(Long id_audit, String entity, String operation, String modifiedBy, LocalDateTime modifiedAt) {

    public ReadAuditDTO(Audit audit){
        this(audit.getId_audit(), audit.getEntity(), audit.getOperation(), audit.getModifiedBy(), audit.getModifiedAt());
    }

}
