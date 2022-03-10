/**
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package io.gravitee.repository.mongodb.management;

import io.gravitee.node.api.upgrader.UpgraderRepository;
import io.gravitee.node.api.upgrader.UpgradeRecord;
import io.gravitee.repository.mongodb.management.internal.upgrader.UpgraderMongoRepository;
import io.reactivex.Maybe;
import io.reactivex.Single;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * @author Kamiel Ahmadpour (kamiel.ahmadpour at graviteesource.com)
 * @author GraviteeSource Team
 */
@Component
public class MongoUpgraderRepository implements UpgraderRepository {

    @Autowired
    private UpgraderMongoRepository internalUpgraderMongoRepository;

    @Override
    public Maybe<UpgradeRecord> findById(String id) {
        Optional<UpgradeRecord> upgraderData = internalUpgraderMongoRepository.findById(id);
        return upgraderData.isPresent() ? Maybe.just(upgraderData.get()) : Maybe.empty();
    }

    @Override
    public Single<UpgradeRecord> create(UpgradeRecord upgradeRecord) {
        UpgradeRecord upgradeRecordMongo = internalUpgraderMongoRepository.insert(upgradeRecord);
        return Single.just(upgradeRecordMongo);
    }
}
